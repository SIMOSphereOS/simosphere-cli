// ---------------------------------------------------------------------------
// @simosphere/cli — SIMOSphere AI command-line interface
// ---------------------------------------------------------------------------

import { SIMOSphereClient, SIMOSphereError } from '@simosphere/sdk';

// -- Helpers ----------------------------------------------------------------

function getApiKey(): string {
  const key = process.env.SIMOSPHERE_API_KEY;
  if (!key) {
    console.error(
      'Error: SIMOSPHERE_API_KEY is not set.\n' +
        'Get your API key at https://app.simosphereai.com and export it:\n\n' +
        '  export SIMOSPHERE_API_KEY="sk-..."',
    );
    process.exit(1);
  }
  return key;
}

function client(): SIMOSphereClient {
  return new SIMOSphereClient({
    apiKey: getApiKey(),
    baseUrl: process.env.SIMOSPHERE_BASE_URL,
  });
}

function printJson(data: unknown): void {
  console.log(JSON.stringify(data, null, 2));
}

// -- Commands ---------------------------------------------------------------

async function cmdHealth(): Promise<void> {
  const c = new SIMOSphereClient({
    apiKey: 'anonymous',
    baseUrl: process.env.SIMOSPHERE_BASE_URL,
  });
  const res = await c.health();
  printJson(res);
}

async function cmdModels(): Promise<void> {
  const res = await client().models();
  if (res.data && Array.isArray(res.data)) {
    console.log(`Available models (${res.data.length}):\n`);
    for (const m of res.data) {
      console.log(`  - ${m.id}  (${m.owned_by})`);
    }
  } else {
    printJson(res);
  }
}

async function cmdChat(message: string): Promise<void> {
  const res = await client().chat({
    messages: [{ role: 'user', content: message }],
  });
  if (res.choices?.[0]?.message?.content) {
    console.log(res.choices[0].message.content);
  } else {
    printJson(res);
  }
}

async function cmdAsk(query: string): Promise<void> {
  const baseUrl = (process.env.SIMOSPHERE_BASE_URL ?? 'https://api.simosphereai.com').replace(
    /\/+$/,
    '',
  );
  const url = `${baseUrl}/v1/nlweb/ask?query=${encodeURIComponent(query)}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${getApiKey()}` },
  });
  const data = await res.json();
  printJson(data);
}

// -- Usage ------------------------------------------------------------------

function printUsage(): void {
  console.log(`
SIMOSphere AI CLI v0.1.0

Usage:
  simosphere health                Check API gateway health
  simosphere models                List available LLM models
  simosphere chat "message"        Send a chat completion
  simosphere ask  "query"          NLWeb natural-language query

Environment:
  SIMOSPHERE_API_KEY               API key (required for models/chat/ask)
  SIMOSPHERE_BASE_URL              Override gateway URL (default: https://api.simosphereai.com)

Get your API key at https://app.simosphereai.com
`);
}

// -- Main -------------------------------------------------------------------

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const command = args[0]?.toLowerCase();

  try {
    switch (command) {
      case 'health':
        await cmdHealth();
        break;
      case 'models':
        await cmdModels();
        break;
      case 'chat':
        if (!args[1]) {
          console.error('Usage: simosphere chat "Your message here"');
          process.exit(1);
        }
        await cmdChat(args.slice(1).join(' '));
        break;
      case 'ask':
        if (!args[1]) {
          console.error('Usage: simosphere ask "Your query here"');
          process.exit(1);
        }
        await cmdAsk(args.slice(1).join(' '));
        break;
      case '--help':
      case '-h':
      case 'help':
        printUsage();
        break;
      default:
        printUsage();
        process.exit(command ? 1 : 0);
    }
  } catch (err) {
    if (err instanceof SIMOSphereError) {
      console.error(`Error [${err.code}]: ${err.message}`);
      if (err.status) console.error(`  HTTP status: ${err.status}`);
    } else {
      console.error(`Error: ${(err as Error).message}`);
    }
    process.exit(1);
  }
}

main();

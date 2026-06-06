# @simosphere/cli

Command-line interface for the **SIMOSphere AI** platform.

## Installation

```bash
npm install -g @simosphere/cli
```

## Setup

```bash
export SIMOSPHERE_API_KEY="sk-..."   # from https://app.simosphereai.com
```

## Commands

```bash
# Check API gateway health (no auth required)
simosphere health

# List available LLM models
simosphere models

# Send a chat completion
simosphere chat "Summarize the benefits of on-premise AI"

# NLWeb natural-language query
simosphere ask "What is SIMOSphere AI?"
```

## Environment variables

| Variable               | Required | Default                          | Description          |
| ---------------------- | -------- | -------------------------------- | -------------------- |
| `SIMOSPHERE_API_KEY`   | Yes      | --                               | Your API key         |
| `SIMOSPHERE_BASE_URL`  | No       | `https://api.simosphereai.com`   | Override gateway URL |

## License

MIT -- SIMO GmbH, Aschaffenburg, Germany

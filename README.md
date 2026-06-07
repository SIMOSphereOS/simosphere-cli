<div align="center">

# @simosphere/cli

**Command-line interface for the SIMOSphere AI platform.**

[![npm](https://img.shields.io/npm/v/@simosphere/cli)](https://www.npmjs.com/package/@simosphere/cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

[English](#english) | [Deutsch](#deutsch)

</div>

---

## English

### Overview

`@simosphere/cli` brings the [SIMOSphere AI](https://simosphereai.com) platform to your terminal. Run chat completions, query available models, check gateway health, and perform natural-language queries -- all from a single command.

Built by [SIMO GmbH](https://simo-online.com). EU-hosted, GDPR-compliant inference.

### Installation

```bash
npm install -g @simosphere/cli
```

### Setup

```bash
export SIMOSPHERE_API_KEY="sk-..."   # from https://app.simosphereai.com
```

### Commands

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

### Environment Variables

| Variable              | Required | Default                        | Description          |
| --------------------- | -------- | ------------------------------ | -------------------- |
| `SIMOSPHERE_API_KEY`  | Yes      | --                             | Your API key         |
| `SIMOSPHERE_BASE_URL` | No       | `https://api.simosphereai.com` | Override gateway URL |

### Links

- **Platform:** [simosphereai.com](https://simosphereai.com)
- **API Documentation:** [simosphereai.com/de/developers](https://simosphereai.com/de/developers)
- **SDK:** [@simosphere/sdk on npm](https://www.npmjs.com/package/@simosphere/sdk)

---

## Deutsch

### Ueberblick

`@simosphere/cli` bringt die [SIMOSphere AI](https://simosphereai.com)-Plattform direkt in Ihr Terminal. Fuehren Sie Chat-Completions aus, fragen Sie verfuegbare Modelle ab, pruefen Sie den Gateway-Status und stellen Sie natuerlichsprachliche Anfragen -- alles mit einem einzigen Befehl.

Entwickelt von [SIMO GmbH](https://simo-online.com). EU-Hosting, DSGVO-konform.

### Installation

```bash
npm install -g @simosphere/cli
```

### Einrichtung

```bash
export SIMOSPHERE_API_KEY="sk-..."   # von https://app.simosphereai.com
```

### Befehle

```bash
# Gateway-Status pruefen (keine Authentifizierung noetig)
simosphere health

# Verfuegbare LLM-Modelle auflisten
simosphere models

# Chat-Completion senden
simosphere chat "Fasse die Vorteile von On-Premise-KI zusammen"

# Natuerlichsprachliche Abfrage
simosphere ask "Was ist SIMOSphere AI?"
```

### Umgebungsvariablen

| Variable              | Pflicht | Standard                       | Beschreibung            |
| --------------------- | ------- | ------------------------------ | ----------------------- |
| `SIMOSPHERE_API_KEY`  | Ja      | --                             | Ihr API-Schluessel      |
| `SIMOSPHERE_BASE_URL` | Nein    | `https://api.simosphereai.com` | Gateway-URL ueberschreiben |

### Weitergehende Informationen

- **Plattform:** [simosphereai.com](https://simosphereai.com)
- **API-Dokumentation:** [simosphereai.com/de/developers](https://simosphereai.com/de/developers)
- **SDK:** [@simosphere/sdk auf npm](https://www.npmjs.com/package/@simosphere/sdk)

---

## License / Lizenz

MIT -- Engineered at SIMO GmbH · Aschaffenburg, Germany

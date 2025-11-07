# FacilityFlow Backend

This directory contains the Node.js + TypeScript backend for FacilityFlow.

## Prerequisites

- Node.js (version 18 or later is recommended)
- npm

## Installation

1. Navigate to this directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Development

Start the development server with hot-reloading:

```bash
npm run dev
```

The server will run on [http://localhost:4000](http://localhost:4000) and exposes a health check at `/api/health`.

## Production Build

To build the TypeScript project and run the compiled server:

```bash
npm run build
npm start
```

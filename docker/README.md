# Docker Infrastructure

This directory contains the Docker configuration for the Guinni project.

## Services

- **PostgreSQL 15**: Database server for the application

## Environment Configuration

This directory only contains **Docker-specific environment variables** for
configuring containers. The server application has its own `.env` file in the
`server/` directory.

## Quick Start

1. Copy the environment template:

   ```bash
   cp .env.example .env
   ```

2. Edit `.env` with your PostgreSQL credentials

3. Start services:

   ```bash
   # From project root:
   npm run docker:up

   # Or from this directory:
   docker-compose --env-file .env up -d
   ```

**Note:** Make sure the `server/.env` file has a `DATABASE_URL` that matches the
credentials you set here.

## Available Commands

### From Project Root

- `npm run docker:up` - Start all services
- `npm run docker:down` - Stop all services
- `npm run docker:logs` - View logs from all services
- `npm run docker:reset` - Reset all services (removes data)

### From Server Directory

- `npm run db:up` - Start PostgreSQL only
- `npm run db:down` - Stop PostgreSQL
- `npm run db:logs` - View PostgreSQL logs
- `npm run db:reset` - Reset PostgreSQL (removes data)

## Environment Variables

See `.env.example` for required variables. The `.env` file is gitignored for
security.

## Data Persistence

PostgreSQL data is stored in a Docker volume `postgres_data` and persists
between container restarts.

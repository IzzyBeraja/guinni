# Guinni Server

Express.js server with TypeScript, Drizzle ORM, and PostgreSQL, powered by
**Bun**.

## Prerequisites

Install Bun runtime:

```bash
curl -fsSL https://bun.sh/install | bash
```

## Quick Start

1. **Start the database** (see `docker/README.md` for setup):

   ```bash
   bun run db:up
   ```

2. **Set up environment**:

   ```bash
   cp .env.example .env
   # Edit .env with your DATABASE_URL
   ```

3. **Install dependencies**:

   ```bash
   bun install
   ```

4. **Initialize database**:

   ```bash
   bun run db:migrate
   ```

5. **Start development server**:

   ```bash
   bun run dev
   ```

Server runs at `http://localhost:3000`

## Scripts

### Development

- `npm run dev` - Start with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server

### Database

- `npm run db:migrate` - Apply schema changes
- `npm run db:studio` - Open database GUI
- `npm run db:up/down/reset` - Manage PostgreSQL container

## Environment Variables

| Variable       | Description                  | Default       |
| -------------- | ---------------------------- | ------------- |
| `NODE_ENV`     | Environment mode             | `development` |
| `PORT`         | Server port                  | `3000`        |
| `DATABASE_URL` | PostgreSQL connection string | Required      |

**Note:** `DATABASE_URL` should match credentials in `docker/.env`

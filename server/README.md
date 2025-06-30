# Guinni Server

Express.js server with TypeScript, Drizzle ORM, and PostgreSQL.

## Quick Start

1. **Start the database** (see `docker/README.md` for setup):

   ```bash
   npm run db:up
   ```

2. **Set up environment**:

   ```bash
   cp .env.example .env
   # Edit .env with your DATABASE_URL
   ```

3. **Initialize database**:

   ```bash
   npm run db:migrate
   ```

4. **Start development server**:

   ```bash
   npm run dev
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

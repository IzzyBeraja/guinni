# Database Setup

## Security

This project uses environment variables to protect sensitive database
credentials. **Never commit the `.env` file to version control.**

## Quick Start

1. Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

2. Edit `.env` with your secure credentials:

   ```bash
   # Generate secure passwords for production use
   POSTGRES_PASSWORD=your_very_secure_password_here
   ```

3. Start the database:

   ```bash
   npm run db:up
   ```

4. Initialize the database schema:

   ```bash
   npm run db:migrate
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

## Database Commands

- `npm run db:up` - Start PostgreSQL container
- `npm run db:down` - Stop PostgreSQL container
- `npm run db:logs` - View database logs
- `npm run db:reset` - Reset database (removes all data)
- `npm run db:migrate` - Apply schema changes
- `npm run db:studio` - Open Drizzle Studio (database GUI)

## Environment Variables

Required environment variables are documented in `.env.example`. The actual
`.env` file is gitignored for security.

## Production Deployment

For production, use strong passwords and consider:

- Using managed database services (AWS RDS, Google Cloud SQL, etc.)
- Rotating credentials regularly
- Using secrets management systems
- Enabling SSL/TLS connections

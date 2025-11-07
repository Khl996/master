# FacilityFlow Backend

## Environment setup

1. Copy `.env` and update the `DATABASE_URL` with your PostgreSQL credentials.
2. Install dependencies:
   ```bash
   npm install prisma @prisma/client
   ```
3. Generate the Prisma client whenever the schema changes:
   ```bash
   npx prisma generate
   ```

## Database migrations

Run the initial migration (creates a new migration named `init`):
```bash
npm run prisma:migrate
```

Open Prisma Studio to inspect and edit data:
```bash
npm run prisma:studio
```

## Seeding example data

To seed the database with the sample facility hierarchy and asset:
```bash
npx ts-node prisma/seed.ts
```

Ensure the database specified in `DATABASE_URL` is accessible before running migrations or the seed script.

# RCOV

RCOV (Robotics Club of Valmiki) is a student community platform for building, learning, connecting and creating.

## Start the client

```bash
npm install
npm run dev
```

The first client slice is intentionally usable without a database. It includes a responsive community home, challenges, events, projects, theme switching, and the Gaida preview flow.

## Start the API

1. Copy `.env.example` to `.env` and provide a PostgreSQL connection string.
2. Generate and migrate Prisma:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

3. Run the API:

```bash
npm run server
```

The API currently exposes `/api/health` and a validated `/api/gaida/messages` queue boundary. Authentication and provider secrets belong on the server and are the next implementation slice.

## Branding

The current hero uses a clearly labeled temporary placeholder. Upload the official RCOV logo before final branding, then use that asset for the navbar, auth, dashboard, profiles, Gaida, favicon and loading states.

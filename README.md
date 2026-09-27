# RCOV

RCOV (Robotics Club of Valmiki) is a student community platform for building, learning, connecting and creating.

## Start the client

```bash
npm install
npm run dev
```

The client includes responsive community, dashboard, project editor, challenges, events, people search, career exploration, achievements, profile, settings, help, and Gaida views. Community interactions in the UI currently use browser-local demo storage and are labeled as such; only the auth and REST API slices persist to PostgreSQL.

## Start the API

1. Copy `.env.example` to `.env` and set a PostgreSQL connection string. OAuth and AI variables are server-side placeholders; the corresponding integrations are not enabled yet.
2. Generate the Prisma client, apply the schema, and seed development records:

```bash
npm run db:generate
npm run db:migrate -- --name init
npm run db:seed
```

3. Run the API:

```bash
npm run server
```

4. In another terminal, start the Vite client with `npm run dev` (the `/api` path is proxied to port 4000).

The API includes email registration/login with scrypt password hashes and expiring, hashed, HttpOnly sessions; public project/challenge/event reads; authenticated project create/edit and participation endpoints; validation; basic rate limits; CORS allowlisting; and security headers. OAuth providers and an AI model adapter are not configured. Gaida returns a clear `503` until a real adapter is added. Do not treat the browser-local demo interactions, sample counters, or seeded data as production data.

## Current implementation boundary

This is a working foundation, not yet a production-complete community service. OAuth account linking, full RBAC administration, notifications, comments, project media uploads/build updates, challenge submissions/results, and server-backed profile/career/Gaida history still need implementation. Configure OAuth and AI credentials only on the server; never put them in Vite client variables.

## Branding

The current interface uses a clearly labeled temporary placeholder. Upload the official RCOV logo before final branding, then use that asset for the navbar, auth, dashboard, profiles, Gaida, favicon and loading states.

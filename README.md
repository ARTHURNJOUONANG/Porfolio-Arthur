# Portfolio — Arthur Njouonang

Portfolio professionnel : vitrine publique, pages projet, formulaire de contact, assistant, API, base de données, tests et CI.

**Je conçois et développe des applications web et mobiles modernes, de l'idée jusqu'au déploiement.**

## Stack

- **Frontend** : Next.js 15, TypeScript, Tailwind CSS
- **Backend** : Route Handlers Next.js (API REST)
- **ORM / DB** : Prisma + SQLite en local, PostgreSQL en production
- **Tests** : Vitest (unitaire) · Playwright (E2E)
- **CI** : GitHub Actions (lint, tests, build)

## Démarrage local

```bash
npm install
copy .env.example .env
npx prisma db push
npm run db:seed
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build production |
| `npm run lint` | ESLint |
| `npm test` | Tests unitaires |
| `npm run test:e2e` | Parcours visiteur Playwright |
| `npm run db:push` | Synchroniser le schéma |
| `npm run db:seed` | Données initiales |

## Architecture

```
Visiteur → Next.js (pages UI)
              ↓
         API / Route Handlers
              ↓
         Prisma → SQLite / PostgreSQL
              ↓
         Services (Resend, GitHub, optionnel OpenAI)
```

Le site public est aussi le produit : frontend, API, persistance, analytics internes et pipeline CI.

## Contenu éditorial

Les projets, expériences, formations et compétences sont en base (seed Prisma).

Projets mis en avant :

1. CareerAI
2. CRM
3. Compta Pilot
4. ProTech Occitanie
5. SymfoConnect
6. Treevas Agents

## Production

1. Créer une base PostgreSQL managée.
2. Remplacer `DATABASE_URL` par l’URL PostgreSQL.
3. Dans `prisma/schema.prisma`, passer `provider` à `postgresql`.
4. Optionnel : `RESEND_API_KEY` pour l’envoi d’e-mails.
5. Déployer le frontend sur Vercel.

Documentation API : [docs/API.md](docs/API.md)

## Sécurité

- Validation Zod côté API
- Sanitation des messages
- Honeypot anti-spam + rate limiting
- En-têtes de sécurité dans le middleware
- Secrets uniquement via variables d’environnement

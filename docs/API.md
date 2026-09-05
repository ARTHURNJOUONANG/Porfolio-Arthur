# Documentation API

Base URL locale : `http://localhost:3000`

## Public

### `POST /api/contact`

Envoie un message. Honeypot `website` (doit rester vide). Rate limit : 5 / minute / IP.

```json
{
  "name": "Marie Dupont",
  "email": "marie@example.com",
  "subject": "Mission fullstack",
  "message": "Pouvez-vous intervenir sur une application Next.js ?",
  "website": ""
}
```

Réponses : `200 { ok: true, emailed }` · `400` payload invalide · `429` trop de requêtes · `502` Resend a échoué.

### `POST /api/assistant`

Question sur le portfolio (base de connaissances locale).

```json
{ "question": "Quels projets a réalisé Arthur ?", "locale": "fr" }
```

### `POST /api/locale`

Définit le cookie `locale` (`fr` | `en`).

### `POST /api/analytics`

Enregistre une vue de page (chemin commençant par `/`).

### `GET /api/cv`

Redirige vers la page CV imprimable.

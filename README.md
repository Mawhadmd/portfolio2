# Portfolio + Blog

Personal portfolio and blog built with the Next.js App Router.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Supabase** — blog post storage
- **TipTap** — rich-text editor for the blog admin
- **Framer Motion / motion** + **Aceternity UI** — animations
- **Spotify API** — "now playing" widget
- **nodemailer** — contact form
- **Disqus** — blog comments
- **jose (JWT)** — admin authentication

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:5173
```

See [.env.example](.env.example) for the required environment variables
(Supabase, admin auth, Spotify, and contact-form email). They are read at
request time, so `npm run build` works without them.

## Scripts

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the dev server (port 5173) |
| `npm run build` | Production build                 |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Lint with ESLint                 |

---

**[Inspired by Akarshan](https://akarshan-new.vercel.app/)**

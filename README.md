# Trust Aid Initiative — Website

A rebuild of the Trust Aid Initiative NGO website (previously live at
`trustaidngo.vercel.app`), recreated after the original GitHub repository
became inaccessible. Colors, typography, imagery, and copy were sourced
directly from the live site's compiled assets to keep the rebuild faithful
to the original.

Trust Aid Initiative is a Nigerian NGO (founded 2012, HQ in Kaduna) working
across trauma healing, peacebuilding, climate action, and livelihood
empowerment in Taraba, Benue, Nasarawa, and Kaduna States.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- React + TypeScript
- Tailwind CSS v4
- [Framer Motion](https://www.framer.com/motion/) for scroll-reveal and interactive animations
- [lucide-react](https://lucide.dev) for icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/                  Route segments (App Router) — one folder per page
components/
  layout/             Navbar, Footer
  home/                Homepage sections (hero, stats, program pillars, etc.)
  shared/              Reusable pieces (SectionHeading, FadeIn, CtaBanner, ...)
  forms/               Contact, volunteer, newsletter, donation forms
  programs/ impact/ peace-hub/ get-involved/   Page-specific sections
lib/data/             Typed content (programs, impact stats, site copy, etc.)
```

## Notes

- All forms (contact, volunteer, job application, newsletter, donation) are
  client-side only with simulated success states — no backend is wired up
  yet. Connect a real service (e.g. Resend/email API, Paystack/Flutterwave
  for donations) before taking this to production.
- Some pages (Events, Our Partners) were stub/placeholder pages on the
  original live site and were fleshed out here using real content found
  elsewhere in the original site's codebase.

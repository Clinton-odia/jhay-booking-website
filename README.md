# Jhay Sanyay Studio — Visual Artist & Illustrator Booking Website

A modern, responsive portfolio and commission booking website for **Jhay Sanyay** — a visual artist and illustrator based in Nigeria specializing in single/album cover art, comic illustrations, and brand identity design.

Rebuilt from legacy static HTML into a high-performance **Next.js 16 + TypeScript** web application using **Tailwind CSS v4**.

---

## ✨ Features

- **Categorized Portfolio Showcase**:
  - 33 portfolio assets categorized into 3 distinct sections: **Cover Art**, **Illustrations & Comic Art**, and **Logos & Brand Marks**.
  - Interactive category filter tabs (`All Work`, `Cover Art`, `Illustrations`, `Logos & Branding`).
  
- **Interactive Lightbox Preview**:
  - Click any artwork piece to open a high-resolution preview modal with service recommendations and direct "Book This Style" shortcuts.

- **Client-Side Job Ticket Generator**:
  - Custom commission booking form with auto-generated Ticket IDs (e.g. `260830-84`).
  - Pre-formatted `mailto:` email generation for instant client quotes.
  - Quick-copy ticket summary to clipboard and direct Instagram DM link integration (`@jhaysanyay`).

- **Optimized Next.js Image Delivery**:
  - All visual assets utilize Next.js `<Image />` (`next/image`) for automatic optimization, responsive layout stability, and hover zoom animations.

- **Design System & Aesthetics**:
  - Vintage editorial aesthetic using custom HSL design tokens (`--ink`, `--paper`, `--paper-2`, `--red`, `--yellow`, `--cyan`).
  - Google Fonts integrated via `next/font/google` (`Anton`, `Work Sans`, `Space Mono`).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS design tokens
- **Typography**: Google Fonts (`Anton`, `Work Sans`, `Space Mono`)
- **Deployment & Optimization**: Next.js Static & Server Rendering (`next/image`)

---

## 📁 Project Structure

```text
jhay-booking-website/
├── app/
│   ├── components/
│   │   ├── ContactSheet.tsx      # Vintage 3x3 photo frame grid
│   │   ├── Footer.tsx            # Studio footer with linktree integration
│   │   ├── Header.tsx            # Sticky header with navigation links
│   │   ├── Hero.tsx              # Main headline and call-to-action buttons
│   │   ├── JobTicketForm.tsx     # Order form & mailto ticket generator
│   │   ├── PortfolioGrid.tsx     # Categorized gallery with section headers
│   │   ├── PortfolioModal.tsx    # Lightbox preview modal component
│   │   └── PricingSection.tsx    # Rate menu with ticket layout
│   ├── data/
│   │   └── portfolioData.ts      # Strongly-typed dataset for 33 portfolio pieces
│   ├── portfolio/
│   │   └── page.tsx              # Dedicated /portfolio route
│   ├── globals.css               # Global CSS variables & ticket styles
│   ├── icon.svg                  # Custom studio favicon
│   ├── layout.tsx                # Root layout & Google Fonts loader
│   └── page.tsx                  # Home page assembly
├── public/
│   └── images/
│       ├── cover-art/            # Single & album cover art assets
│       ├── illustrations/        # Comic panels and character studies
│       └── logos/                # Brand identity & emblem logos
├── README.md
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `18.x` or higher
- `npm` or `yarn` / `pnpm`

### Installation

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:Clinton-odia/jhay-booking-website.git
   cd jhay-booking-website
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Start Production Server**:
   ```bash
   npm start
   ```

---

## 📜 License

Created for **Jhay Sanyay Studio**. All artwork rights belong to the creator.

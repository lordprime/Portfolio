# Abhishek Reddy - Cybersecurity Portfolio

A high-performance codebase for a cybersecurity researcher portfolio, built with Next.js, Tailwind CSS, and Lucide React.

## 🚀 Teck Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS (Deep Dark Mode)
- **Icons**: Lucide React
- **Fonts**: JetBrains Mono (Headers) & Inter (Body)

## 🛠️ Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser.

3.  **Build for Production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

- `src/app`: Main pages and layout.
- `src/components`: Reusable UI components (Hero, Timeline, Projects, etc.).
- `src/data`: `portfolio.ts` containing all content (Bio, Experience, etc.). Update this file to change website content.

## 🚢 Deployment

### GitHub Pages (Static Export)
1.  Open `next.config.ts` and add `output: 'export'`.
2.  Run `npm run build`.
3.  Deploy the `out` directory to GitHub Pages.

### Vercel
1.  Push code to GitHub.
2.  Import project into Vercel.
3.  Deploy (Zero Configuration required).

## 🎨 Customization

- **Colors**: Edit `src/app/globals.css` to change `--indigo-research` and `--emerald-secure`.
- **Content**: Edit `src/data/portfolio.ts`.

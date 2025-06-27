import Head from "next/head";
// import "@fontsource/satoshi/400.css";
// import "@fontsource/satoshi/700.css";
// import "@fontsource/inter/400.css";
// import "@fontsource/inter/700.css";
import {Inter} from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

import "./_assets/css/global.css";


// fonts
// Satoshi or brokmann

export const metadata = {
  title: "React / Next.js Components Library - Reusable UI Snippets for Modern Web Apps",
  description: "A growing open-source library of clean, reusable React and Next.js UI components. Copy, paste, and build faster. Contribute your own and help the dev community grow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph (Facebook / LinkedIn) */}
        <meta property="og:title" content="UIBrix – Reusable React & Next.js UI Components" />
        <meta property="og:description" content="Free, open-source library of modern plug-and-play UI components. Contribute or use. No bloat. Just clean code." />
        <meta property="og:image" content="https://uibrix.vercel.app/social-preview.jpg" />
        <meta property="og:url" content="https://uibrix.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UIBrix – React & Next.js UI Component Library" />
        <meta name="twitter:description" content="Copy-paste UI blocks. Build fast. Contribute faster. Built for devs, by devs." />
        <meta name="twitter:image" content="https://uibrix.vercel.app/social-preview.jpg" />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

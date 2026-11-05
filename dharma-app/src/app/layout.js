import { Inter, EB_Garamond } from 'next/font/google'
import Link from 'next/link';
import "./globals.css";
import 'leaflet/dist/leaflet.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-eb-garamond',
})

export const metadata = {
  title: {
    default: "Wolf's Guide to Dharma Retreats | Asian Meditation Guide",
    template: "%s | Wolf's Guide"
  },
  description: "Honest, field-tested reviews of dharma retreat centers in India, Nepal, Thailand, and beyond. Find your perfect meditation spot.",
  keywords: ["dharma retreat", "meditation asia", "vipassana reviews", "india ashrams", "nepal meditation", "wolf guide"],
  openGraph: {
    title: "Wolf's Guide to Dharma Retreats",
    description: "The ultimate guide to finding the right dharma retreat for you in Asia.",
    type: "website",
    locale: "en_US",
    url: "https://dharma-retreats-guide.vercel.app",
    siteName: "Wolf's Guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wolf's Guide to Dharma Retreats",
    description: "Honest reviews of meditation centers in Asia.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ebGaramond.variable} antialiased font-sans text-parchment bg-forest min-h-screen flex flex-col`}>
        <div className="flex-1">
          {children}
        </div>
        <footer className="py-12 px-6 border-t border-white/5 bg-forest text-center">
          <div className="max-w-4xl mx-auto">
            <p className="font-serif italic text-lg mb-4 text-parchment/80">Wolf's Guide to Dharma Retreats</p>
            <p className="text-xs text-parchment/40 uppercase tracking-[0.2em] mb-6">
              © 2017 - 2025 · Creative Commons CC BY-NC-ND
            </p>
            <div className="flex justify-center gap-8 text-xs uppercase tracking-widest text-parchment/60">
              <Link href="/" className="hover:text-ochre transition-colors">Browse</Link>
              <Link href="/map" className="hover:text-ochre transition-colors">Map</Link>
              <Link href="/red-flags" className="hover:text-rust transition-colors text-rust/80">Red Flags</Link>
              <a href="mailto:aware.wolf.ko@gmail.com" className="hover:text-ochre transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

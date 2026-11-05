import Link from "next/link";
import retreatsData from "@/data/retreats.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return retreatsData.map((retreat) => ({
    id: retreat.id,
  }));
}

export function generateMetadata({ params }) {
  const retreat = retreatsData.find((r) => r.id === params.id);
  if (!retreat) return { title: 'Retreat Not Found' };
  
  const title = `${retreat.name} | Wolf's Guide`;
  const description = retreat.wolfSays;
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://dharma-retreats-guide.vercel.app/retreats/${retreat.id}`,
      images: [
        {
          url: "/og-image-retreat.png",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function RetreatDetail({ params }) {
  const retreat = retreatsData.find((r) => r.id === params.id);

  if (!retreat) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-forest font-sans selection:bg-ochre selection:text-forest">
      
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 px-6 py-4 flex justify-between items-center rounded-none">
        <Link href="/" className="font-serif italic text-lg tracking-wide text-parchment hover:text-ochre transition-colors">
          Wolf's Guide
        </Link>
        <ul className="flex gap-8 text-sm uppercase tracking-widest text-parchment-200">
          <li><Link href="/" className="hover:text-parchment transition-colors">Browse</Link></li>
          <li><Link href="/map" className="hover:text-parchment transition-colors">Map</Link></li>
          <li><Link href="/teachings" className="hover:text-parchment transition-colors">Teachings</Link></li>
          <li><Link href="/red-flags" className="text-rust hover:text-red-400 transition-colors">⚑ Red Flags</Link></li>
        </ul>
      </nav>

      {/* HEADER */}
      <section className="pt-40 pb-12 px-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="text-ochre hover:text-white transition-colors text-sm uppercase tracking-widest flex items-center gap-2">
            ← Back to Browse
          </Link>
        </div>
        
        <div className="flex justify-between items-start gap-8 flex-wrap">
          <div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-4 text-parchment">
              {retreat.name}
            </h1>
            <div className="flex items-center gap-4 text-parchment/60 uppercase tracking-widest text-sm">
              <span>📍 {retreat.location.city}, {retreat.location.country}</span>
              <span>·</span>
              <span>{retreat.tradition}</span>
            </div>
          </div>
          
          <div className="flex gap-2">
            {retreat.trustTier === 'top-pick' && (
              <span className="bg-ochre/20 text-ochre text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-ochre/30 whitespace-nowrap">
                ★ Wolf's Top Pick
              </span>
            )}
            {retreat.trustTier === 'red-flag' && (
              <span className="bg-rust/20 text-rust text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-rust/30 whitespace-nowrap">
                ⚠️ Red Flagged
              </span>
            )}
            {retreat.beginnerFriendly && (
              <span className="bg-green-400/10 text-green-400 text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-green-400/30 whitespace-nowrap">
                Beginner Friendly
              </span>
            )}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="max-w-4xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8">
        
        <div className="md:col-span-2 space-y-8">
          <div className="glass-panel p-8 border border-white/10">
            <h2 className="text-sm tracking-widest uppercase text-ochre mb-6">Wolf's Field Notes</h2>
            <p className="text-parchment/90 text-lg leading-relaxed italic font-serif">
              "{retreat.wolfSays}"
            </p>
          </div>

          <div className="glass-panel p-8 border border-white/10">
            <h2 className="text-sm tracking-widest uppercase text-ochre mb-6">Full Review</h2>
            <div className="prose prose-invert prose-parchment max-w-none">
              <p className="text-parchment/80 leading-relaxed">
                Review details for this retreat will be fully imported from the guide. This section contains the detailed field notes, tips for staying, what to pack, and the general daily schedule based on Wolf's extensive travels.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-panel p-6 border border-white/10">
            <h3 className="text-xs tracking-widest uppercase text-ochre mb-4">Highlights</h3>
            <ul className="space-y-3">
              {retreat.highlights.map((highlight, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-parchment/80">
                  <span className="text-ochre">✦</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass-panel p-6 border border-white/10">
            <h3 className="text-xs tracking-widest uppercase text-ochre mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {retreat.type.map((t, i) => (
                <span key={i} className="text-xs text-parchment/60 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

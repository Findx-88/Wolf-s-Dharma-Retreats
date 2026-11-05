import Link from 'next/link';
import dynamic from 'next/dynamic';

export const metadata = {
  title: "Retreat Map",
  description: "Interactive map showing all dharma retreats and centers globally.",
};

// Dynamically import the MapComponent with no SSR
const MapComponent = dynamic(
  () => import('@/components/MapComponent'),
  { 
    ssr: false,
    loading: () => (
      <div className="h-full w-full flex items-center justify-center bg-black/10 rounded-2xl border border-white/10">
        <div className="text-ochre animate-pulse font-serif italic text-xl">Loading map...</div>
      </div>
    )
  }
);

export default function MapPage() {
  return (
    <div className="min-h-screen bg-forest font-sans selection:bg-ochre selection:text-forest flex flex-col">
      
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 px-6 py-4 flex justify-between items-center rounded-none">
        <Link href="/" className="font-serif italic text-lg tracking-wide text-parchment hover:text-ochre transition-colors">
          Wolf's Guide
        </Link>
        <ul className="flex gap-8 text-sm uppercase tracking-widest text-parchment-200">
          <li><Link href="/" className="hover:text-parchment transition-colors">Browse</Link></li>
          <li><Link href="/map" className="text-ochre transition-colors">Map</Link></li>
          <li><Link href="/teachings" className="hover:text-parchment transition-colors">Teachings</Link></li>
          <li><Link href="/red-flags" className="text-rust hover:text-red-400 transition-colors">⚑ Red Flags</Link></li>
        </ul>
      </nav>

      <main className="flex-1 flex flex-col pt-24 px-6 pb-6">
        <div className="mb-6 flex justify-between items-end">
          <div>
            <h1 className="font-serif text-4xl text-parchment mb-2">Retreat Map</h1>
            <p className="text-parchment/60 text-sm">Explore all documented retreat centers around the globe.</p>
          </div>
          <div className="flex gap-4 text-xs uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ffd700]"></div>
              <span className="text-parchment/70">Top Pick</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#cb2b3e]"></div>
              <span className="text-parchment/70">Red Flag</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#2A81CB]"></div>
              <span className="text-parchment/70">Other</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1 min-h-[60vh]">
          <MapComponent />
        </div>
      </main>
    </div>
  );
}

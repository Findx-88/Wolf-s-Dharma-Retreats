import Link from "next/link";

export const metadata = {
  title: "Dharma Teachings & Insights",
  description: "Wolf's reflections on practice, concentration, and why to study dharma in Asia.",
};

const teachings = [
  {
    id: "why-asia",
    title: "Why Study Dharma in Asia",
    excerpt: "Cost, Culture, and Cross-training. Why the East remains the heart of practice.",
    content: "There's three main reasons for studying Dharma in Asia: 1) Cost. Dharma retreats in the west often run into thousands of dollars. Many retreats in Asia are donation-based or a nominal fee... 2) Culture & Growth. Indian culture and Asian culture is conducive to practice... 3) Cross-training opportunities. A trip through Thailand, Malaysia, Nepal, and India - could have you study and train in Theravada Vipassana, Tibetan Buddhism, Zen, Advaita Vedanta, and Yoga."
  },
  {
    id: "concentration-rigidity",
    title: "Concentration & Rigidity",
    excerpt: "More concentration, more problems? Understanding the difference between composure and rigidity.",
    content: "I've mentioned before about the misfortune of the translation of samadhi as concentration when a more accurate word might be composure, collectedness, or stability of mind... Single pointed concentration methods are not emphasized by the Buddha. Don't mistake a side dish for the main meal."
  },
  {
    id: "dharma-bum",
    title: "The Path of the Dharma Bum",
    excerpt: "Christopher Titmuss on why the world needs more dharma bums.",
    content: "Being a dharma bum isn't all a joke, it's also a beautiful and liberating experience. The dharma bum was probably similar to the early buddhist practitioners, before they wore robes, before there were all the monkly rules, rituals, and regs."
  }
];

export default function Teachings() {
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
          <li><Link href="/teachings" className="text-ochre transition-colors">Teachings</Link></li>
          <li><Link href="/red-flags" className="text-rust hover:text-red-400 transition-colors">⚑ Red Flags</Link></li>
        </ul>
      </nav>

      {/* HEADER */}
      <section className="pt-40 pb-16 px-6 max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-8 text-parchment">
          Dharma <em className="font-light italic">Insights</em>
        </h1>
        <p className="text-parchment/70 text-lg max-w-2xl mx-auto leading-relaxed">
          Reflections on practice, the culture of retreats in Asia, and the traps of the meditative path.
        </p>
      </section>

      {/* CONTENT */}
      <main className="max-w-4xl mx-auto px-6 pb-24 space-y-12">
        {teachings.map((teaching) => (
          <div key={teaching.id} className="glass-panel p-8 md:p-12 border border-white/10 bento-hover">
            <h2 className="font-serif text-3xl md:text-4xl text-ochre mb-4">{teaching.title}</h2>
            <div className="prose prose-invert prose-parchment max-w-none">
              <p className="text-parchment/80 text-lg leading-relaxed mb-6">
                {teaching.content}
              </p>
            </div>
            <div className="pt-6 border-t border-white/5">
              <span className="text-xs uppercase tracking-[0.2em] text-parchment/40 italic">
                Excerpt from Wolf's Guide
              </span>
            </div>
          </div>
        ))}
      </main>
      {/* PRACTICAL GUIDE (APPENDIX B) */}
      <section className="py-24 px-6 md:px-12 bg-white/5 border-y border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-parchment">Practical Guide to the East</h2>
            <div className="h-px bg-ochre/30 flex-1"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-parchment/60 leading-relaxed italic">
                "Christopher Titmuss’s Ten Points to Remember if you go to a monastery or center in the East."
              </p>
              <ul className="space-y-4">
                {[
                  "Find out as much as possible before departure.",
                  "Take a sleeping bag. It can be cold at night.",
                  "Expect non-meat/non-fish diet, but few are strictly vegan.",
                  "Do not expect total silence. Festivals and weddings happen.",
                  "Don't pressure yourself to 'go deep' immediately.",
                  "Don't judge a center within the first 10 days."
                ].map((point, i) => (
                  <li key={i} className="flex gap-4 text-parchment/80">
                    <span className="text-ochre">0{i+1}.</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <ul className="space-y-4">
                {[
                  "Practice includes letting go, tolerance, and patience.",
                  "Be respectful and polite to monks and nuns. You are the guest.",
                  "Buddhism is patriarchal; manage your expectations.",
                  "Offer a donation (dana). Use an envelope with a 'Thank You'."
                ].map((point, i) => (
                  <li key={i} className="flex gap-4 text-parchment/80">
                    <span className="text-ochre">{i+7}.</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-ochre/10 rounded-2xl border border-ochre/20 mt-8">
                <h4 className="text-ochre font-bold mb-2 uppercase text-xs tracking-widest">Dana Tip</h4>
                <p className="text-sm text-parchment/70 leading-relaxed">
                  Place the money in an envelope with the sum written on the cover and offer it to the Abbot or office with a sincere word of thanks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES & READING */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase text-ochre mb-12 text-center">Resources & Further Reading</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-forest-800 border border-white/5 hover:border-ochre/30 transition-colors group">
            <h3 className="font-serif text-2xl text-parchment mb-4 group-hover:text-ochre transition-colors">Recommended Apps</h3>
            <ul className="space-y-3 text-parchment/60">
              <li className="flex justify-between items-center">
                <span>Waking Up (Sam Harris)</span>
                <span className="text-[10px] uppercase tracking-tighter border border-white/20 px-2 rounded">Highly Recommended</span>
              </li>
              <li>Insight Timer</li>
              <li>PickMe (For Sri Lanka travel)</li>
            </ul>
          </div>
          
          <div className="p-8 rounded-3xl bg-forest-800 border border-white/5 hover:border-ochre/30 transition-colors group">
            <h3 className="font-serif text-2xl text-parchment mb-4 group-hover:text-ochre transition-colors">Wolf's Library</h3>
            <ul className="space-y-3 text-parchment/60">
              <li>Don't Look Down on the Defilements (Ashin Tejaniya)</li>
              <li>Handbook for Mankind (Buddhadasa)</li>
              <li>Manual of Insight (Mahasi Sayadaw)</li>
              <li>In This Very Life (U Pandita)</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 p-8 rounded-3xl bg-forest-900 border border-white/5 text-center">
          <p className="text-parchment/40 text-sm italic mb-4">
            "Everything changes. Be adaptable. If a place doesn't suit you, try somewhere else."
          </p>
          <div className="flex justify-center gap-6">
            <span className="text-ochre text-xl">🐺</span>
          </div>
        </div>
      </section>
      {/* THE GOENKA QUESTION */}
      <section className="py-24 px-6 md:px-12 bg-forest-800">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif text-parchment mb-6">The "Goenka Question"</h2>
            <p className="text-parchment/70 leading-relaxed mb-6">
              "It's a bit frustrating that when someone inquires about doing a Vipassana retreat on the Internet, the answers talk mainly of Goenka. It's like Vipassana = Goenka! There are other options. Most of them, in my opinion, probably far better for most beginners."
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-rust">✕</span>
                <p className="text-sm text-parchment/60"><strong>Wrong View on Pain</strong>: Being told to meditate through pain as if it's a 'samskara' instead of poor circulation.</p>
              </div>
              <div className="flex gap-4">
                <span className="text-rust">✕</span>
                <p className="text-sm text-parchment/60"><strong>Totalitarian Schedule</strong>: 10 hours of group sitting with no walking meditation. "I heartily recommend it for prisons."</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h4 className="text-ochre font-bold mb-4 uppercase text-xs tracking-widest">Wolf's Pro-Tip</h4>
            <p className="text-parchment/80 italic mb-4">
              "If you do a Goenka retreat, request the option of a chair before the retreat on your admission form. It can be difficult to get one once it starts."
            </p>
            <p className="text-xs text-parchment/40">
              * Note: Wolf suggests Goenka may be the only affordable option in the West for many, so don't rule it out—just be prepared for a "ten-day slog."
            </p>
          </div>
        </div>
      </section>

      {/* TRAVEL TALES: SRI LANKA */}
      <section className="py-24 px-6 md:px-12 bg-white/5 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm tracking-widest uppercase text-ochre mb-12">Travel Tales: The Bus Scam</h2>
          <div className="bg-rust/10 p-8 md:p-12 rounded-3xl border border-rust/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-6xl opacity-10 font-serif">🚌</div>
            <p className="text-xl md:text-2xl font-serif text-parchment leading-relaxed mb-8">
              "Beware of a van or smallish private type bus displaying a bus route number. It's not a crime to impersonate a bus. Ask the price beforehand."
            </p>
            <div className="space-y-4 text-parchment/70 text-sm md:text-base">
              <p>
                In Colombo, Wolf encountered a conductor trying to extort 1,000 LKR for a 200 LKR ride. When they tried to kidnap him by not letting him out, things got physical.
              </p>
              <p className="italic border-l-2 border-ochre pl-6 py-2">
                "I grabbed the conductor by the throat to move him out of the way... he stuck his tongue out, crossed his eyes and slowly opened up the door. I thought he was making a face at the time, but now, who knows, maybe it was a concussion."
              </p>
              <p className="font-bold text-ochre pt-4 uppercase text-xs tracking-widest">Moral of the story</p>
              <p>Transport people tend to be the most dodgy. Small phone shops and electronic places tend to be the coolest.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";

export const metadata = {
  title: "Red Flags & Blacklist",
  description: "Places and teachers that are red-flagged or blacklisted in Wolf's Guide to Dharma Retreats.",
};

export default function RedFlags() {
  return (
    <div className="min-h-screen bg-forest font-sans selection:bg-rust selection:text-forest">
      
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
      <section className="pt-40 pb-16 px-6 max-w-4xl mx-auto text-center">
        <div className="text-xs tracking-[0.2em] uppercase text-rust mb-6 flex items-center justify-center gap-4 before:content-[''] before:w-8 before:h-px before:bg-rust after:content-[''] after:w-8 after:h-px after:bg-rust">
          Buyer Beware
        </div>
        <h1 className="font-serif text-5xl md:text-7xl font-black leading-[1.1] mb-8 text-rust">
          Red Flagged<br />
          <em className="text-parchment font-light italic text-4xl md:text-6xl">& Blacklisted</em>
        </h1>
        <p className="text-parchment/70 text-lg max-w-2xl mx-auto leading-relaxed">
          My blacklist or Red Flagged (Places or Teachers I cannot recommend). Everything changes, but these are areas where extreme caution is advised based on field notes and experiences.
        </p>
        <div className="mt-8 p-6 bg-black/20 rounded-2xl border border-white/5 inline-block text-sm text-parchment/50 italic max-w-xl">
          "If I went to Spahn Ranch on a weekend when the Manson family was staying there in the 1960s – I'd probably have a great time; Nondual teachings, Hippie chicks, music, and free drugs. What do I know."
        </div>
      </section>

      {/* CONTENT */}
      <main className="max-w-4xl mx-auto px-6 pb-24">
        
        <div className="grid gap-8">
          
          {/* TWIM */}
          <div className="glass-panel p-8 md:p-10 border border-rust/20 hover:border-rust/40 transition-colors relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-rust/10 font-serif text-8xl leading-none group-hover:scale-110 transition-transform">
              ⚑
            </div>
            <div className="relative z-10">
              <h2 className="font-serif text-3xl text-parchment mb-2">TWIM Teachers & Teachings</h2>
              <div className="text-xs text-rust tracking-wider uppercase mb-6 font-medium">
                Tranquil Wisdom Insight Meditation
              </div>
              <p className="text-parchment/80 leading-relaxed mb-4 text-lg">
                Any TWIM teachings or teachers e.g., Delson Armstrong claims to be an Arahant, a perfected one. 
              </p>
              <div className="bg-rust/10 border-l-4 border-rust p-4 rounded-r-lg">
                <p className="text-parchment italic">
                  "Anyone claiming a high attainment, using a fancy-schmancy special title – should be looked at very skeptically (most likely they are a chucklefuck)."
                </p>
              </div>
            </div>
          </div>

          {/* Wayanad */}
          <div className="glass-panel p-8 md:p-10 border border-rust/20 hover:border-rust/40 transition-colors relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-rust/10 font-serif text-8xl leading-none group-hover:scale-110 transition-transform">
              ⚑
            </div>
            <div className="relative z-10">
              <h2 className="font-serif text-3xl text-parchment mb-2">Bhagavan’s Arunachala Ashram</h2>
              <div className="text-xs text-rust tracking-wider uppercase mb-6 font-medium">
                Wayanad, Kerala · India
              </div>
              <p className="text-parchment/80 leading-relaxed text-lg">
                A highly structured and secretive ashram that has raised numerous red flags regarding its practices, teacher claims, and treatment of students. 
              </p>
              <div className="mt-6 text-sm text-parchment/60 font-mono">
                See Appendix A for detailed review.
              </div>
            </div>
          </div>

          {/* Tiruvannamalai */}
          <div className="glass-panel p-8 md:p-10 border border-rust/20 hover:border-rust/40 transition-colors relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-rust/10 font-serif text-8xl leading-none group-hover:scale-110 transition-transform">
              ⚑
            </div>
            <div className="relative z-10">
              <h2 className="font-serif text-3xl text-parchment mb-2">The Tiruvannamalai "Circus"</h2>
              <div className="text-xs text-rust tracking-wider uppercase mb-6 font-medium">
                Tamil Nadu · India
              </div>
              <p className="text-parchment/80 leading-relaxed text-lg mb-4">
                Tiruvannamalai has a circus of satsangs. Some of whom don't seem sane, some have just overestimated their attainment, others are grifting.
              </p>
            </div>
          </div>

        </div>

      </main>
      {/* FEATURED INVESTIGATION: THE BMW BUDDHA */}
      <section className="py-24 px-6 md:px-12 bg-rust/5 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <span className="text-4xl">🚨</span>
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-parchment">Investigation: The "BMW Buddha"</h2>
              <p className="text-ochre uppercase text-xs tracking-widest mt-2">Appendix A: Wayanad Arunachala Ashram</p>
            </div>
          </div>
          
          <div className="prose prose-invert max-w-none space-y-8 text-parchment/70 leading-relaxed">
            <div className="bg-black/20 p-8 rounded-3xl border border-white/5 italic">
              <p>
                "It's rare to hear anyone slag off this small Ashram. Most people don't know or don't care. I hope to correct this. Buckle up."
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-serif text-parchment">The Issues</h3>
                <ul className="space-y-4 text-sm list-disc pl-4 marker:text-rust">
                  <li><strong>Forced Celibacy</strong>: Asking laypeople to sign celibacy contracts after just 10 days.</li>
                  <li><strong>Financial Opacity</strong>: Collecting money for "new buildings" for years while the Guru buys a BMW X7 ($100,000+).</li>
                  <li><strong>The "Zen Stick"</strong>: Poking meditators with a stick if they look too relaxed or "sleepy."</li>
                  <li><strong>Informing Culture</strong>: A "Lord of the Flies" management style where devotees rat each other out.</li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-serif text-parchment">Wolf's Verdict</h3>
                <p>
                  "They tried bringing up the Buddha in support of their arguments... How about a NO. They are grifters. If a person can be convinced to give up their sex life after one 10-day retreat—well, they're hardly likely to be independent, questioning, skeptical people."
                </p>
                <div className="p-6 bg-rust/10 border border-rust/20 rounded-2xl">
                  <p className="text-xs text-rust font-bold uppercase tracking-widest mb-2">Verdict</p>
                  <p className="text-parchment font-serif text-lg">"A shithole in the jungle... Modelled on Facebook's Terms & Conditions."</p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5">
              <p className="text-center text-sm italic">
                "Don't be afraid to be yourself. Be a person of integrity. Question not only Authority but everything."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Fuse from "fuse.js";
import retreatsData from "@/data/retreats.json";

export default function Home() {
  const [query, setQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");

  const countries = [
    { name: "India", size: "large", bg: "bg-forest-800" },
    { name: "Nepal", size: "small", bg: "bg-forest-700" },
    { name: "Thailand", size: "medium", bg: "bg-ochre/20" },
    { name: "Sri Lanka", size: "small", bg: "bg-rust/20" },
    { name: "Malaysia", size: "medium", bg: "bg-forest-600" },
    { name: "Burma", size: "small", bg: "bg-forest-700" },
    { name: "China", size: "small", bg: "bg-forest-600" },
    { name: "Global", size: "small", bg: "bg-forest-800" },
  ];

  // Configure Fuse.js
  const fuse = useMemo(() => new Fuse(retreatsData, {
    keys: ["name", "location.city", "location.country", "tradition", "type"],
    threshold: 0.3,
  }), []);

  // Filter retreats based on search query AND selected country
  const filteredRetreats = useMemo(() => {
    let results = retreatsData;
    
    if (selectedCountry !== "All") {
      results = results.filter(r => r.location.country === selectedCountry);
    }
    
    if (query) {
      const fuseResults = fuse.search(query).map(result => result.item);
      // Intersection of country filter and search
      results = results.filter(r => fuseResults.some(fr => fr.id === r.id));
    }
    
    return results;
  }, [query, selectedCountry, fuse]);

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

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-24 px-6 min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Ghosted Om Symbol */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] leading-none opacity-[0.03] text-parchment select-none pointer-events-none font-serif flex items-center justify-center">
          ॐ
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="text-xs tracking-[0.2em] uppercase text-ochre mb-6 flex items-center gap-4 before:content-[''] before:w-8 before:h-px before:bg-ochre after:content-[''] after:w-8 after:h-px after:bg-ochre">
            Est. 2017 · Updated 2025
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8 text-parchment">
            Wolf's Guide to<br />
            <em className="text-ochre font-light italic">Dharma Retreats</em><br />
            & Teachings
          </h1>
          
          <blockquote className="border-l-4 border-ochre pl-6 my-8 text-left max-w-2xl text-lg md:text-xl text-parchment/80 italic leading-relaxed">
            "As a fletcher makes straight their arrow, a wise person directs their unsteady thought,
            which is difficult to guard, difficult to hold back."
            <cite className="block not-italic font-sans text-xs tracking-widest uppercase mt-4 text-parchment/50">
              — Buddha, The Dhammapada
            </cite>
          </blockquote>

          <div className="flex gap-8 md:gap-12 mt-12 text-xs tracking-widest uppercase text-parchment/40 flex-wrap justify-center">
            <div>Retreats listed: <span className="text-ochre">110+</span></div>
            <div>Countries covered: <span className="text-ochre">8</span></div>
            <div>Years of field notes: <span className="text-ochre">8</span></div>
            <div>Red-flagged places: <span className="text-ochre">honest</span></div>
          </div>
        </div>
      </section>

      {/* SEARCH BAR */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="glass-panel p-2 flex items-center bg-white/5 border border-white/20 rounded-full focus-within:border-ochre/50 transition-colors">
          <span className="pl-6 text-xl opacity-50 text-parchment">⚲</span>
          <input 
            type="text" 
            placeholder="Search by name, city, or tradition..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-parchment placeholder:text-parchment/30 px-4 py-3 font-serif text-lg"
          />
          {query && (
            <button 
              onClick={() => setQuery("")}
              className="pr-6 text-parchment/50 hover:text-parchment text-sm uppercase tracking-widest"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        
        {/* BENTO GRID: COUNTRIES (Hide when searching) */}
        {!query && (
          <div className="mb-24">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-sm tracking-widest uppercase text-ochre flex items-center gap-4 flex-1 after:content-[''] after:flex-1 after:h-px after:bg-white/10">
                Explore by Region
              </h2>
              {selectedCountry !== "All" && (
                <button 
                  onClick={() => setSelectedCountry("All")}
                  className="ml-4 text-xs uppercase tracking-widest text-ochre hover:text-white transition-colors border-b border-ochre/30 pb-1"
                >
                  Show All Regions
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[140px]">
              {countries.map((country, idx) => (
                <button 
                  onClick={() => setSelectedCountry(country.name)}
                  key={idx}
                  className={`
                    relative group overflow-hidden rounded-3xl p-6 flex items-end text-left
                    transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-ochre/5
                    ${country.size === 'large' ? 'col-span-2 row-span-2' : ''}
                    ${country.size === 'medium' ? 'col-span-2 row-span-1' : ''}
                    ${country.size === 'small' ? 'col-span-1 row-span-1' : ''}
                    ${country.bg}
                    ${selectedCountry === country.name ? 'ring-2 ring-ochre ring-offset-4 ring-offset-forest' : 'border border-white/5'}
                  `}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <h3 className="relative z-10 font-serif text-2xl md:text-3xl text-parchment group-hover:text-white transition-colors">
                    {country.name}
                  </h3>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* TOP PICKS (RETREAT LIST) */}
        <div>
          <h2 className="text-sm tracking-widest uppercase text-ochre mb-8 flex items-center gap-4 after:content-[''] after:flex-1 after:h-px after:bg-white/10">
            {query ? "Search Results" : "Wolf's Top Picks & Full Listing"}
          </h2>
          
          {filteredRetreats.length === 0 ? (
            <div className="text-center text-parchment/60 py-12 font-serif italic text-xl">
              No retreats found matching "{query}".
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRetreats.map((retreat) => (
                <Link href={`/retreats/${retreat.id}`} key={retreat.id} className="glass-panel p-6 bento-hover flex flex-col group">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-serif text-2xl text-parchment mb-1 group-hover:text-ochre transition-colors">
                        {retreat.name}
                      </h3>
                      <div className="text-xs text-parchment/50 tracking-wider uppercase">
                        {retreat.location.city} · {retreat.location.country}
                      </div>
                    </div>
                    {retreat.trustTier === 'top-pick' && (
                      <span className="bg-ochre/20 text-ochre text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-ochre/30 whitespace-nowrap ml-2 shrink-0">
                        Top Pick
                      </span>
                    )}
                    {retreat.trustTier === 'red-flag' && (
                      <span className="bg-rust/20 text-rust text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-rust/30 whitespace-nowrap ml-2 shrink-0">
                        Red Flag
                      </span>
                    )}
                  </div>

                  <div className="text-sm text-parchment/70 mb-4 font-sans font-medium">
                    Tradition: <span className="text-parchment">{retreat.tradition}</span>
                  </div>

                  <p className="text-parchment/80 italic leading-relaxed mb-6 flex-1 text-sm">
                    "{retreat.wolfSays}"
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                    {retreat.type.map((t, i) => (
                      <span key={i} className="text-xs text-parchment/60 bg-white/5 px-2 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                    {retreat.beginnerFriendly && (
                      <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-md">
                        Beginner Friendly
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

      </main>
    </div>
  );
}

'use client';

import Navbar from "@/components/navbar/navbar";

export default function EliteStudiosPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center w-full relative">
            <Navbar />

            <main className="w-full flex-1 pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center mt-16 z-10 relative">
                {/* Hero Section */}
                <section className="w-full flex flex-col items-center text-center space-y-6 mt-12">
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-[#e62020] uppercase font-sans">
                        Elite Studios
                    </h1>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-2xl font-light tracking-wide">
                        A bold and aggressive brand identity engineered for maximum impact.
                    </p>
                    <div className="h-1 w-24 bg-[#e62020] mt-8 rounded-full"></div>
                </section>

                {/* Logo Presentation Section */}
                <section className="w-full mt-32">
                    <div className="grid grid-cols-1 gap-12">
                        <div className="bg-[#141414] border border-zinc-800/50 rounded-3xl p-12 md:p-24 flex flex-col items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#e62020]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <img
                                src="/elite-logo.png"
                                alt="Elite Studios Logo"
                                className="w-full max-w-md h-auto min-h-[200px] object-contain drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500 ease-out"
                                onError={(e) => {
                                    e.currentTarget.src = 'https://via.placeholder.com/600x400/141414/e62020?text=Elite+Studios';
                                }}
                            />
                            <div className="mt-12 text-zinc-500 font-mono text-sm tracking-widest uppercase relative z-10">Primary Mark</div>
                        </div>
                    </div>
                </section>

                {/* Color Palette Section */}
                <section className="w-full mt-32">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-zinc-200 mb-12 flex items-center gap-4">
                        <span className="text-[#e62020]">/</span> Color Palette
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="group rounded-2xl overflow-hidden border border-zinc-800 bg-[#0a0a0a]">
                            <div className="h-32 w-full bg-[#E62020] group-hover:scale-105 transition-transform duration-500 origin-bottom"></div>
                            <div className="p-6">
                                <p className="text-zinc-400 text-xs font-mono tracking-widest mb-1">Crimson Red</p>
                                <p className="text-white font-bold tracking-wider">#E62020</p>
                            </div>
                        </div>
                        <div className="group rounded-2xl overflow-hidden border border-zinc-800 bg-[#0a0a0a]">
                            <div className="h-32 w-full bg-[#8E0B0B] group-hover:scale-105 transition-transform duration-500 origin-bottom"></div>
                            <div className="p-6">
                                <p className="text-zinc-400 text-xs font-mono tracking-widest mb-1">Blood Red</p>
                                <p className="text-white font-bold tracking-wider">#8E0B0B</p>
                            </div>
                        </div>
                        <div className="group rounded-2xl overflow-hidden border border-zinc-800 bg-[#0a0a0a]">
                            <div className="h-32 w-full bg-[#1A1A1A] group-hover:scale-105 transition-transform duration-500 origin-bottom"></div>
                            <div className="p-6">
                                <p className="text-zinc-400 text-xs font-mono tracking-widest mb-1">Void Black</p>
                                <p className="text-white font-bold tracking-wider">#1A1A1A</p>
                            </div>
                        </div>
                        <div className="group rounded-2xl overflow-hidden border border-zinc-800 bg-[#0a0a0a]">
                            <div className="h-32 w-full bg-[#FAFAFA] group-hover:scale-105 transition-transform duration-500 origin-bottom"></div>
                            <div className="p-6">
                                <p className="text-zinc-400 text-xs font-mono tracking-widest mb-1">Harsh White</p>
                                <p className="text-[#1A1A1A] font-bold tracking-wider">#FAFAFA</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Typeface Section */}
                <section className="w-full mt-32 mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-zinc-200 mb-12 flex items-center gap-4">
                        <span className="text-[#e62020]">/</span> Typography
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border border-zinc-800/50 rounded-3xl p-10 bg-[#141414]">
                            <p className="text-[#e62020] font-mono text-sm tracking-widest uppercase mb-4">Primary Display</p>
                            <h3 className="text-5xl font-black mb-6 uppercase text-white">Aggressive.<br />Impactful.</h3>
                            <p className="text-zinc-400 font-light">Used for main headlines, hero sections, and anywhere that requires a strong visual presence.</p>
                        </div>

                        <div className="border border-zinc-800/50 rounded-3xl p-10 bg-[#141414]">
                            <p className="text-[#e62020] font-mono text-sm tracking-widest uppercase mb-4">Secondary & Body</p>
                            <h3 className="text-2xl font-normal mb-6 text-zinc-200 tracking-wide">Clean & Readable</h3>
                            <p className="text-zinc-400 font-light">The legible, contrasting secondary font that provides balance to the bold primary headings. Used for paragraphs, UI elements, and data.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

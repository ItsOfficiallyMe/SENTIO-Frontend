"import { ArrowDownRight, Sparkles } from \"lucide-react\";

export default function Hero() {
    const scrollTo = (id) => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: \"smooth\", block: \"start\" });
    };

    return (
        <section
            id=\"hero\"
            data-testid=\"hero-section\"
            className=\"relative pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-12 lg:px-16\"
        >
            <div className=\"max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end\">
                <div className=\"lg:col-span-8 relative\">
                    <div className=\"inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-8\">
                        <Sparkles size={12} className=\"text-cyan-300\" strokeWidth={1.8} />
                        <span className=\"font-mono-acc text-[10px] tracking-[0.25em] uppercase text-white/70\">
                            AI · Emotion · Music
                        </span>
                    </div>

                    <h1
                        data-testid=\"hero-headline\"
                        className=\"font-display font-light tracking-tighter text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95]\"
                    >
                        Sense.
                        <br />
                        <span className=\"brand-gradient-text font-bold\">Feel.</span>
                        <br />
                        Listen.
                    </h1>

                    <p className=\"mt-8 max-w-xl text-base md:text-lg text-white/60 leading-relaxed\">
                        SENTIO reads micro-expressions in real time using computer vision
                        and deep learning, then curates a soundtrack that meets you where
                        you are — emotionally.
                    </p>

                    <div className=\"mt-10 flex flex-wrap items-center gap-4\">
                        <button
                            data-testid=\"hero-cta-launch\"
                            onClick={() => scrollTo(\"#camera\")}
                            className=\"relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-heavy ring-brand text-sm font-medium hover:bg-white/10 transition-colors group\"
                        >
                            <span className=\"brand-gradient-text font-display font-bold tracking-wide\">
                                Open the Lens
                            </span>
                            <ArrowDownRight
                                size={16}
                                className=\"text-cyan-300 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5\"
                            />
                        </button>
                        <button
                            data-testid=\"hero-cta-features\"
                            onClick={() => scrollTo(\"#features\")}
                            className=\"px-6 py-3.5 rounded-full border border-white/15 text-sm text-white/70 hover:text-white hover:border-white/40 transition-colors\"
                        >
                            How it works
                        </button>
                    </div>
                </div>

                <div className=\"lg:col-span-4 relative\">
                    <div className=\"relative glass rounded-2xl p-6 ring-brand\">
                        <div className=\"flex items-center justify-between\">
                            <span className=\"font-mono-acc text-[10px] tracking-[0.25em] uppercase text-cyan-300\">
                                Live Signal
                            </span>
                            <span className=\"h-1.5 w-1.5 rounded-full bg-cyan-300 pulse-dot\" />
                        </div>
                        <div className=\"mt-6 flex items-end gap-1.5 h-24\">
                            {[14, 22, 38, 30, 52, 44, 66, 58, 78, 64, 48, 36, 28].map((h, i) => (
                                <span
                                    key={i}
                                    className=\"flex-1 rounded-sm shimmer\"
                                    style={{
                                        height: `${h}%`,
                                        background: \"linear-gradient(180deg, rgba(0,240,255,0.5), rgba(138,43,226,0.5))\",
                                    }}
                                />
                            ))}
                        </div>
                        <div className=\"mt-6 grid grid-cols-2 gap-3 text-[10px] font-mono-acc tracking-[0.2em] uppercase\">
                            <div className=\"text-white/50\">
                                Frames / Sec
                                <div className=\"text-white/90 mt-1 text-base font-display tracking-tight\">--</div>
                            </div>
                            <div className=\"text-white/50\">
                                Latency
                                <div className=\"text-white/90 mt-1 text-base font-display tracking-tight\">--</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
"

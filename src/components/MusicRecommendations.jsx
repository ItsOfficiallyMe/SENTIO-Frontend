"import { Music2, Play, Disc3 } from \"lucide-react\";

const slots = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    a: [\"Untitled track\", \"Awaiting curation\", \"Signal pending\", \"TBD\", \"—\", \"Pending model\"][i],
    b: [\"Artist · —\", \"Mood · —\", \"BPM · ---\", \"Energy · —\", \"Key · —\", \"Valence · —\"][i],
}));

export default function MusicRecommendations() {
    return (
        <section
            id=\"music\"
            data-testid=\"music-recommendations-section\"
            className=\"relative px-6 md:px-12 lg:px-16 py-20 md:py-28\"
        >
            <div className=\"max-w-7xl mx-auto\">
                <div className=\"flex items-end justify-between flex-wrap gap-6 mb-10\">
                    <div>
                        <span className=\"font-mono-acc text-[10px] tracking-[0.25em] uppercase text-cyan-300/80\">
                            03 · Soundtrack
                        </span>
                        <h2 className=\"mt-3 font-display font-medium tracking-tight text-3xl md:text-4xl lg:text-5xl\">
                            Your soundtrack, awaiting
                        </h2>
                        <p className=\"mt-3 text-white/55 max-w-lg\">
                            Once an emotional profile is captured, SENTIO will curate a
                            queue tuned to your current state.
                        </p>
                    </div>
                    <div className=\"inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass\">
                        <Disc3 size={14} className=\"text-cyan-300\" strokeWidth={1.5} />
                        <span className=\"font-mono-acc text-[10px] tracking-[0.25em] uppercase text-white/60\">
                            Queue · Empty
                        </span>
                    </div>
                </div>

                <div className=\"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4\">
                    {slots.map((s) => (
                        <div
                            key={s.id}
                            data-testid={`music-card-${s.id}`}
                            className=\"group relative rounded-xl glass overflow-hidden\"
                        >
                            <div className=\"relative aspect-square shimmer\">
                                <div className=\"absolute inset-0 flex items-center justify-center\">
                                    <Music2 size={22} strokeWidth={1.4} className=\"text-white/30\" />
                                </div>
                                <div className=\"absolute bottom-2 right-2 h-8 w-8 rounded-full glass-heavy flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity\">
                                    <Play size={12} className=\"text-cyan-300 translate-x-px\" />
                                </div>
                            </div>
                            <div className=\"p-3\">
                                <p className=\"text-xs text-white/75 truncate\">{s.a}</p>
                                <p className=\"font-mono-acc text-[9px] tracking-[0.2em] uppercase text-white/35 mt-1 truncate\">
                                    {s.b}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className=\"mt-8 rounded-2xl glass p-6 md:p-8 flex flex-wrap items-center justify-between gap-4\">
                    <div>
                        <p className=\"font-display text-lg md:text-xl\">
                            Awaiting emotional profile.
                        </p>
                        <p className=\"text-sm text-white/50 mt-1\">
                            Real curation activates once Phase 2 connects the recommendation engine.
                        </p>
                    </div>
                    <span className=\"font-mono-acc text-[10px] tracking-[0.25em] uppercase text-cyan-300/80\">
                        Phase 2 · Coming Soon
                    </span>
                </div>
            </div>
        </section>
    );
}
"

"import { Brain, Gauge, Waves } from \"lucide-react\";

const tiles = [
    { label: \"Dominant Emotion\", value: \"—\", icon: Brain, accent: \"from-cyan-400/30 to-violet-500/20\" },
    { label: \"Confidence\", value: \"--%\", icon: Gauge, accent: \"from-violet-500/30 to-purple-600/20\" },
    { label: \"Arousal\", value: \"—\", icon: Waves, accent: \"from-cyan-400/25 to-cyan-300/10\" },
];

const distribution = [
    \"Joy\", \"Calm\", \"Focus\", \"Surprise\", \"Melancholy\", \"Energy\", \"Anger\",
];

export default function EmotionResults() {
    return (
        <section
            id=\"results\"
            data-testid=\"emotion-results-section\"
            className=\"relative px-6 md:px-12 lg:px-16 py-20 md:py-28\"
        >
            <div className=\"max-w-7xl mx-auto\">
                <div className=\"flex items-end justify-between flex-wrap gap-6 mb-10\">
                    <div>
                        <span className=\"font-mono-acc text-[10px] tracking-[0.25em] uppercase text-cyan-300/80\">
                            02 · Telemetry
                        </span>
                        <h2 className=\"mt-3 font-display font-medium tracking-tight text-3xl md:text-4xl lg:text-5xl\">
                            Emotion telemetry
                        </h2>
                        <p className=\"mt-3 text-white/55 max-w-lg\">
                            A live readout of the affective state. Awaiting the first inference pass.
                        </p>
                    </div>
                    <span className=\"font-mono-acc text-[10px] tracking-[0.25em] uppercase text-white/40\">
                        Status · Awaiting backend
                    </span>
                </div>

                <div className=\"grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6\">
                    {tiles.map((t) => (
                        <div
                            key={t.label}
                            data-testid={`emotion-tile-${t.label.toLowerCase().replace(/\s+/g, \"-\")}`}
                            className=\"relative rounded-2xl glass p-6 overflow-hidden\"
                        >
                            <div className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${t.accent} blur-2xl`} />
                            <div className=\"relative flex items-start justify-between\">
                                <span className=\"font-mono-acc text-[10px] tracking-[0.25em] uppercase text-white/45\">
                                    {t.label}
                                </span>
                                <t.icon size={16} strokeWidth={1.4} className=\"text-white/40\" />
                            </div>
                            <div className=\"relative mt-6 font-display text-4xl md:text-5xl tracking-tight text-white/80\">
                                {t.value}
                            </div>
                            <div className=\"relative mt-6 h-1.5 rounded-full bg-white/5 overflow-hidden\">
                                <div className=\"h-full w-1/3 shimmer rounded-full\" />
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    data-testid=\"emotion-distribution\"
                    className=\"mt-6 rounded-2xl glass p-6 md:p-8\"
                >
                    <div className=\"flex items-center justify-between flex-wrap gap-3\">
                        <span className=\"font-mono-acc text-[10px] tracking-[0.25em] uppercase text-white/45\">
                            Affect Distribution
                        </span>
                        <span className=\"font-mono-acc text-[10px] tracking-[0.25em] uppercase text-white/30\">
                            Analysis pending…
                        </span>
                    </div>
                    <div className=\"mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3\">
                        {distribution.map((label, i) => (
                            <div key={label} className=\"flex items-center gap-4\">
                                <span className=\"w-24 text-xs text-white/55\">{label}</span>
                                <div className=\"flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden\">
                                    <div
                                        className=\"h-full shimmer\"
                                        style={{
                                            width: `${20 + ((i * 13) % 60)}%`,
                                            background:
                                                \"linear-gradient(90deg, rgba(0,240,255,0.4), rgba(138,43,226,0.4))\",
                                        }}
                                    />
                                </div>
                                <span className=\"font-mono-acc text-[10px] text-white/30 tracking-[0.2em] w-10 text-right\">
                                    --%
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
"

"import { Eye, Cpu, ShieldCheck, Waves, Sparkles, Activity } from \"lucide-react\";

const features = [
    {
        icon: Eye,
        title: \"Real-time vision\",
        copy: \"30+ FPS face tracking with sub-100ms inference, designed for the natural cadence of human expression.\",
        span: \"md:col-span-7\",
        accent: \"from-cyan-400/25 to-transparent\",
        image:
            \"https://images.pexels.com/photos/8090303/pexels-photo-8090303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\",
    },
    {
        icon: Cpu,
        title: \"Deep learning core\",
        copy: \"A multi-stage CNN trained on diverse affective datasets — fine-tuned to read subtle micro-expressions.\",
        span: \"md:col-span-5\",
        accent: \"from-violet-500/30 to-transparent\",
    },
    {
        icon: Waves,
        title: \"Mood-matched curation\",
        copy: \"Maps emotion vectors to musical features — tempo, valence, energy — to assemble a soundtrack that fits.\",
        span: \"md:col-span-5\",
        accent: \"from-purple-500/25 to-transparent\",
    },
    {
        icon: ShieldCheck,
        title: \"Private by design\",
        copy: \"Webcam frames stay on-device unless you explicitly run detection. No uploads, no shadow storage.\",
        span: \"md:col-span-7\",
        accent: \"from-cyan-400/20 to-transparent\",
    },
    {
        icon: Sparkles,
        title: \"Adaptive learning\",
        copy: \"The longer you use SENTIO, the better it understands your personal affect-to-sound preferences.\",
        span: \"md:col-span-6\",
        accent: \"from-violet-500/25 to-transparent\",
    },
    {
        icon: Activity,
        title: \"Continuous signal\",
        copy: \"Run single-shot detection or stream emotion telemetry over time — track how your day actually feels.\",
        span: \"md:col-span-6\",
        accent: \"from-cyan-400/25 to-transparent\",
    },
];

export default function Features() {
    return (
        <section
            id=\"features\"
            data-testid=\"features-section\"
            className=\"relative px-6 md:px-12 lg:px-16 py-20 md:py-28\"
        >
            <div className=\"max-w-7xl mx-auto\">
                <div className=\"mb-12 max-w-2xl\">
                    <span className=\"font-mono-acc text-[10px] tracking-[0.25em] uppercase text-cyan-300/80\">
                        04 · Capabilities
                    </span>
                    <h2 className=\"mt-3 font-display font-medium tracking-tight text-3xl md:text-4xl lg:text-5xl\">
                        An instrument for emotional signal
                    </h2>
                    <p className=\"mt-4 text-white/55\">
                        Six engineering decisions that turn a webcam into a sound-aware feedback loop.
                    </p>
                </div>

                <div className=\"grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6\">
                    {features.map((f) => (
                        <article
                            key={f.title}
                            data-testid={`feature-card-${f.title.toLowerCase().replace(/\s+/g, \"-\")}`}
                            className={`relative ${f.span} rounded-2xl glass p-6 md:p-8 overflow-hidden group`}
                        >
                            <div className={`pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-gradient-to-br ${f.accent} blur-3xl`} />
                            <div className=\"relative flex items-start gap-4\">
                                <span className=\"h-10 w-10 rounded-lg glass flex items-center justify-center shrink-0\">
                                    <f.icon size={16} className=\"text-cyan-300\" strokeWidth={1.5} />
                                </span>
                                <div className=\"min-w-0\">
                                    <h3 className=\"font-display text-xl md:text-2xl tracking-tight\">
                                        {f.title}
                                    </h3>
                                    <p className=\"mt-2 text-sm md:text-base text-white/55 leading-relaxed\">
                                        {f.copy}
                                    </p>
                                </div>
                            </div>
                            {f.image && (
                                <div className=\"relative mt-6 rounded-xl overflow-hidden border border-white/5\">
                                    <img
                                        src={f.image}
                                        alt=\"\"
                                        className=\"w-full h-44 md:h-56 object-cover opacity-70 group-hover:opacity-90 transition-opacity\"
                                        style={{ mixBlendMode: \"screen\" }}
                                    />
                                    <div className=\"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent\" />
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
"

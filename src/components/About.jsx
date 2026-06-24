"const steps = [
    { n: \"01\", t: \"Sense\", c: \"Webcam frames are sampled locally — micro-expressions, gaze, head pose.\" },
    { n: \"02\", t: \"Feel\", c: \"A deep learning model maps facial signals to a continuous affect vector.\" },
    { n: \"03\", t: \"Listen\", c: \"That vector is translated into musical features, returning a tuned queue.\" },
];

export default function About() {
    return (
        <section
            id=\"about\"
            data-testid=\"about-section\"
            className=\"relative px-6 md:px-12 lg:px-16 py-20 md:py-28\"
        >
            <div className=\"max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center\">
                <div className=\"lg:col-span-5 relative rounded-2xl overflow-hidden glass-heavy\">
                    <img
                        src=\"https://images.pexels.com/photos/36481094/pexels-photo-36481094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\"
                        alt=\"\"
                        className=\"w-full h-[420px] md:h-[520px] object-cover opacity-80\"
                        style={{ mixBlendMode: \"screen\" }}
                    />
                    <div className=\"absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent\" />
                    <div className=\"absolute bottom-0 left-0 right-0 p-8\">
                        <span className=\"font-mono-acc text-[10px] tracking-[0.25em] uppercase text-cyan-300\">
                            Manifesto
                        </span>
                        <p className=\"mt-3 font-display text-xl md:text-2xl tracking-tight text-white/90 leading-snug\">
                            Music has always read us. Now the lens can too.
                        </p>
                    </div>
                </div>

                <div className=\"lg:col-span-7\">
                    <span className=\"font-mono-acc text-[10px] tracking-[0.25em] uppercase text-cyan-300/80\">
                        05 · About
                    </span>
                    <h2 className=\"mt-3 font-display font-medium tracking-tight text-3xl md:text-4xl lg:text-5xl\">
                        Built for the in-between moments
                    </h2>
                    <p className=\"mt-5 text-white/55 leading-relaxed max-w-xl\">
                        SENTIO is an experiment in ambient empathy. Instead of asking you to
                        describe a mood, it reads one — then quietly hands you a soundtrack
                        that fits. No quizzes, no taps, no labels. Just sense, feel, listen.
                    </p>

                    <div className=\"mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4\">
                        {steps.map((s) => (
                            <div
                                key={s.n}
                                data-testid={`about-step-${s.n}`}
                                className=\"rounded-xl glass p-5\"
                            >
                                <div className=\"font-mono-acc text-[10px] tracking-[0.3em] text-cyan-300/80\">
                                    {s.n}
                                </div>
                                <div className=\"mt-2 font-display text-xl tracking-tight\">
                                    {s.t}
                                </div>
                                <p className=\"mt-2 text-xs text-white/50 leading-relaxed\">
                                    {s.c}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
"

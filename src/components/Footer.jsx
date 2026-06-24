"import { Activity, Github, Twitter, Mail } from \"lucide-react\";

export default function Footer() {
    return (
        <footer
            data-testid=\"footer\"
            className=\"relative px-6 md:px-12 lg:px-16 pt-16 pb-12 border-t border-white/5 mt-10\"
        >
            <div className=\"max-w-7xl mx-auto\">
                <div className=\"grid grid-cols-1 md:grid-cols-12 gap-10\">
                    <div className=\"md:col-span-5\">
                        <div className=\"flex items-center gap-2\">
                            <span className=\"relative inline-flex h-9 w-9 items-center justify-center rounded-lg glass ring-brand\">
                                <Activity size={16} strokeWidth={2} className=\"text-cyan-300\" />
                            </span>
                            <span className=\"font-display font-bold tracking-tight text-lg\">SENTIO</span>
                        </div>
                        <p className=\"mt-5 text-sm text-white/55 max-w-sm leading-relaxed\">
                            Sense. Feel. Listen. — AI-powered emotion-aware music recommendation, built for the way moods actually move.
                        </p>
                    </div>

                    <div className=\"md:col-span-3\">
                        <p className=\"font-mono-acc text-[10px] tracking-[0.25em] uppercase text-white/45\">
                            Sections
                        </p>
                        <ul className=\"mt-4 space-y-2 text-sm text-white/65\">
                            <li><a className=\"hover:text-white\" href=\"#camera\">Camera</a></li>
                            <li><a className=\"hover:text-white\" href=\"#results\">Results</a></li>
                            <li><a className=\"hover:text-white\" href=\"#music\">Music</a></li>
                            <li><a className=\"hover:text-white\" href=\"#features\">Features</a></li>
                        </ul>
                    </div>

                    <div className=\"md:col-span-4\">
                        <p className=\"font-mono-acc text-[10px] tracking-[0.25em] uppercase text-white/45\">
                            Stay in the loop
                        </p>
                        <p className=\"mt-4 text-sm text-white/55\">
                            Phase 2 will bring live emotion inference and personalised curation. We&apos;ll let you know.
                        </p>
                        <div className=\"mt-5 flex items-center gap-2\">
                            <a
                                data-testid=\"footer-social-github\"
                                href=\"#\"
                                className=\"h-10 w-10 rounded-lg glass flex items-center justify-center hover:bg-white/10\"
                                aria-label=\"GitHub\"
                            >
                                <Github size={14} strokeWidth={1.6} />
                            </a>
                            <a
                                data-testid=\"footer-social-twitter\"
                                href=\"#\"
                                className=\"h-10 w-10 rounded-lg glass flex items-center justify-center hover:bg-white/10\"
                                aria-label=\"Twitter\"
                            >
                                <Twitter size={14} strokeWidth={1.6} />
                            </a>
                            <a
                                data-testid=\"footer-social-mail\"
                                href=\"#\"
                                className=\"h-10 w-10 rounded-lg glass flex items-center justify-center hover:bg-white/10\"
                                aria-label=\"Email\"
                            >
                                <Mail size={14} strokeWidth={1.6} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className=\"mt-12 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-3\">
                    <p className=\"font-mono-acc text-[10px] tracking-[0.25em] uppercase text-white/35\">
                        © {new Date().getFullYear()} SENTIO · All signals reserved
                    </p>
                    <p className=\"font-mono-acc text-[10px] tracking-[0.25em] uppercase text-white/35\">
                        v0.1 · Phase 1
                    </p>
                </div>
            </div>
        </footer>
    );
}
"

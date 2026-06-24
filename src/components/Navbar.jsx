"import { useState, useEffect } from \"react\";
import { Activity, Menu, X } from \"lucide-react\";

const links = [
    { href: \"#camera\", label: \"Camera\" },
    { href: \"#results\", label: \"Results\" },
    { href: \"#music\", label: \"Music\" },
    { href: \"#features\", label: \"Features\" },
    { href: \"#about\", label: \"About\" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener(\"scroll\", onScroll, { passive: true });
        return () => window.removeEventListener(\"scroll\", onScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: \"smooth\", block: \"start\" });
        setOpen(false);
    };

    return (
        <nav
            data-testid=\"navbar\"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? \"bg-black/60 backdrop-blur-xl border-b border-white/5\" : \"bg-transparent\"
            }`}
        >
            <div className=\"max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-16 md:h-20 flex items-center justify-between\">
                <button
                    data-testid=\"navbar-logo\"
                    onClick={() => scrollTo(\"#hero\")}
                    className=\"flex items-center gap-2 group\"
                >
                    <span className=\"relative inline-flex h-9 w-9 items-center justify-center rounded-lg glass ring-brand\">
                        <Activity size={16} strokeWidth={2} className=\"text-cyan-300\" />
                        <span className=\"absolute inset-0 rounded-lg blur-md opacity-40 bg-cyan-400/30 group-hover:opacity-70 transition-opacity\" />
                    </span>
                    <span className=\"font-display font-bold tracking-tight text-lg\">
                        SENTIO
                    </span>
                </button>

                <ul className=\"hidden md:flex items-center gap-1\">
                    {links.map((l) => (
                        <li key={l.href}>
                            <button
                                data-testid={`nav-link-${l.label.toLowerCase()}`}
                                onClick={() => scrollTo(l.href)}
                                className=\"px-4 py-2 text-sm text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5\"
                            >
                                {l.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <button
                    data-testid=\"navbar-launch-btn\"
                    onClick={() => scrollTo(\"#camera\")}
                    className=\"hidden md:inline-flex relative items-center gap-2 px-5 py-2.5 rounded-full glass ring-brand text-sm font-medium hover:bg-white/10 transition-colors\"
                >
                    <span className=\"font-mono-acc text-[10px] tracking-[0.2em] text-cyan-300 uppercase\">
                        Launch
                    </span>
                    <span className=\"h-1.5 w-1.5 rounded-full bg-cyan-300 pulse-dot\" />
                </button>

                <button
                    data-testid=\"navbar-mobile-toggle\"
                    onClick={() => setOpen((v) => !v)}
                    className=\"md:hidden p-2 rounded-lg glass\"
                    aria-label=\"Toggle navigation\"
                >
                    {open ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            {open && (
                <div data-testid=\"navbar-mobile-menu\" className=\"md:hidden border-t border-white/5 bg-black/80 backdrop-blur-xl\">
                    <ul className=\"px-6 py-4 flex flex-col gap-1\">
                        {links.map((l) => (
                            <li key={l.href}>
                                <button
                                    onClick={() => scrollTo(l.href)}
                                    className=\"w-full text-left px-3 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg\"
                                >
                                    {l.label}
                                </button>
                            </li>
                        ))}
                        <li>
                            <button
                                onClick={() => scrollTo(\"#camera\")}
                                className=\"mt-2 w-full px-3 py-3 text-sm font-medium rounded-lg glass ring-brand text-cyan-200\"
                            >
                                Launch SENTIO
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
"

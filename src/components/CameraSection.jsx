"import { useRef, useState, useEffect } from \"react\";
import { Camera, CameraOff, Scan, AlertCircle } from \"lucide-react\";
import { toast } from \"sonner\";

export default function CameraSection() {
    const videoRef = useRef(null);
    const streamRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [error, setError] = useState(\"\");
    const [detecting, setDetecting] = useState(false);

    useEffect(() => {
        return () => {
            // Cleanup on unmount
            if (streamRef.current) {
                streamRef.current.getTracks().forEach((t) => t.stop());
            }
        };
    }, []);

    const startCamera = async () => {
        setError(\"\");
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: \"user\", width: { ideal: 1280 }, height: { ideal: 720 } },
                audio: false,
            });
            streamRef.current = stream;
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                await videoRef.current.play().catch(() => {});
            }
            setIsActive(true);
            toast.success(\"Camera online\", { description: \"Lens is now reading your frame.\" });
        } catch (e) {
            const msg =
                e?.name === \"NotAllowedError\"
                    ? \"Camera permission was denied.\"
                    : e?.name === \"NotFoundError\"
                    ? \"No camera device found.\"
                    : \"Unable to access the camera.\";
            setError(msg);
            toast.error(\"Camera unavailable\", { description: msg });
        }
    };

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach((t) => t.stop());
            streamRef.current = null;
        }
        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }
        setIsActive(false);
        toast(\"Camera offline\", { description: \"All media tracks have been released.\" });
    };

    // Future Flask backend integration
    async function detectEmotion() {
        // Future Flask backend integration
    }

    const onDetectClick = async () => {
        if (!isActive) {
            toast.error(\"Camera is off\", {
                description: \"Start the camera before running detection.\",
            });
            return;
        }
        setDetecting(true);
        await detectEmotion();
        // Real detection requires the Flask backend — surface that state honestly.
        setTimeout(() => {
            setDetecting(false);
            toast(\"Backend not connected yet\", {
                description: \"Real-time emotion inference will activate once the Flask model is wired in.\",
                icon: <AlertCircle size={16} className=\"text-cyan-300\" />,
            });
        }, 900);
    };

    return (
        <section
            id=\"camera\"
            data-testid=\"camera-section\"
            className=\"relative px-6 md:px-12 lg:px-16 py-20 md:py-28\"
        >
            <div className=\"max-w-7xl mx-auto\">
                <div className=\"flex items-end justify-between flex-wrap gap-6 mb-10\">
                    <div>
                        <span className=\"font-mono-acc text-[10px] tracking-[0.25em] uppercase text-cyan-300/80\">
                            01 · Viewfinder
                        </span>
                        <h2 className=\"mt-3 font-display font-medium tracking-tight text-3xl md:text-4xl lg:text-5xl\">
                            Open the lens
                        </h2>
                        <p className=\"mt-3 text-white/55 max-w-lg\">
                            Grant camera access to begin. Nothing leaves your device until you run detection.
                        </p>
                    </div>

                    <div
                        data-testid=\"camera-status-indicator\"
                        className=\"inline-flex items-center gap-3 px-4 py-2.5 rounded-full glass\"
                    >
                        <span
                            className={`h-2 w-2 rounded-full ${
                                isActive ? \"bg-emerald-400 pulse-dot\" : \"bg-rose-500\"
                            }`}
                        />
                        <span className=\"font-mono-acc text-[10px] tracking-[0.25em] uppercase\">
                            <span className=\"text-white/50\">Camera: </span>
                            <span
                                className={isActive ? \"text-emerald-300\" : \"text-rose-300\"}
                                data-testid=\"camera-status-text\"
                            >
                                {isActive ? \"Active\" : \"Off\"}
                            </span>
                        </span>
                    </div>
                </div>

                <div className=\"grid grid-cols-1 lg:grid-cols-12 gap-6\">
                    {/* Viewfinder */}
                    <div className=\"lg:col-span-8\">
                        <div
                            data-testid=\"camera-viewfinder\"
                            className={`relative aspect-video rounded-2xl glass-heavy overflow-hidden ${
                                isActive ? \"glow-cyan\" : \"\"
                            }`}
                        >
                            <video
                                ref={videoRef}
                                data-testid=\"camera-video\"
                                playsInline
                                muted
                                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                                    isActive ? \"opacity-100\" : \"opacity-0\"
                                }`}
                                style={{ transform: \"scaleX(-1)\" }}
                            />

                            {/* Idle placeholder */}
                            {!isActive && (
                                <div className=\"absolute inset-0 flex flex-col items-center justify-center text-center px-6\">
                                    <div className=\"h-16 w-16 rounded-2xl glass flex items-center justify-center mb-5 ring-brand\">
                                        <Camera size={22} className=\"text-cyan-300\" strokeWidth={1.5} />
                                    </div>
                                    <p className=\"font-display text-xl text-white/85\">Lens is sleeping</p>
                                    <p className=\"text-sm text-white/45 mt-1.5\">
                                        Press <span className=\"text-cyan-300\">Start Camera</span> to begin.
                                    </p>
                                </div>
                            )}

                            {/* Targeting brackets */}
                            <div className=\"pointer-events-none absolute inset-6\">
                                <span className=\"absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-cyan-300/70\" />
                                <span className=\"absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-cyan-300/70\" />
                                <span className=\"absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-cyan-300/70\" />
                                <span className=\"absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-cyan-300/70\" />
                            </div>

                            {/* Scan line while detecting */}
                            {detecting && (
                                <div className=\"pointer-events-none absolute inset-0 overflow-hidden\">
                                    <div
                                        className=\"absolute left-0 right-0 h-px scan-line\"
                                        style={{
                                            background:
                                                \"linear-gradient(90deg, transparent, rgba(0,240,255,0.9), transparent)\",
                                            boxShadow: \"0 0 24px rgba(0,240,255,0.6)\",
                                        }}
                                    />
                                </div>
                            )}

                            {/* Top-left overlay */}
                            <div className=\"absolute top-4 left-4 flex items-center gap-2 px-2.5 py-1 rounded-md glass\">
                                <span
                                    className={`h-1.5 w-1.5 rounded-full ${
                                        isActive ? \"bg-cyan-300 pulse-dot\" : \"bg-white/40\"
                                    }`}
                                />
                                <span className=\"font-mono-acc text-[9px] tracking-[0.2em] uppercase text-white/70\">
                                    {isActive ? \"Rec · Local\" : \"Idle\"}
                                </span>
                            </div>

                            {error && (
                                <div
                                    data-testid=\"camera-error\"
                                    className=\"absolute bottom-4 left-4 right-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-rose-500/15 border border-rose-400/30 text-rose-200 text-xs\"
                                >
                                    <AlertCircle size={14} />
                                    {error}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Controls */}
                    <div className=\"lg:col-span-4 flex flex-col gap-3\">
                        <button
                            data-testid=\"start-camera-btn\"
                            onClick={startCamera}
                            disabled={isActive}
                            className=\"group relative inline-flex items-center justify-between gap-3 px-5 py-4 rounded-xl glass hover:bg-white/10 transition-colors disabled:opacity-40 disabled:hover:bg-white/5\"
                        >
                            <span className=\"flex items-center gap-3\">
                                <span className=\"h-9 w-9 rounded-lg bg-cyan-400/10 border border-cyan-300/30 flex items-center justify-center\">
                                    <Camera size={16} className=\"text-cyan-300\" strokeWidth={1.6} />
                                </span>
                                <span className=\"text-left\">
                                    <span className=\"block font-display font-medium\">Start Camera</span>
                                    <span className=\"block font-mono-acc text-[9px] tracking-[0.2em] uppercase text-white/40\">
                                        Request permission
                                    </span>
                                </span>
                            </span>
                        </button>

                        <button
                            data-testid=\"stop-camera-btn\"
                            onClick={stopCamera}
                            disabled={!isActive}
                            className=\"group relative inline-flex items-center justify-between gap-3 px-5 py-4 rounded-xl glass hover:bg-white/10 transition-colors disabled:opacity-40 disabled:hover:bg-white/5\"
                        >
                            <span className=\"flex items-center gap-3\">
                                <span className=\"h-9 w-9 rounded-lg bg-rose-400/10 border border-rose-300/30 flex items-center justify-center\">
                                    <CameraOff size={16} className=\"text-rose-300\" strokeWidth={1.6} />
                                </span>
                                <span className=\"text-left\">
                                    <span className=\"block font-display font-medium\">Stop Camera</span>
                                    <span className=\"block font-mono-acc text-[9px] tracking-[0.2em] uppercase text-white/40\">
                                        Release all tracks
                                    </span>
                                </span>
                            </span>
                        </button>

                        <button
                            data-testid=\"detect-emotion-btn\"
                            onClick={onDetectClick}
                            disabled={detecting}
                            className=\"relative inline-flex items-center justify-between gap-3 px-5 py-4 rounded-xl glass-heavy ring-brand hover:bg-white/10 transition-colors disabled:opacity-70\"
                        >
                            <span className=\"flex items-center gap-3\">
                                <span className=\"h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400/30 to-violet-500/30 border border-white/15 flex items-center justify-center\">
                                    <Scan size={16} className=\"text-white\" strokeWidth={1.6} />
                                </span>
                                <span className=\"text-left\">
                                    <span className=\"block font-display font-semibold brand-gradient-text\">
                                        {detecting ? \"Reading…\" : \"Detect Emotion\"}
                                    </span>
                                    <span className=\"block font-mono-acc text-[9px] tracking-[0.2em] uppercase text-white/45\">
                                        {detecting ? \"Sampling frame\" : \"Run inference\"}
                                    </span>
                                </span>
                            </span>
                            <span
                                className={`h-1.5 w-1.5 rounded-full ${
                                    detecting ? \"bg-cyan-300 pulse-dot\" : \"bg-white/30\"
                                }`}
                            />
                        </button>

                        <div className=\"mt-2 p-4 rounded-xl glass\">
                            <p className=\"font-mono-acc text-[10px] tracking-[0.2em] uppercase text-white/40\">
                                Privacy notice
                            </p>
                            <p className=\"mt-2 text-xs text-white/55 leading-relaxed\">
                                Video stays in your browser. No frame is uploaded until you explicitly run detection
                                — and inference itself is disabled until the model backend goes live.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
"

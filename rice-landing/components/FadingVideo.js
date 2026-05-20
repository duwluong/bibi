const { useRef, useEffect } = React;

const FadingVideo = ({ src, className, style }) => {
    const videoRef = useRef(null);
    const rafId = useRef(null);
    const fadingOutRef = useRef(false);
    const FADE_MS = 500;
    const FADE_OUT_LEAD = 0.55;

    const fadeTo = (targetOpacity, duration) => {
        if (rafId.current) cancelAnimationFrame(rafId.current);
        
        const video = videoRef.current;
        if (!video) return;

        const startOpacity = parseFloat(video.style.opacity) || 0;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
            video.style.opacity = currentOpacity;

            if (progress < 1) {
                rafId.current = requestAnimationFrame(animate);
            }
        };

        rafId.current = requestAnimationFrame(animate);
    };

    const handleLoadedData = () => {
        const video = videoRef.current;
        video.style.opacity = 0;
        video.play();
        fadeTo(1, FADE_MS);
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (!video) return;

        const remaining = video.duration - video.currentTime;
        if (!fadingOutRef.current && remaining <= FADE_OUT_LEAD && remaining > 0) {
            fadingOutRef.current = true;
            fadeTo(0, FADE_MS);
        }
    };

    const handleEnded = () => {
        const video = videoRef.current;
        video.style.opacity = 0;
        setTimeout(() => {
            video.currentTime = 0;
            video.play();
            fadingOutRef.current = false;
            fadeTo(1, FADE_MS);
        }, 100);
    };

    useEffect(() => {
        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <video
            ref={videoRef}
            src={src}
            className={className}
            style={{ ...style, opacity: 0 }}
            muted
            playsInline
            preload="auto"
            onLoadedData={handleLoadedData}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
        />
    );
};

window.FadingVideo = FadingVideo;

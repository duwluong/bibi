const ArrowUpRight = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M7 17L17 7M7 7h10v10" />
    </svg>
);

const PlayIcon = ({ className, filled = false }) => (
    <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="6 4 20 12 6 20 6 4" />
    </svg>
);

window.ArrowUpRight = ArrowUpRight;
window.PlayIcon = PlayIcon;

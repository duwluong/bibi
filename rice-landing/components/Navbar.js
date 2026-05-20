const Navbar = () => (
    <nav className="fixed top-4 left-0 right-0 px-8 lg:px-16 z-50 flex items-center justify-between">
        <div className="w-12 h-12 liquid-glass rounded-full flex items-center justify-center font-heading italic text-2xl text-white">
            r
        </div>

        <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1.5 items-center gap-1">
            {['Home', 'Our Fields', 'Heritage', 'Sustainability', 'Contact'].map(link => (
                <a key={link} href="#" className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors">
                    {link}
                </a>
            ))}
            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium font-body flex items-center gap-2 whitespace-nowrap ml-2">
                Book a Tour <window.ArrowUpRight className="w-4 h-4" />
            </button>
        </div>

        <div className="w-12 h-12" />
    </nav>
);

window.Navbar = Navbar;

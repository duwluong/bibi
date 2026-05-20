const { motion } = Motion;

const Hero = () => (
    <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col">
        <window.FadingVideo 
            src="https://cdn.pixabay.com/video/2021/08/04/83866-584705190_large.mp4"
            className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
            style={{ width: "120%", height: "120%" }}
        />
        
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center">
            <motion.div 
                initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="liquid-glass rounded-full p-1 pr-3 flex items-center gap-3 mb-6"
            >
                <span className="bg-white text-black px-3 py-1 text-xs font-semibold rounded-full">Harvest</span>
                <span className="text-sm text-white/90 font-body">Golden Season Arrives 2026</span>
            </motion.div>

            <window.BlurText 
                text="Embrace the Golden Waves of Nature"
                className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-3xl tracking-[-4px]"
            />

            <motion.p
                initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="mt-6 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight"
            >
                Experience the serene beauty and rich heritage of our endless rice fields. 
                Nurtured by tradition and grown with sustainable care, bringing nature's finest yield to the world.
            </motion.p>

            <motion.div 
                initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                className="flex items-center gap-6 mt-8"
            >
                <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white flex items-center gap-2">
                    Explore the Fields <window.ArrowUpRight className="w-5 h-5" />
                </button>
                <button className="flex items-center gap-2 text-sm font-medium text-white font-body hover:opacity-80 transition-opacity">
                    <window.PlayIcon className="w-4 h-4" filled /> Watch the Harvest
                </button>
            </motion.div>

            <motion.div 
                initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
                className="flex items-stretch gap-4 mt-12"
            >
                <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left flex flex-col justify-between">
                    <svg className="w-7 h-7 text-white opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-4.66-3.56-8.5-8.11-8.94L12 3z" />
                        <path d="M12 3v9h9" />
                    </svg>
                    <div className="mt-4">
                        <div className="text-4xl font-heading italic text-white tracking-[-1px] leading-none">1,200 Ha</div>
                        <div className="text-xs text-white/70 font-body font-light mt-2 uppercase tracking-wider">Total Cultivated Area</div>
                    </div>
                </div>
                <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left flex flex-col justify-between">
                    <svg className="w-7 h-7 text-white opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                    <div className="mt-4">
                        <div className="text-4xl font-heading italic text-white tracking-[-1px] leading-none">50+ Yrs</div>
                        <div className="text-xs text-white/70 font-body font-light mt-2 uppercase tracking-wider">Of Farming Heritage</div>
                    </div>
                </div>
            </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="relative z-10 flex flex-col items-center gap-6 pb-12"
        >
            <div className="liquid-glass rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.1em] font-medium text-white/60">
                Partnering with top agricultural innovators globally
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {['AgriTech', 'EcoFarm', 'GreenCrop', 'Terra', 'HarvestCo'].map(name => (
                    <span key={name} className="font-heading italic text-2xl md:text-3xl text-white/80 tracking-tight">{name}</span>
                ))}
            </div>
        </motion.div>
    </section>
);

window.Hero = Hero;

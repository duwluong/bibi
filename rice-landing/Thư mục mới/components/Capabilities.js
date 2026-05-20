const { motion } = Motion;

const Capabilities = () => {
    const cards = [
        {
            icon: <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c.48.17.96.3 1.44.3c6.1 0 10.9-5 10.9-11v-1h-2z" />,
            tags: ['Organic', 'Soil Health', 'Water Saving', 'Eco-Vibe'],
            title: "Sustainable Farming",
            body: "We utilize sustainable practices to nurture our fields, ensuring long-term ecological balance and rich, healthy harvests."
        },
        {
            icon: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />,
            tags: ['Drone Tracking', 'Yield Opt', 'Smart Irrigation', 'Efficient'],
            title: "Precision Agriculture",
            body: "Advanced technology guides our farming, from precise planting to automated harvesting, maximizing yield without compromising quality."
        },
        {
            icon: <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1z" />,
            tags: ['Natural Light', 'Climate Sync', 'Ideal Growth', 'Golden Yield'],
            title: "Sun-Kissed Grains",
            body: "Harnessing the perfect balance of natural sunlight and weather monitoring to produce the finest, most resilient rice grains."
        }
    ];

    return (
        <section className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col">
            <window.FadingVideo 
                src="https://cdn.pixabay.com/video/2020/05/24/40061-424750278_large.mp4"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            
            <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-32 pb-20 flex flex-col min-h-screen">
                <div className="mb-auto">
                    <span className="text-sm font-body text-white/80 mb-6 block">// Our Cultivation</span>
                    <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
                        Agriculture<br/>evolved
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    {cards.map((card, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="liquid-glass rounded-[1.25rem] p-6 min-h-[380px] flex flex-col"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="w-11 h-11 liquid-glass rounded-[0.75rem] flex items-center justify-center text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        {card.icon}
                                    </svg>
                                </div>
                                <div className="flex flex-wrap justify-end gap-1.5">
                                    {card.tags.map(tag => (
                                        <span key={tag} className="liquid-glass rounded-full px-2.5 py-1 text-[10px] text-white/90 font-body whitespace-nowrap">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex-1" />

                            <div className="mt-6">
                                <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
                                    {card.title}
                                </h3>
                                <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                                    {card.body}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

window.Capabilities = Capabilities;

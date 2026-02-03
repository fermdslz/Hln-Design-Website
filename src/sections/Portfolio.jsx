import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Portfolio({ t }) {
    const [filter, setFilter] = useState('Todos');
    const [activeCategory, setActiveCategory] = useState(0); // For the English translations index mapping if needed, or just use filter name
    const [selectedImg, setSelectedImg] = useState(null);

    // Mapping for translated categories to logical keys if necessary
    // But using the localized name is often easier if they match the 'category' in the items array
    const currentFilter = filter === 'Todos' || filter === 'All' ? 'All' : filter;

    const filteredItems = t.portfolio.items.filter(item => {
        if (currentFilter === 'All') return true;
        return item.category === currentFilter;
    });

    return (
        <section id="portfolio" style={{ padding: '100px 10%', background: 'white' }}>
            <motion.div
                style={{ textAlign: 'center', marginBottom: '60px' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 style={{ fontSize: '3.5rem', marginBottom: '15px' }}>{t.portfolio.title}</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px' }}>
                    {t.portfolio.subtitle}
                </p>

                {/* Category Filter */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '15px',
                    flexWrap: 'wrap',
                    marginBottom: '50px'
                }}>
                    {t.portfolio.categories.map((cat, i) => (
                        <motion.button
                            key={i}
                            onClick={() => setFilter(cat)}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '10px 25px',
                                borderRadius: '50px',
                                border: '2px solid var(--bg-soft)',
                                background: filter === cat ? 'var(--primary-color)' : 'white',
                                color: filter === cat ? 'white' : 'var(--text-dark)',
                                cursor: 'pointer',
                                fontWeight: '600',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>
            </motion.div>

            {/* Gallery Grid */}
            <motion.div
                layout
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '30px'
                }}
            >
                <AnimatePresence mode='popLayout'>
                    {filteredItems.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="gallery-item"
                            onClick={() => setSelectedImg(item)}
                            style={{
                                cursor: 'pointer',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                position: 'relative',
                                aspectRatio: '4/3',
                                background: 'var(--bg-soft)'
                            }}
                            whileHover={{ y: -10 }}
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Proyectos+' + item.title }}
                            />
                            <motion.div
                                className="item-overlay"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'rgba(219, 39, 119, 0.8)', // accent color with opacity
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'white',
                                    padding: '20px',
                                    textAlign: 'center'
                                }}
                            >
                                <h4 style={{ color: 'white', marginBottom: '5px' }}>{item.title}</h4>
                                <span style={{ fontSize: '0.8rem', opacity: 0.9 }}>{item.category}</span>
                            </motion.div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: 'rgba(0,0,0,0.9)',
                            zIndex: 2000,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '40px'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                maxWidth: '90%',
                                maxHeight: '90%',
                                position: 'relative',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                            }}
                        >
                            <button
                                onClick={() => setSelectedImg(null)}
                                style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    background: 'white',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    cursor: 'pointer',
                                    fontSize: '1.5rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    zIndex: 2100
                                }}
                            >
                                &times;
                            </button>
                            <img
                                src={selectedImg.img}
                                alt={selectedImg.title}
                                style={{ maxWidth: '100%', maxHeight: '80vh', display: 'block' }}
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/800x600?text=' + selectedImg.title }}
                            />
                            <div style={{ padding: '20px', background: 'white', textAlign: 'center' }}>
                                <h3 style={{ color: 'var(--text-dark)' }}>{selectedImg.title}</h3>
                                <p style={{ color: 'var(--text-muted)' }}>{selectedImg.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <hr style={{ margin: '100px 0 60px', border: 'none', borderTop: '2px solid var(--bg-soft)' }} />

            {/* Testimonials (original content preserved) */}
            <motion.div
                style={{ textAlign: 'center', marginBottom: '60px' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <h2 style={{ fontSize: '3rem' }}>{t.testimonials.title}</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{t.testimonials.subtitle}</p>
            </motion.div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '40px'
            }}>
                <motion.div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '50px',
                        opacity: 0.6,
                        marginBottom: '40px',
                        flexWrap: 'wrap'
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                >
                    <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>CLIENTE_A</div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>CLIENTE_B</div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>CLIENTE_C</div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>CLIENTE_D</div>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {t.testimonials.items.map((testi, i) => (
                        <motion.div
                            key={i}
                            style={{
                                background: 'var(--bg-soft)',
                                padding: '40px',
                                borderRadius: '30px',
                                position: 'relative'
                            }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <span style={{ fontSize: '4rem', color: 'var(--primary-color)', opacity: 0.2, position: 'absolute', top: '10px', left: '20px' }}>“</span>
                            <p style={{ fontStyle: 'italic', marginBottom: '20px', position: 'relative', zIndex: 1 }}>{testi.text}</p>
                            <div>
                                <motion.h4
                                    style={{ color: 'var(--primary-color)' }}
                                    initial={{ x: -10 }}
                                    whileInView={{ x: 0 }}
                                >
                                    {testi.name}
                                </motion.h4>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{testi.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;

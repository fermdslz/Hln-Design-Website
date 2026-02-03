import React from 'react';
import { motion } from 'framer-motion';

function Services({ t }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="services" style={{ background: 'var(--bg-soft)', position: 'relative', zIndex: 3 }}>
            <motion.div
                style={{ textAlign: 'center', marginBottom: '60px' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 style={{ fontSize: '3rem' }}>{t.services.title}</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{t.services.subtitle}</p>
            </motion.div>

            <motion.div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '40px'
                }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {t.services.items.map((service, i) => (
                    <motion.div
                        key={i}
                        className="service-card"
                        variants={cardVariants}
                        whileHover={{ y: -10 }}
                        style={{
                            background: 'white',
                            borderRadius: '25px',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-subtle)',
                            transition: 'var(--transition-smooth)',
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                            <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ padding: '30px' }}>
                            <h3 style={{ marginBottom: '15px' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{service.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Services;

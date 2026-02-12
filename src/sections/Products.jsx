import React from 'react';
import { motion } from 'framer-motion';

function Products({ t }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="products" style={{ background: 'white' }}>
            <motion.div
                style={{ textAlign: 'center', marginBottom: '60px' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 style={{ fontSize: '3rem' }}>{t.products.title}</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{t.products.subtitle}</p>
            </motion.div>
            <motion.div
                className="products-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {t.products.items.map((product, i) => (
                    <motion.div
                        key={i}
                        className="product-card"
                        variants={itemVariants}
                        whileHover={{ y: -10, scale: 1.02 }}
                    >
                        <span className="product-icon" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '3rem',
                            marginBottom: '25px',
                            overflow: 'visible'
                        }}>
                            {product.icon.includes('/') ? (
                                <img
                                    src={product.icon}
                                    alt=""
                                    style={{
                                        height: '110%',
                                        width: 'auto',
                                        maxWidth: '120%',
                                        objectFit: 'contain',
                                        transform: 'scale(1.3)',
                                        transition: 'transform 0.3s ease'
                                    }}
                                />
                            ) : (
                                <span style={{ fontSize: '3rem' }}>{product.icon}</span>
                            )}
                        </span>
                        <h3 style={{ marginBottom: '10px', color: 'var(--text-dark)' }}>{product.title}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{product.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Products;

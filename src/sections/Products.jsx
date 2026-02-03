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
                        <span className="product-icon">{product.icon}</span>
                        <h3 style={{ marginBottom: '10px' }}>{product.title}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{product.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Products;

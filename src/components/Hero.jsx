import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa6';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.25, delayChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { y: 28, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 55, damping: 14 }
        }
    };

    return (
        <section className="hero">
            <div className="hero__bg" />
            <div className="hero__overlay" />

            <div className="hero__content">
                <motion.div
                    className="hero__text-container"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="hero__badge" variants={itemVariants}>
                        <FaStar style={{ fontSize: '0.8rem', color: '#F59E0B' }} />
                        Empresa legalizada · Cúcuta, Colombia
                    </motion.div>

                    <motion.h1 variants={itemVariants}>
                        Experiencias <span className="highlight">Inolvidables</span>
                    </motion.h1>

                    <motion.p variants={itemVariants}>
                        Producción de eventos, recreación profesional y momentos mágicos para todas las edades.
                    </motion.p>

                    <motion.div className="hero__cta" variants={itemVariants}>
                        <motion.a
                            href="#servicios"
                            className="btn btn--primary"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Ver Servicios
                        </motion.a>
                        <motion.a
                            href="#contacto"
                            className="btn btn--secondary"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Contáctanos
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

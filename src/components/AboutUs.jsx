import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaHeart, FaStar, FaTrophy } from 'react-icons/fa6';

const stats = [
    { icon: FaUsers, value: '+500', label: 'Eventos realizados' },
    { icon: FaHeart, value: '100%', label: 'Clientes satisfechos' },
    { icon: FaStar, value: '6+', label: 'Años de experiencia' },
    { icon: FaTrophy, value: '50+', label: 'Personajes disponibles' },
];

const AboutUs = () => {
    return (
        <section id="nosotros" className="section about-section">
            <div className="container">
                <div className="about-content">
                    {/* Text */}
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                    >
                        <span className="section__label">¿Quiénes somos?</span>
                        <h3>Más de 6 años creando momentos mágicos</h3>
                        <p>
                            Somos <strong>MegAnimación</strong>, una empresa legalizada especializada en la organización
                            y ejecución de eventos sociales, corporativos e infantiles en <strong>Cúcuta, Colombia</strong>.
                        </p>
                        <p>
                            Utilizamos la expresión artística, la música y los valores en cada experiencia que creamos,
                            transformando tus celebraciones en recuerdos inolvidables llenos de alegría y diversión.
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="about-stats"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.15 }}
                    >
                        {stats.map(({ icon: Icon, value, label }, i) => (
                            <div className="stat-card" key={i}>
                                <Icon className="stat-icon" />
                                <h4>{value}</h4>
                                <p>{label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;

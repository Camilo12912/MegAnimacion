
import React from 'react';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Animación infantil y sonido",
        description: "Recreación temática infantil, fiestas para bebés y sonido profesional.",
        img: "/img/servicios/infantil.jpg",
        modalId: "modal-infantil"
    },
    {
        title: "Animación juvenil y sonido",
        description: "Pool party, fiesta neón, fiesta deportiva.",
        img: "/img/servicios/juvenil.jpg",
        modalId: "modal-juvenil"
    },
    {
        title: "Baby shower y revelación",
        description: "Animación, sonido, iluminación y juegos especiales.",
        img: "/img/servicios/babyshower.jpg",
        modalId: "modal-baby"
    },
    {
        title: "Pool party",
        description: "Fiestas en piscina con cañón de espuma e inflables.",
        img: "/img/servicios/poolparty.jpg",
        modalId: "modal-pool"
    },
    {
        title: "Shows temáticos y personajes",
        description: "Musicales, BTL empresarial y visitas a colegios.",
        img: "/img/servicios/shows.jpg",
        modalId: "modal-shows"
    },
    {
        title: "Estaciones de comida",
        description: "Snacks dulces y salados para tus invitados.",
        img: "/img/servicios/comida.jpg",
        modalId: "modal-comida"
    },
    {
        title: "Atracciones",
        description: "Parques infantiles, ferias y juegos inflables.",
        img: "/img/servicios/atracciones.jpg",
        modalId: "modal-atracciones"
    },
    {
        title: "Eventos empresariales",
        description: "Animación masiva, rallys deportivos y catering.",
        img: "/img/servicios/empresarial.jpg",
        modalId: "modal-empresarial"
    },
    {
        title: "Servicios adicionales",
        description: "Meseros, carpas, sillas y decoración.",
        img: "/img/servicios/adicionales.jpg",
        modalId: "modal-adicionales"
    },
    {
        title: "Fiesta de Halloween",
        description: "Animación, cazacalabaza, shows y atracciones.",
        img: "/img/servicios/halloween.jpg",
        modalId: "modal-halloween"
    },
    {
        title: "Fiestas de Navidad",
        description: "Shows de Noel, personajes navideños y novenas.",
        img: "/img/servicios/navidad.jpg",
        modalId: "modal-navidad"
    }
];

const ServicesSection = ({ openModal }) => {
    return (
        <section id="servicios" className="section">
            <div className="container">
                <div className="section-header">
                    <motion.span
                        className="section__label"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Lo que ofrecemos
                    </motion.span>
                    <motion.h2
                        className="section__title"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Nuestros Servicios
                    </motion.h2>
                    <motion.p
                        className="section__subtitle"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        De cumpleaños y baby showers hasta grandes eventos corporativos, lo hacemos con pasión.
                    </motion.p>
                </div>

                <div className="grid services">
                    {services.map((service, index) => (
                        <ServiceCard key={index} index={index} service={service} openModal={openModal} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

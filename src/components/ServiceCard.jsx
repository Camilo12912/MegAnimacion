
import React from 'react';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const WA_NUMBER = '573133493403';

export const buildWhatsAppUrl = (serviceName) => {
    const msg = `¡Hola! Me interesa adquirir el servicio de *${serviceName}*. ¿Me pueden dar más información?`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
};

const ServiceCard = ({ service, openModal, index }) => {
    return (
        <motion.article
            className="card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
        >
            <div className="card__img">
                <img src={service.img} alt={service.title} loading="lazy" />
            </div>
            <div className="card__body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="card__footer">
                    <motion.button
                        className="btn btn--outline"
                        onClick={() => openModal(service.modalId)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <FaArrowRight className="icon-sm" /> Ver detalles
                    </motion.button>
                </div>
            </div>
        </motion.article>
    );
};

export default ServiceCard;

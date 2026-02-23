import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';
import { servicesData, iconMap } from '../data/services';
import { buildWhatsAppUrl } from './ServiceCard';

const ModalsContainer = ({ modalStack, closeModal, openModal }) => {
    const currentModalId = modalStack.length > 0 ? modalStack[modalStack.length - 1] : null;

    useEffect(() => {
        if (currentModalId) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [currentModalId]);

    if (!currentModalId) return null;

    const data = servicesData[currentModalId];

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal();
        }
    };

    if (!data) {
        return (
            <div className={`modal show`} style={{ display: 'flex' }} onClick={handleBackdropClick}>
                <div className="modal__content">
                    <span className="modal__close" onClick={closeModal}>&times;</span>
                    <p>Contenido no encontrado</p>
                </div>
            </div>
        );
    }

    const TitleIcon = iconMap[data.icon] || null;

    return (
        <AnimatePresence>
            {currentModalId && data && (
                <motion.div
                    className="modal show"
                    onClick={handleBackdropClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="modal__content"
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <span className="modal__close" onClick={closeModal}>&times;</span>

                        {/* Header */}
                        <h2 className="modal__title">
                            {TitleIcon && <TitleIcon className={`title-icon ${data.colorClass || ''}`} />}
                            {data.title}
                        </h2>

                        {/* Description */}
                        {data.description && (
                            <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
                        )}

                        {/* List Option */}
                        {data.list && (
                            <ul className="modal__list">
                                {data.list.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        )}

                        {/* Footer Text */}
                        {data.footerText && (
                            <p className="modal__footer-text"><i>{data.footerText}</i></p>
                        )}

                        {/* Options Buttons */}
                        {data.options && (
                            <div className="modal__options">
                                {data.options.map((option) => {
                                    const OptionIcon = iconMap[option.icon];
                                    return (
                                        <motion.button
                                            key={option.id}
                                            className="btn btn--option"
                                            onClick={() => openModal(option.id)}
                                            whileHover={{ scale: 1.02, backgroundColor: "#f0f9ff" }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {OptionIcon && <OptionIcon className={`modal-icon ${option.colorClass || ''}`} />}
                                            {option.label}
                                        </motion.button>
                                    );
                                })}
                            </div>
                        )}

                        {/* Details */}
                        {data.details && (
                            <div className="modal__details">
                                {data.details.map((detail, index) => (
                                    <p key={index}>
                                        <b>{detail.label}:</b> {detail.value}
                                    </p>
                                ))}
                            </div>
                        )}

                        {/* Image */}
                        {data.image && (
                            <div className="modal__image-wrapper">
                                <img src={data.image} alt={data.title} loading="lazy" />
                            </div>
                        )}

                        {/* Notes */}
                        {data.notes && (
                            <div className="modal__notes">
                                {data.notes.map((note, index) => {
                                    const NoteIcon = iconMap[note.icon];
                                    return (
                                        <p key={index} className="note">
                                            {NoteIcon && <NoteIcon className="note-icon" />}
                                            <span dangerouslySetInnerHTML={{ __html: note.text }}></span>
                                        </p>
                                    );
                                })}
                            </div>
                        )}
                        {/* WhatsApp CTA - Solo se muestra si no hay más opciones (es el modal más específico) */}
                        {!data.options && (
                            <div className="modal__wsp-cta">
                                <a
                                    href={buildWhatsAppUrl(data.title)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn--whatsapp-full"
                                >
                                    <FaWhatsapp />
                                    Quiero este servicio
                                </a>
                            </div>
                        )}

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ModalsContainer;

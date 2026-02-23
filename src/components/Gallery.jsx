import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaXmark } from 'react-icons/fa6';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Imágenes de la galería (puedes agregar más)
    const galleryImages = [
        { id: 1, src: '/img/servicios/infantil.jpg', alt: 'Animación Infantil' },
        { id: 2, src: '/img/servicios/juvenil.jpg', alt: 'Animación Juvenil' },
        { id: 3, src: '/img/servicios/babyshower.jpg', alt: 'Baby Shower' },
        { id: 4, src: '/img/servicios/poolparty.jpg', alt: 'Pool Party' },
        { id: 5, src: '/img/servicios/shows.jpg', alt: 'Shows Temáticos' },
        { id: 6, src: '/img/servicios/halloween.jpg', alt: 'Halloween' },
        { id: 7, src: '/img/servicios/navidad.jpg', alt: 'Navidad' },
        { id: 8, src: '/img/servicios/empresarial.jpg', alt: 'Eventos Empresariales' },
    ];

    return (
        <section id="galeria" className="section gallery-section">
            <div className="container">
                <motion.h2
                    className="section__title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Galería de Eventos
                </motion.h2>

                <div className="gallery-grid">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className="gallery-item"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedImage(image)}
                        >
                            <img src={image.src} alt={image.alt} loading="lazy" />
                            <div className="gallery-overlay">
                                <p>{image.alt}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal de imagen ampliada */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="gallery-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="gallery-modal-content"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="gallery-modal-close"
                                onClick={() => setSelectedImage(null)}
                            >
                                <FaXmark />
                            </button>
                            <img src={selectedImage.src} alt={selectedImage.alt} />
                            <p>{selectedImage.alt}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;

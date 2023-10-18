import React, { useState } from 'react'
import cls from './Achievements.module.scss'

export default function Achievements() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const openModal = (image) => {
      setSelectedImage(image);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setSelectedImage(null);
      setIsModalOpen(false);
    };
  
    const images = [
      { id: 1, src: 'image1.jpg', alt: 'Image 1' },
      { id: 2, src: 'image2.jpg', alt: 'Image 2' },
      { id: 3, src: 'image3.jpg', alt: 'Image 3' },
    ];
  
    return (
      <div>
        <h1>Галерея изображений</h1>
        <div className={cls.image_container}>
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              onClick={() => openModal(image)}
            />
          ))}
        </div>
        {isModalOpen && (
          <div>
            <div className={cls.modal_overlay} onClick={closeModal}></div>
            <div className={cls.modal}>
              <span className={cls.close_button} onClick={closeModal}>
                &times;
              </span>
              <img src={selectedImage.src} alt={selectedImage.alt} />
            </div>
          </div>
        )}
      </div>
    );
  }
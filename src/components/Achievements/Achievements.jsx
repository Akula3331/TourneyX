import React, { useState } from "react";
import cls from "./Achievements.module.scss";

export default function Achievements({ achiv }) {
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
   // Проверяем, что объект achiv существует и имеет нужные свойства
   const icon = achiv && achiv[0] && achiv[0].icon;
   const name = achiv && achiv[0] && achiv[0].name;
   const txt = achiv && achiv[0] && achiv[0].txt;
   const rary = achiv && achiv[0] && achiv[0].rary;
 
   const rarityClass = achiv && cls[rary] || cls.common;
 
   return (
     <div>
       <h1>Галерея изображений</h1>
       <div className={cls.image_container}>
         <img className={cls.icon} src={icon} alt="" onClick={openModal} />
       </div>
       {isModalOpen && (
         <div>
           <div className={cls.modal_overlay} onClick={closeModal}></div>
           <div className={`${cls.modal} ${rarityClass}`}>
             <img
               className={cls.modalImg}
               src={icon}
               alt={achiv && achiv[0].alt}
             />
             <p className={cls.title}>{name}</p>
             <p className={cls.lvl}>Уровень: {rary}</p>
             <p className={cls.txt}>{txt}</p>
             <div className={cls.close} onClick={closeModal}>
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 strokeWidth="1.5"
                 stroke="currentColor"
                 className="w-6 h-6"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M6 18L18 6M6 6l12 12"
                 />
               </svg>
             </div>
           </div>
         </div>
       )}
     </div>
   );
 }
import React, { useEffect, useState } from "react";
import cls from "./Achievements.module.scss";
import axios from "axios";

export default function Achievements({ nick }) {
  const [playerData, setPlayerData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  useEffect(() => {

    axios.get('/players.json')
      .then((response) => {
        // Находим данные игрока по его нику
        const player = response.data.players.find((p) => p.name === nick);
        setPlayerData(player);
      })
      .catch((error) => {
        console.error("Error fetching player data:", error);
      });
  }, [nick]);

  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedAchievement(null);
    setIsModalOpen(false);
  };

  if (!playerData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cls.container}>
      {/* Отображение достижений игрока */}
      {playerData.achiv.map((achievement, index) => (
        <div key={index} className={cls.image_container}>
          <img
            className={cls.icon}
            src={achievement.icon}
            alt=""
            onClick={() => openModal(achievement)}
          />
        </div>
      ))}

      {/* Модальное окно с подробной информацией о достижении */}
      {isModalOpen && selectedAchievement && (
        <div>
          <div className={cls.modal_overlay} onClick={closeModal}></div>
          <div className={`${cls.modal} ${cls[selectedAchievement.rary] || cls.common}`}>
            <img
              className={cls.modalImg}
              src={selectedAchievement.icon}
              alt={selectedAchievement.name}
            />
            <p className={cls.title}>{selectedAchievement.name}</p>
            <p className={cls.info}>{selectedAchievement.info}</p>
            <div className={cls.lvlCon}><p className={cls.lvl}>Уровень:</p>{selectedAchievement.lvl}</div>
            <p className={cls.txt}>{selectedAchievement.txt}</p>
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
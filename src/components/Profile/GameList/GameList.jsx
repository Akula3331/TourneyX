import React, { useEffect, useState } from "react";
import cls from "./GameList.module.scss";
import axios from "axios";
import ModalGameList from './../ModalGameList/ModalGameList';

export default function GameList({ playerName }) {
  const [playerData, setPlayerData] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    // Используйте Axios для загрузки данных из JSON-файла
    axios.get("/players.json")
      .then(response => {
        // Найдите данные для указанного игрока
        const player = response.data.players.find(player => player.name === playerName);
        if (player) {
          setPlayerData(player);
        } else {
          console.error(`Игрок с именем ${playerName} не найден`);
        }
      })
      .catch(error => {
        console.error("Ошибка при загрузке данных:", error);
      });
  }, [playerName]);

  // Функция для вычисления суммы баллов для режима игры
  const calculateTotalPoints = () => {
    return playerData?.games.reduce((total, game) => {
      const firstPlacePoints = parseInt(game.firstPlace, 10);
      const secondPlacePoints = parseInt(game.secondPlace, 10);
      const thirdPlacePoints = parseInt(game.thirdPlace, 10);
      const fourthPlacePoints = parseInt(game.fourthPlace, 10);
      return total + (4 * firstPlacePoints + 3 * secondPlacePoints + 2 * thirdPlacePoints + 1 * fourthPlacePoints);
    }, 0);
  };
  if (!playerData) {
    return <div>Загрузка данных...</div>;
  }

  
  const handleButtonClick = (place) => {
    setSelectedPlace(place);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlace(null);
  };
  const calculateTotalPlaces = () => {
    const totalPlaces = playerData?.games.reduce((sum, game) => {
      const firstPlace = parseInt(game.firstPlace, 10) || 0;
      const secondPlace = parseInt(game.secondPlace, 10) || 0;
      const thirdPlace = parseInt(game.thirdPlace, 10) || 0;
      const fourthPlace = parseInt(game.fourthPlace, 10) || 0;
  
      return sum + firstPlace + secondPlace + thirdPlace + fourthPlace;
    }, 0);
  
    return totalPlaces;
  };
  
  const calculatePlaceCount = (place) => {
    return playerData?.games.reduce((count, game) => count + game[`${place}Place`], 0);
  };
  return (
    
    <div className={cls.container}>
    
     
      {playerData && (
          <div className={cls.con}>
            <div className={cls.block}>
            <p className={cls.conTitle}>Места</p>
            <div className={cls.conTitle}>Занято</div>
            </div> 
              <div onClick={() => handleButtonClick('first')} className={cls.block}>
              <div  className={cls.imgCon}><img className={cls.headerImg} src="/icons/place1.svg" alt="place"/>
              </div>
              <p className={`${cls.gameItem} ${cls.first}`}> {calculatePlaceCount('first')}</p>
              </div>
              <div onClick={() => handleButtonClick('second')} className={cls.block}>
              <div  className={cls.imgCon}><img className={cls.headerImg} src="/icons/place2.svg" alt="place"/></div>
              <p className={`${cls.gameItem} ${cls.second}`}> {calculatePlaceCount('second')}</p>
              </div>
              <div onClick={() => handleButtonClick('third')} className={cls.block}>
              <div  className={cls.imgCon}><img className={cls.headerImg} src="/icons/place3.svg" alt="place"/></div>
              <p className={`${cls.gameItem} ${cls.third}`}> {calculatePlaceCount('third')}</p>
              </div>
              <div onClick={() => handleButtonClick('fourth')} className={cls.block}>
              <div  className={cls.imgCon}><img className={cls.headerImg} src="/icons/place4.svg" alt="place"/></div>
              <p className={`${cls.gameItem} ${cls.fourth}`}> {calculatePlaceCount('fourth')}</p>
              </div>
              <div className={cls.block}>
              <p className={`${cls.conTitle} ${cls.fifth}`}>Баллы</p>
              <p className={`${cls.conTitle} ${cls.fifth}`}> {calculateTotalPoints()}</p>
              </div> 
              <div className={cls.block}>
              <p className={`${cls.conTitle} ${cls.fifth}`}>Сыграно</p>
              <p className={`${cls.conTitle} ${cls.fifth}`}> {calculateTotalPlaces()}</p>
              </div> 
          </div>
        )}
      {isModalOpen && selectedPlace !== null && (
        <ModalGameList
          isOpen={true}
          onClose={closeModal}
          place={selectedPlace}
          gameData={playerData.games}
        />
      )}
  </div>
  );
}

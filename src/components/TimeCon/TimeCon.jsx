import React, { useEffect, useState } from "react";
import cls from "./TimeCon.module.scss";
import BlockTime from "../BlockTime/BlockTime";

export default function TimeCon({ onFirstDateFromChild }) {
  const initialData = [
 
   
    {
      img: "/icons/timeIcon/gamecontroller.svg",
      dis: "Rusted Warfare",
      data: "16.11.2023",
    },
    {
      img: "/icons/timeIcon/gamecontroller.svg",
      dis: "Гольф",
      data: "19.11.2023",
    },
    {
      img: "/icons/timeIcon/dice.svg",
      dis: "Монополия",
      data: "22.11.2023",
    }
   
  ];

  // 'Gorbatic', 'Betito','CFKN','Kalamburger'

  const [firstData, setFirstData] = useState(
    initialData.length > 0 ? initialData[0].data : null
  );

  useEffect(() => {
    // Передаем как дату, так и название игры в функцию onFirstDateFromChild
    onFirstDateFromChild(firstData, initialData[0].dis);
  }, [firstData, onFirstDateFromChild]);

  const [containerStates, setContainerStates] = useState(
    initialData.map(() => false) // Изначально все контейнеры закрыты
  );
  const handleContainerClick = (index) => {
    // Создаем копию массива состояний
    const newContainerStates = [...containerStates];

    // Если выбранный контейнер уже открыт, закрываем его, иначе открываем
    newContainerStates[index] = !newContainerStates[index];

    // Если открываем выбранный контейнер, закрываем другие
    if (newContainerStates[index]) {
      newContainerStates.forEach((state, i) => {
        if (i !== index) {
          newContainerStates[i] = false;
        }
      });
    }

    setContainerStates(newContainerStates);
  };
  const bgStyles = {
    background: "url(/images/datebg.jpg)",
  };
  return (
    <div className={cls.container}>
      <div className={cls.header}>
        <p className={cls.headerItem}>Тип</p>
        <p className={cls.headerItem}>Дисциплина</p>
        <p className={cls.headerItem}>Дата</p>
      </div>
      <div className={cls.con} style={bgStyles}>
        {initialData.map((item, index) => (
          <BlockTime
            key={index}
            img={item.img}
            dis={item.dis}
            data={item.data}
            isOpen={containerStates[index]}
            onToggle={() => handleContainerClick(index)}
            pNum={item.pNum}
          />
        ))}
      </div>
    </div>
  );
}

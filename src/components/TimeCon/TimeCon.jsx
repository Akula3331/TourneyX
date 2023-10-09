import React, { useEffect, useState } from "react";
import cls from "./TimeCon.module.scss";
import BlockTime from "../BlockTime/BlockTime";

export default function TimeCon({ onFirstDateFromChild }) {
  const initialData = [
    { img: "/icons/gamecontroller.svg", 
    dis: "BLUR", 
    data: "09.10.2023",
    pNum:['Gorbatic', 'pol','koi','jio'] },
  
    { img: "/icons/dice.svg", dis: "Дурак", data: "09.10.2023" },
    { img: "/icons/dumbbell.svg", dis: "Шахматы", data: "10.10.2023" },
  ];

  // 'Gorbatic', 'Betito','CFKN','' Никнеймы

  const [firstData, setFirstData] = useState(
    initialData.length > 0 ? initialData[0].data : null
  );

  // const targetDate = null;
  useEffect(() => {
    onFirstDateFromChild(firstData);
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
  return (
    <div>
      <div className={cls.header}>
        <p className={cls.headerItem}>Тип</p>
        <p className={cls.headerItem}>Дисциплина</p>
        <p className={cls.headerItem}>Дата</p>
      </div>
      <div className={cls.con}>
        <img className={cls.bg} src="/images/datebg.jpg" alt="" />
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

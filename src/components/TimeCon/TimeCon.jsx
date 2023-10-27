import React, { useEffect, useState } from "react";
import cls from "./TimeCon.module.scss";
import BlockTime from "../BlockTime/BlockTime";

export default function TimeCon({ onFirstDateFromChild }) {
  const initialData = [
    {
      img: "/icons/timeIcon/gamecontroller.svg",
      dis: "Морской Бой",
      data: "28.10.2023",
      pNum: ["Kalamburger", "Gorbatic", "Betito", "CFKN"],
    },
    {
      img: "/icons/timeIcon/dice.svg",
      dis: "Крестики-Нолики",
      data: "28.10.2023",
      pNum: ["Kalamburger", "CFKN", "Gorbatic", "Betito"],
    },
    {
      img: "/icons/timeIcon/dice.svg",
      dis: "Монополия",
      data: "30.10.2023",
    },
    // {
    //   img: "/icons/timeIcon/gamecontroller.svg",
    //   dis: "Бильярд",
    //   data: "03.10.2023",
    //   pNum: ["Kalamburger", "Betito", "Gorbatic", "CFKN"],
    // },
    // {
    //   img: "/icons/timeIcon/gamecontroller.svg",
    //   dis: "Influence",
    //   data: "05.10.2023",
    // },
    // {
    //   img: "/icons/timeIcon/dice.svg",
    //   dis: "Шахматы",
    //   data: "07.10.2023",
    //   pNum: ["Kalamburger", "Betito", "Gorbatic", "CFKN"],
    // },
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

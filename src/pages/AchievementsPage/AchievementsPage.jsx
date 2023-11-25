import React from "react";
import cls from './AchievementsPage.module.scss'
import AchievementsCard from "../../components/AchievementsCard/AchievementsCard";
import Back from "../../components/Back/Back";

export default function AchievementsPage() {
  const achivements = [
    {
      title: "Картовый Герой",
      info: 'Займите 1-е место 20 раз в карточных играх',
      rarity:'novice'
    },
    {
      title: "Нулевой герой",
      info: 'Для получения трофея,займите 4-е место 5 раз подряд',
      rarity:'novice'
    },
    {
      title: "Знаток Викторин",
      info: 'Ответьте на вопросы в викторине без единой ошибки',
      rarity:'medium'
    },
    {
      title: "Бросок на Крышку",
      info: 'Для получения трофея,поставьте бутылку на крышку',
      rarity:'expert'
    },
  ];
  return (
    <div className={cls.container}>
        <Back/>

      <div className={cls.con}>
      {achivements.map((item, index) => (
        <AchievementsCard key={index} info={item.info} rarity={item.rarity} title={item.title} />
      ))}
      </div>
    </div>
  );
}

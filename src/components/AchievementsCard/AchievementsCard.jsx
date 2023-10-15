import React from 'react'
import cls from './AchievementsCard.module.scss'

export default function AchievementsCard({title,info,rarity}) {
  const rarityClass = cls[rarity] || cls.common

  return (
    <>
        <div className={`${cls.con} ${rarityClass}`}>
            <div className={cls.img}><p className={cls.icon}>?</p></div>
            <div className={cls.textCon}>
                <p className={cls.title}>{title}</p>
                <p className={cls.info}>{info}</p>
            </div>
        </div>
    </>
  )
}

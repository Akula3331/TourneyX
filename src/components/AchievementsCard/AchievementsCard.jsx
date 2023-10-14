import React from 'react'
import cls from './AchievementsCard.module.scss'

export default function AchievementsCard({title,info}) {
  return (
    <>
        <div className={cls.con}>
            <div className={cls.img}><p className={cls.icon}>?</p></div>
            <div className={cls.textCon}>
                <p className={cls.title}>{title}</p>
                <p className={cls.info}>{info}</p>
            </div>
        </div>
    </>
  )
}

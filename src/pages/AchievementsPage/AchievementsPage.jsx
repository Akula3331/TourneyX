import React from 'react'
import AchievementsCard from '../../components/AchievementsCard/AchievementsCard'

export default function AchievementsPage() {
  const achivements =[
    {title:'Мастер Последнего Места',info:'Для получения трофея "Мастер Последнего Места", займите четвёртое место пять раз подряд в разных соревнованиях.'}
  ]
  return (
    <div>
      {achivements.map((item,index) => (
        <AchievementsCard
        key={index}
        info={item.info}
        title={item.title}
        />
      ))}
    </div>
  )
}

import React from 'react'
import cls from './PagesB.module.scss'
import GameList from '../../components/Profile/GameList/GameList';
import Back from '../../components/Back/Back';

export default function PagesB() {
  return (
    <div className={cls.container}>
         
        <div className={cls.conHeader}>
        
        <div className={cls.avaCon}>
        <img src="/images/bava.jpg" alt="" />
        </div>
        <div className={cls.itemCon}>
            <div className={cls.profile}>
                <p className={cls.profItem}>Betito</p>
                <p className={cls.profItem}>Возраст: 19</p>
            </div>
            
        </div>
        
        </div>
        <div className={cls.listGame}>
        <GameList playerName='Betito'/>
        </div>
        
    </div>
  )
}

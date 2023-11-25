import React from "react";
import cls from "./PageInfo.module.scss";
import Back from "../../components/Back/Back";

export default function PageInfo() {
  return (
    <div className={cls.container}>
      <Back />
      <div className={cls.con}>
        <p className={cls.title}>Навигация по сайту</p>
        <p className={cls.item}>
          <span>1. Расписание и Таймер обратного отсчета:</span> Здесь вы
          найдете информацию о предстоящих играх, их расписании и таймере
          обратного отсчета до начала. Это поможет вам быть в курсе и не
          пропустить свои любимые игры.
        </p>

        <p className={cls.item}>
          <span>2.Рейтинг игроков:</span>Этот раздел показывает лидеров и
          рейтинг игроков согласно набранным баллам. Вы сможете увидеть, кто
          занимает верхние позиции и сравнивать свои достижения с другими
          игроками.
        </p>

        <p className={cls.item}>
          <span>3.Профиль и Аккаунты: </span>Здесь вы можете войти в свой
          аккаунт и управлять профилем. Это включает в себя информацию о вас,
          баллы, достижения и другие настройки профиля. Вы также сможете
          редактировать свои данные и информацию о себе.
        </p>
        <p className={cls.item}>
          <span>4.Достижения:</span> В этом разделе вы сможете просматривать
          список доступных достижений и наград в играх.Это поможет вам узнать,
          какие достижения ещё можно получить в играх, и побудит вас исследовать
          новые вызовы и возможности в мире игр.
        </p>
      </div>
      <div className={cls.con}>
        <p className={cls.title}>Досижения: </p>
        <p className={cls.item}>
         <span>Доска достижений:</span>  На доске отображаются только названия достижений, но
          сами достижения скрыты. Вы узнаете, что достижение существует только
          после его разблокирования.
        </p>
        <p className={cls.item}>
         <span>Уровни Сложности:</span>  Достижения разделены на уровни сложности, включая
          <div className={cls.colorCon}>
            <div className={cls.colorBlock}>
              <p>1.Новичок</p>
              <div className={cls.novice}></div>
            </div>
            <div className={cls.colorBlock}>
              <p>2.Легкий</p>
              <div className={cls.easy}></div>
            </div>
            <div className={cls.colorBlock}>
              <p>3.Средний</p>
              <div className={cls.medium}></div>
            </div>
            <div className={cls.colorBlock}>
              <p>4.Продвинутый</p>
              <div className={cls.advanced}></div>
            </div>
            <div className={cls.colorBlock}>
              <p>5.Эксперт</p>
              <div className={cls.expert}></div>
            </div>
            <div className={cls.colorBlock}>
              <p>6.Мастер</p>
              <div className={cls.master}></div>
            </div>
            <div className={cls.colorBlock}>
              <p>7.Легенда</p>
              <div className={cls.legend}></div>
            </div>
          </div>
          Развивайтесь и достигайте новых высот в играх.
        </p>
        <p className={cls.item}>
        <span>Уникальные Достижения:</span> Каждое достижение уникально. Если вы разблокировали достижение, оно больше не появится на доске, так что не упустите свой шанс.
        </p>
      </div>
      <div className={cls.con}>
        <p className={cls.title}>Хранение результатов: </p>
        <p className={cls.item}>
          Все результаты игр сохраняются и могут быть просмотрены в любое время.
          Вы можете отслеживать свой прогресс и результаты соревнований.
        </p>
        <p className={cls.item}>
          По завершении сезона баллы, заработанные в мини-играх, сбрасываются,
          предоставляя всем участникам равные возможности в новом сезоне. Однако
          баллы, заработанные в глобальных турнирах, сохраняются и помогают вам
          поднимать свою позицию в рейтинге.
        </p>
        <p className={cls.subtitle}>
          Сезон будет длиться один месяц, что создает дополнительное напряжение
          и волнение для игроков, так как каждый месяц будет возможность
          побороться за звание лидера и выиграть награду.
        </p>
      </div>
      <div className={cls.con}>
        <p className={cls.title}>Как зарабатывать баллы: </p>

        <p className={cls.item}>За 1-е место в мини-игре: 4 балла</p>
        <p className={cls.item}>За 2-е место в мини-игре: 3 балла</p>
        <p className={cls.item}>За 3-е место в мини-игре: 2 балл</p>
        <p className={cls.item}>За 4-е место в мини-игре: 1 баллов</p>
        <p className={cls.item}>За 1-е место в глобальном турнире: 9 баллов</p>
        <p className={cls.item}>За 2-е место в глобальном турнире: 7 балла</p>
        <p className={cls.item}>За 3-е место в глобальном турнире: 5 балла</p>
        <p className={cls.item}>За 4-е место в глобальном турнире: 3 балл</p>

        <p className={cls.subtitle}>Приятной игры и удачи в соревнованиях!</p>
      </div>
    </div>
  );
}

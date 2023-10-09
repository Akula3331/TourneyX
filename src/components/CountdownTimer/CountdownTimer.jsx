import React, { useEffect, useState } from "react";
import cls from "./CountdownTimer.module.scss";

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;
      if (difference <= 0) {
        setShowText(true)
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };
    const formatNumber = (number) => {
        return number.toString().padStart(2, "0"); // Добавляем ведущий ноль при необходимости
      };
    const updateTimer = () => {
        const timeLeft = calculateTimeLeft();
        setTimeLeft({
          days: formatNumber(timeLeft.days),
          hours: formatNumber(timeLeft.hours),
          minutes: formatNumber(timeLeft.minutes),
          seconds: formatNumber(timeLeft.seconds),
        });
      };

    const timerInterval = setInterval(updateTimer, 1000);

    // Очистка интервала таймера при размонтировании компонента
    return () => {
      clearInterval(timerInterval);
    };
  }, [targetDate]);

  return (
    <div>
      <div className={cls.con}>
        {showText ? (
          <p>JKDSNFKJNDJKFNK</p>
        ) : (
          <div>
          <span className={cls.txt}>{timeLeft.days}</span>:
          <span className={cls.txt}>{timeLeft.hours}</span>:
          <span className={cls.txt}>{timeLeft.minutes}</span>:
          <span className={cls.txt}>{timeLeft.seconds}</span>
          </div>
        )}
      
      </div>
    </div>
  );
}

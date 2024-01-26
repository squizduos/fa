import React, { useState, useEffect, useRef } from 'react';

import './App.css';


const NewsItem = ({ article, isActive, onClick }) => {

  return (
  <div className={`border news-item ${isActive ? 'active' : ''}`} onClick={onClick}>
    <h3>{article.title}</h3>
    {isActive && <img
      src={article.image}
      className="news-image"
    />}
    {isActive && <p>{article.content}</p>}
  </div>
  );
}

const NewsSlider = ({ articles }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const mainRef = useRef(null);

  const handleNewsClick = (index) => {
    setActiveIndex(index);
    mainRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  return (
    <div className="news-slider" ref={mainRef}>
      {articles.map((article, index) => (
        <NewsItem
          key={article.id}
          article={article}
          isActive={index === activeIndex}
          onClick={() => handleNewsClick(index)}
        />
      ))}
    </div>
  );
};

const RestTimer = ({ pomodoroPeriod }) => {
  const [seconds, setSeconds] = useState(pomodoroPeriod);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    
    if (seconds === 0) {
      alert("Перерыв!");
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [seconds]);

  return (
    <div>
      <p>Время до перерыва по технике Pomodoro: {~~(seconds / 60)}:{seconds % 60}</p>
    </div>
  );
};

let App = function BootstrapDemo() {  

  const dummyArticles = [
    { 
      id: 1, 
      title: 'Важные аспекты Unicode, о которых должен знать каждый разработчик JavaScript', 
      image: 'https://habrastorage.org/webt/ma/po/lv/mapolvqq4uunxfqoaviv3g9km9y.jpeg',
      content: 'Должен признаться: на протяжении очень долгого времени я испытывал страх перед Unicode. Когда была необходимость в работе с Unicode, я предпочитал искать альтернативные пути решения, поскольку не совсем понимал, что делаю...' },
    { 
      id: 2, 
      title: 'Personal (jesus) стенд — решаем проблему тестовых контуров в компании',
      image: 'https://habrastorage.org/r/w780/getpro/habr/upload_files/228/bbd/03f/228bbd03f9ab806ad55eee8f214090c1.jpg',
      content: 'Всем привет, меня зовут Захаров Антон, и я DevOps-инженер в компании Bimeister! Весь свой опыт  я получил в этой компании, за 5 лет прошел путь от эникея до того, кем я работаю сейчас (большое спасибо коллегам!). Я расскажу, как на базе своих серверов и внутренних ресурсов мы создаем персональные стенды для разработки и тестирования нашего приложения..' },
    { 
      id: 3, 
      title: 'Суперсемейка против Unicode: Эластика и ее противник гибкий UTF-8', 
      image: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/9b8/db9/91f/9b8db991fdc2a4ea5ac90b08c2552b94.png',
      content: 'Кодировка символов – это про то, как символы которыми мы пишем наши сообщения выглядят в двоичном коде...' 
    }
  ];

  return (
    <div>
        <header>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center text-center pb-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center text-center link-body-emphasis text-decoration-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={32}
                    className="me-2"
                    viewBox="0 0 118 94"
                    role="img"
                    >
                    <title>Bootstrap</title>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                        fill="currentColor"
                    />
                </svg>
                <span className="fs-4">СМИ для программистов</span>
            </a>
        </div>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center text-center pb-3 mb-4 border-bottom">
        <RestTimer pomodoroPeriod={1500} />
        </div>
        </header>

        <div className="row g-5">
          <div className="col-md-12">
            <h2 className="text-body-emphasis">Свежие новости</h2>
            <br/>
            <NewsSlider articles={dummyArticles} />
          </div>
        </div>


    </div>
  );
};

export default App;

import React, { useState, useRef } from 'react';

const Question = ({ question, onAnswer }) => {
  return (
    <div>
      <h3>{question.text}</h3>
      <ul>
      {question.options.map((option, index) => (
        <li><button key={index} onClick={() => onAnswer(option.isCorrect)}>
          {option.text}
        </button></li>
      ))}
      </ul>
    </div>
  );
};

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [score, setScore] = useState(0);
  const question = questions[currentQuestionIndex];

  const [studentName, setStudentName] = useState("Аноним");

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      alert(`${studentName}! Тест завершен, у вас : ${score + (isCorrect ? 1 : 0)} правильных ответов`);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  const nameInput = useRef(null);
  const startTest = (e) => {
    setCurrentQuestionIndex(0);
    setStudentName(nameInput.current.value);
  }

  return (
    <div>
      <div>
        <input type="text" ref={nameInput} defaultValue={studentName}  disabled={(currentQuestionIndex >= 0) }></input>
        <button disabled={(currentQuestionIndex >= 0) } onClick={(e) => startTest(e)}>Начать тест</button>
      </div>
      {(currentQuestionIndex >= 0) && 
        <div>
          <div>Вопрос {currentQuestionIndex + 1} из {questions.length}</div>
          <Question question={question} onAnswer={handleAnswer} />
          <div>Правильных ответов: {score}</div>
        </div>
      }
    </div>
  );
};

const sampleQuestions = [
  {
    text: "Сколько родительских HTML тегов может быть выведено в React JS компоненте?",
    options: [
      { text: "Не более 10", isCorrect: false },
      { text: "Всегда 1", isCorrect: true },
      { text: "Не более 3", isCorrect: false },
      { text: "Не более 5", isCorrect: false },
      { text: "Неограниченное количество", isCorrect: false },
    ],
  },
  {
    text: "Как много компонентов может быть на сайте?",
    options: [
      { text: "Не более 100", isCorrect: false },
      { text: "Не более 50", isCorrect: false },
      { text: "Не более 300", isCorrect: false },
      { text: "Не более 10", isCorrect: false },
      { text: "Неограниченное количество", isCorrect: true },
    ],
  },
  {
    text: "Куда можно встроить готовый код из метода render()?",
    options: [
      { text: "Только в тег, у которого есть id", isCorrect: false },
      { text: "В div или же в span", isCorrect: false },
      { text: "В любой тег", isCorrect: true },
      { text: "Только в div", isCorrect: false },
    ],
  },
  {
    text: "Чем свойства отличаются от состояний?",
    options: [
      { text: "Свойства можно изменять, состояния нельзя", isCorrect: false },
      { text: "Свойства для работы со значениями, состояния для работы с функциями", isCorrect: false },
      { text: "Состояния для работы со значениями, свойства для работы с функциями", isCorrect: false },
      { text: "Состояния можно изменять, свойства нельзя", isCorrect: true },
    ],
  },
  {
    text: "Какая компания разработала React JS?",
    options: [
      { text: "Twitter", isCorrect: false },
      { text: "GitHub", isCorrect: false },
      { text: "Google", isCorrect: false },
      { text: "Amazon", isCorrect: false },
      { text: "Facebook", isCorrect: true },
    ],
  },
];

let App = function BootstrapDemo() {  

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
                    <title>Тест по React</title>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                        fill="currentColor"
                    />
                </svg>
                <span className="fs-4">Тест по React</span>
            </a>
        </div>
        </header>

        <div className="row g-5">
          <div className="col-md-10">
           <Quiz questions={sampleQuestions} />
          </div>
        </div>


    </div>
  );
};

export default App;
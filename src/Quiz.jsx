import React, { useState, useEffect } from 'react';
import questionsData from './questions.json';
import './Quiz.css'; // Import your CSS file for styling

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  const handleOptionSelect = (option, index) => {
    setSelectedOptions({
      ...selectedOptions,
      [index]: option,
    });
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h1 className="quiz-heading">Quiz Questions</h1>
        <div className="question-cards-container">
          {questions.map((question, index) => (
            <div key={index} className="question-card">
              <h2 className="question">{question.question}</h2>
              <div className="options-container">
                {question.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    onClick={() => handleOptionSelect(option, index)}
                    className={`option-button ${
                      selectedOptions[index] === option && option === question.answer ? 'correct' : ''
                    } ${
                      selectedOptions[index] === option && option !== question.answer ? 'incorrect' : ''
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        {currentQuestionIndex === questions.length && (
          <div className="quiz-completed">
            <p>Quiz Completed!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;

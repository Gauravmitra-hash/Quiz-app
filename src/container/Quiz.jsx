import React, { useState } from "react";
import QuizData from "../utils/data";
import QuizResult from "../components/QuizResult";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();

    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };
  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
  };

  return (
    <div className="quiz-card">
      <div className="quiz-question-counter">{currentQuestion + 1}/10</div>
      <div className="container">
        {showResult ? (
          <QuizResult
            score={score}
            totalScore={QuizData.length}
            tryAgain={resetAll}
          />
        ) : (
          <>
            <div className="quiz-question">
              {QuizData[currentQuestion].question}
            </div>
            <div className="quiz-option">
              {QuizData[currentQuestion].options.map((option, i) => {
                return (
                  <button
                    className={`option ${
                      clickedOption === i + 1 ? "Checked" : null
                    }`}
                    key={i}
                    onClick={() => setClickedOption(i + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <div className="quiz-nav-btn">
              <button
                type="button"
                value="skip"
                className="quiz-prev"
                onClick={changeQuestion}
              >
                Skip
              </button>

              <button
                type="button"
                value="Next"
                className="quiz-next"
                onClick={changeQuestion}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;

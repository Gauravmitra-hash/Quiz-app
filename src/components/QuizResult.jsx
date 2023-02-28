import React from "react";

const local = () => {};
function QuizResult(props) {
  return (
    <div className="quiz-card">
      <div className="score-card-text">
        <p>
          Total score :{" "}
          <span style={{ fontWeight: "bold" }}>{props.totalScore}</span>
        </p>
        <p>
          Your score : <span style={{ fontWeight: "bold" }}>{props.score}</span>
        </p>
      </div>
      <button className="quiz-card-try-again" onClick={props.tryAgain}>
        Try Again
      </button>
    </div>
  );
}

export default QuizResult;

import "./_first.scss";
import React, { useState } from "react";
import questions from "../../assets/data/data";
import { Link } from "react-router-dom";

const Firstgame = () => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameisover, setGameisOver] = useState(false);

  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 10);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      setGameisOver(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  let arr = [];
  if (localStorage.getItem("scores")) {
    arr = JSON.parse(localStorage.getItem("scores"));
  }

  if (score > 0 && gameisover === true) {
    arr.push(score);
  }

  localStorage.setItem("scores", JSON.stringify(arr));

  return (
    <div className="firstgame">
      <h2 className="comic">Score {score}</h2>
      <span className="comic">Level 1</span>
      {showResults ? (
        <div className="final-result">
          <h3 className="comic">Final Score is {score}</h3>
          <button className="restartBtn comic" onClick={restartGame}>
            RESTART
          </button>

          <Link to="/scores">  <button className="scores-btn comic">
            SEE SCORES
          </button></Link>

        </div>
      ) : (
        <div className="question-card comic">
          <span>
            Question: {currentQuestion + 1} out of {questions.length}
          </span>

          <span className="question-text">{questions[currentQuestion].text}</span>

          <img
            className="candy-icon"
            src={questions[currentQuestion].image}
            alt="donuts"
          />

          {questions[currentQuestion].options.map((option, index) => {
            return (
              <div key={option.id} className="btn-container comic">
                <button
                  className={"btn" + index + 1}
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Firstgame;

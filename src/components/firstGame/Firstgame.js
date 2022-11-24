import "./_first.scss";
import React, { useState } from "react";
import questions from "../../assets/data/data";

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
      // console.log(score)
      // if (score > 0) {
      //   scorearr.push(score)
      // }
      // console.log(scorearr)
      // localStorage.setItem('scores', JSON.stringify(scorearr))
    }
    // if (localStorage.getItem('score')) {

    //   scorearr = JSON.parse(localStorage.getItem('score'))
    // }
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

  console.log(arr);

  return (
    <div className="firstgame">
      <h2 className="comic">Score {score}</h2>

      {showResults ? (
        <div className="final-result">
          <h3 className="comic">Final Score is {score}</h3>
          <button className="comic" onClick={restartGame}>
            RESTART
          </button>
        </div>
      ) : (
        <div className="question-card comic">
          <h4>
            Question: {currentQuestion + 1} out of {questions.length}
          </h4>

          <p className="question-text">{questions[currentQuestion].text}</p>

          <img
            className="candy-icon"
            src={questions[currentQuestion].image}
            alt="donuts"
          />

          {questions[currentQuestion].options.map((option, index) => {
            return (
              <span key={option.id} className="btn-container comic">
                <button
                  className={"btn" + index + 1}
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </button>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Firstgame;

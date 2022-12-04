import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
let operators = ["+", "/", "*", "-"];
const randomOperation = operators[Math.floor(Math.random() * operators.length)];

const SecondGame = () => {
  const [firstNum, setFirst] = useState(Math.floor(Math.random() * 20));
  const [secondNum, setSecond] = useState(Math.floor(Math.random() * 10));
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  const [result, setResult] = useState("");
  const [answer, setAnswer] = useState("");
  const [numberStr, setNumertoString] = useState("");
  const [gameOver, setGameover] = useState(false);

  const [click, setClick] = useState(0);
  useEffect(() => {
    randomOperation === "+"
      ? setResult(firstNum + secondNum)
      : randomOperation === "-"
      ? setResult(firstNum - secondNum)
      : randomOperation === "/"
      ? setResult(firstNum / secondNum)
      : setResult(firstNum * secondNum);
  }, [firstNum, secondNum]);

  const handleChange = (e) => {
    setAnswer(e.target.value);
    setNumertoString(result.toString());
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!answer) {
      return;
    }
    setAnswer(answer);
    setClick(click + 1);

    if (click >= 5) {
      setGameover(true);
    }

    if (answer === numberStr) {
      setFeedback("You got it! 😊");
      setScore(score + 15);
    } else {
      setFeedback("Oops That does not look right 😔");
    }

    setFirst(Math.floor(Math.random() * 20));
    setSecond(Math.floor(Math.random() * 10));
  };

  const handleKey = (e) => {
    if (e.key === "Backspace") {
      setFeedback("");
    }
  };
  let arr = [];
  if (localStorage.getItem("scores")) {
    arr = JSON.parse(localStorage.getItem("scores"));
  }

  if (score > 0 && gameOver === true) {
    arr.push(score);
  }

  localStorage.setItem("scores", JSON.stringify(arr));
  return gameOver ? (
    <section className="result-container">
      <div className="result-card roundedCorner">
        <h2 className="comic">Your final Score is {score}</h2>
        <div className="btn-container">
          <Link to="/scores">
            <button className="comic btn-general"> SEE SCORES</button>
          </Link>

          <button
            onClick={() => {
              setGameover(false);
            }}
            className="comic btn-general"
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    </section>
  ) : (
    <section className="outer-container">
      <h2 className="comic">Score {score}</h2>
      <p className="feedback comic">{feedback && feedback}</p>

      <form
        className={`second-game-form roundedCorner ${
          feedback === "You got it! 😊"
            ? "correct"
            : feedback === "Oops That does not look right 😔"
            ? "incorrect"
            : ""
        }`}
      >
        <p className="comic number firstNumber">{firstNum}</p>
        <h1 className="operator">{randomOperation}</h1>
        <p className="comic number secondNumber">{secondNum}</p>
        <input
          onKeyDown={handleKey}
          type="number"
          onChange={handleChange}
          value={answer}
        />

        <button onClick={HandleSubmit} className="comic btn-general">
          SEND
        </button>
      </form>
    </section>
  );
};

export default SecondGame;

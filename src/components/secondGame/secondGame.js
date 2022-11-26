import React, { useState, useEffect } from "react";

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
  const [gameOver, setGameover] = useState(true);

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
    setAnswer(answer);
    setClick(click + 1);

    if (click >= 2) {
      setGameover(true);
    }

    if (answer === numberStr) {
      setFeedback("You got it! 😊");
      setScore(score + 15);
    } else {
      setFeedback("Oops That does not look right 😔");
    }
    setAnswer("");
    setFirst(Math.floor(Math.random() * 20));
    setSecond(Math.floor(Math.random() * 10));
  };

  return gameOver ? (
    <section className="result-container">
      <div className="result-card roundedCorner">
        <h2>Your final Score is {score}</h2>
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
        <input type="number" onChange={handleChange} value={answer} />

        <button onClick={HandleSubmit} className="comic btn-general">
          SEND
        </button>
      </form>
    </section>
  );
};

export default SecondGame;

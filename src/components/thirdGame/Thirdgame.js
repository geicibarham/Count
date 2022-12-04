import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ginger from "../../assets/images/gingerbread-man.png";

const Third = () => {
  const numbers = [9, 16, 25, 81, 49, 36, 64, 100];
  const [randomNumber, setRandom] = useState(
    numbers[Math.floor(Math.random() * numbers.length)]
  );
  const [data, setData] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const answer = useRef();

  useEffect(() => {
    axios
      .get(`http://api.mathjs.org/v4/?expr=sqrt(${randomNumber})`)
      .then((res) => {
        setData(res.data.toString());
      });
  }, [randomNumber]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    const enteredAnswer = answer.current?.value;
    setRandom(numbers[Math.floor(Math.random() * numbers.length)]);
    if (data === enteredAnswer) {
      setFeedback("You got it! 😊");
      setScore(score + 20);
    } else {
      setFeedback("Oops That does not look right 😔");
    }
  };

  const handleKey = (e) => {
    if (e.key === "Backspace") {
      setFeedback("");
    }
  };
  return (
    <section className="outer_container">
      <h2 className="comic score">Score:{score}</h2>

      <form
        className={`form comic score ${
          feedback === "You got it! 😊"
            ? "correct"
            : feedback === "Oops That does not look right 😔"
            ? "incorrect"
            : ""
        }`}
      >
        <h2>√{randomNumber}</h2>
        <input onKeyDown={handleKey} ref={answer} type="number" />
        <button onClick={HandleSubmit} className="comic btn-general">
          SEND
        </button>
        <span>{feedback}</span>
      </form>

      <img src={ginger} alt="gingerbread icon" />
    </section>
  );
};

export default Third;

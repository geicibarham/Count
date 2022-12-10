import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ginger from "../../assets/images/gingerbread-man.png";
import { Link } from "react-router-dom";
const Third = () => {
  const numbers = [9, 16, 25, 81, 49, 36, 64, 100];
  const [randomNumber, setRandom] = useState(
    numbers[Math.floor(Math.random() * numbers.length)]
  );
  const [data, setData] = useState(0);
  const [score, setScore] = useState(20);
  const [feedback, setFeedback] = useState("");
  const answer = useRef();
  const [gameisover, setGameisOver] = useState(false);
  const [click, setClick] = useState(1);
  useEffect(() => {
    axios
      .get(`https://api.mathjs.org/v4/?expr=sqrt(${randomNumber})`)
      .then((res) => {
        setData(res.data.toString());
      });
  }, [randomNumber]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    const enteredAnswer = answer.current?.value;

    setClick(click + 1);
    if (click > 7) {
      setGameisOver(true);
    }
    if (data === enteredAnswer) {
      setFeedback("You got it! 😊");
      setScore(score + 20);
    } else {
      setFeedback("Oops That does not look right 😔");
    }

    handleSave();
  };

  const handleKey = (e) => {
    if (e.key === "Backspace") {
      setFeedback("");
      setRandom(numbers[Math.floor(Math.random() * numbers.length)]);
    }
  };

  const handleSave = () => {
    let arr = [];
    if (localStorage.getItem("scores")) {
      arr = JSON.parse(localStorage.getItem("scores"));
    }

    if (score > 0 && click > 7) {
      arr.push(score);
    }

    localStorage.setItem("scores", JSON.stringify(arr));
  };
  return !gameisover ? (
    <section className="outer_container">
      <h2 className="comic score">Score:{score}</h2>
      <span className="comic">Level 3</span>
      <span>{feedback}</span>
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

        <input
          className="answer"
          onKeyDown={handleKey}
          ref={answer}
          type="number"
        />

        <button onClick={HandleSubmit} className="comic btn-general">
          SEND
        </button>
      </form>

      <img width="300px" height="300px" src={ginger} alt="gingerbread icon" />
    </section>
  ) : (
    <section className="results">
      <div className="ResultsCard">
        <p className="comic">Your Final Score is {score}</p>
        <div className="btn-container">
          <Link className="linkbtn" to="/scores">
            <button className="comic btn-general">SEE SCORES</button>
          </Link>

          <button
            onClick={() => {
              setGameisOver(false);
            }}
            className="comic btn-general"
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    </section>
  );
};

export default Third;

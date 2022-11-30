import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ginger from '../../assets/images/gingerbread-man.png'
const numbers = [9, 16, 25, 81, 49, 36, 64, 100];
const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
const Third = () => {
  const [data, setData] = useState(0);
  const [score, setScore] = useState(0);
  const [iscorrect,setIscorrect] = useState(false)
  const answer = useRef();
  

  useEffect(() => {
    axios
      .get(`http://api.mathjs.org/v4/?expr=sqrt(${randomNumber})`)
      .then((res) => {
        setData(res.data.toString());
      });
  }, []);

  const HandleSubmit = (e) => {
    e.preventDefault();
    const enteredAnswer = answer.current?.value;
    if (data === enteredAnswer) {
      console.log("correct");
      setScore(score + 20);
    } else {
      console.log("wrong");
    }
  };

  console.log(typeof data);
  return (
    <section className="outer_container">
      <h2 className="comic score">Score:{score}</h2>
      <form className="form">
        <h2>√{randomNumber}</h2>
        <input ref={answer} type="number" />
        <button onClick={HandleSubmit} className="comic btn-general">
          SEND
        </button>
      </form>

      <img src={ginger} alt="gingerbread icon" />
    </section>
  );
};

export default Third;

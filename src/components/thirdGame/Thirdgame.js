import React, { useState, useEffect } from "react";
import axios from "axios";
const numbers = [9, 16, 25, 81, 49, 36, 64, 100];
const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
const Third = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    axios
      .get(`http://api.mathjs.org/v4/?expr=sqrt(${randomNumber})`)
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return(
    <section className="outer_container">

        <form className="form">
            <h2>√{randomNumber}</h2>
            <input type="number" />
            <button className="comic btn-general">SEND</button>

        </form>

    </section>)
};

export default Third;

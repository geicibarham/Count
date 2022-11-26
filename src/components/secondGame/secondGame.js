import React, { useState, useEffect } from "react";

let operators = ["+"];
const randomOperation = operators[Math.floor(Math.random() * operators.length)];


const SecondGame = () => {
  const [firstNum, setFirst] = useState(Math.floor(Math.random() * 20));
  const [secondNum, setSecond] = useState(Math.floor(Math.random() * 10));
  const [feedback, setFeedback] = useState("");

  const [result, setResult] = useState("");
  const [answer, setAnswer] = useState("");
  const [test,setTest] = useState("")


  useEffect(() => {
    if (randomOperation === "+") {
      setResult(firstNum + secondNum)
    
    }
    // else if (randomOperation === "*") {
    //   setResult(firstNum * secondNum);
    // } else if (randomOperation === "-") {
    //   setResult(firstNum - secondNum);
    // } else {
    //   setResult(firstNum / secondNum);
    // }
  }, [firstNum, secondNum]);

  const handleChange = (e) => {
    
    setAnswer(e.target.value);
    setTest(result.toString())
  };
  const HandleSubmit = (e) => {
    setAnswer(answer);
    e.preventDefault();

    if (answer === test) {
      setFeedback("correct");
    } else {
      setFeedback("wrong");
    }
  };

console.log(result)
console.log(typeof result)
console.log(answer)
console.log(typeof answer)
console.log(feedback)

console.log(test)
console.log(typeof test)



  return (
    <section className="outer-container">
      <div>
  
        <form className="second-game-form roundedCorner">
          <p className="comic number firstNumber">{firstNum}</p>
          <h1 className="operator">{randomOperation}</h1>
          <p className="comic number secondNumber">{secondNum}</p>
          <input
            type="number"
            onChange={handleChange}
            value={answer}
          
          />
          <div>
            <button onClick={HandleSubmit} className="comic btn-general">
              SEND
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SecondGame;

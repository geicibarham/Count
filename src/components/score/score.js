import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./_score.scss";
import rewards from "../../assets/images/rewards.png";
const Score = () => {
  const [scoreArr, setScorearr] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("scores")) {
      setScorearr(JSON.parse(localStorage.getItem("scores")));
    }
  }, []);
  if (scoreArr.length === 0) {
    return (
      <div className="outer-container-score">
        <h2 className="comic">No Scores at this time!</h2>
        <Link to="/">
          <button className="play-btn comic">START PLAYING</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="outer-container-score">
      <h2 className="comic">Scores</h2>
      {scoreArr.map((score, index) => (
        <div className="score-card">
          <p className="comic" key={index.toString()}>
            {score}
            <img
              width="50px"
              className="icon"
              src={rewards}
              alt="rewards icon"
            />
          </p>
        </div>
      ))}
    </div>
  );
};

export default Score;

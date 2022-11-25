import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./_score.scss";
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
                <Link to="/landing">
                <button className="comic">START PLAYING</button>
                </Link>
            </div>
        )
    }

    return (
        <div className="outer-container-score">


            <h2 className="comic">Scores</h2>
            {scoreArr.map((score, index) => (
                <div className="score-card">
                    <p className="comic" key={index.toString()}>
                        {score}
                    </p>
                </div>
            ))}




        </div>
    );
};

export default Score;

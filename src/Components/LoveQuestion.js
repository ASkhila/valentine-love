import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoveQuestion.css";

export default function LoveQuestion() {
  const navigate = useNavigate();

  const [noPosition, setNoPosition] = useState({ x: 200, y: 200 });
  
  const [showNo, setShowNo] = useState(true);

  const moveNoButton = () => {


    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);
    setNoPosition({ x, y });
  };

  return (
    <div className="mainContainer">
      <div className="card">
        <h1>I LOVE YOU ❤️</h1>
        <p>Will you accept my love?</p>

        <button className="yesBtn" onClick={() => navigate("/love-accepted")}>
          YES 💖
        </button>

        {showNo && (
          <button
            className="noBtn"
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            style={{
              left: noPosition.x,
              top: noPosition.y,
            }}
          >
            NO 💔   
          </button>
        )}
      </div>
    </div>
  );
}

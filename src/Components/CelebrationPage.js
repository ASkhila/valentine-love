import React, { useEffect } from "react";
import "../styles/CelebrationPage.css";
import loveMusic from "../assets/02 - Oura Ammaka Chella - SenSongsMp3.co.mp3";

export default function CelebrationPage() {
  const hearts = new Array(20).fill("❤️");

  useEffect(() => {
    const audio = new Audio(loveMusic);
    audio.loop = true;
    audio.volume = 0.4; // soft romantic sound
    audio.play().catch(() => {});
  }, []);

  return (
    <div className="celebrationContainer">
      <div className="overlayContent">
        <h1>Thank You For Accepting My Love ❤️</h1>
        <p>Ela undhenti</p>
      </div>

      {hearts.map((heart, i) => (
        <div
          key={i}
          className="hearts"
          style={{
            left: Math.random() * 100 + "%",
            animationDelay: Math.random() * 5 + "s",
          }}
        >
          {heart}
        </div>
      ))}
    </div>
  );
}

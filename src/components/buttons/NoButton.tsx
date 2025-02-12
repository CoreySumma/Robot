import {useState } from "react";
import "./button.scss";

export default function NoButton() {
  const [buttonPosition, setButtonPosition] = useState({
    left: "30%",
    bottom: "10%",
  });

  function snapToNewPosition() {
    const randomX = Math.floor(Math.random() * window.innerWidth * .8);
    const randomY = Math.floor(Math.random() * window.innerHeight * .8);
    setButtonPosition({ left: `${randomX}px`, bottom: `${randomY}px` });
  }

  return (
    <button
      className="no_button"
      style={buttonPosition}
      onMouseEnter={snapToNewPosition}
    >
      No
    </button>
  );
}

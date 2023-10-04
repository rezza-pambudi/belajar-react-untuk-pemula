import React from "react";

const MyButton = ({ text, onClick }) => {
  const myStyle = text !== "Reset!" ? {} : { margin: 20, display: "block" };

  return (
    <button onClick={onClick} style={myStyle}>
      {text}
    </button>
  );
};

export default MyButton;

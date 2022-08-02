import React, { useState, useEffect } from "react";
import CompObject from "../Computer/Computer";
import classes from "../Home/Home.module.css";

const WinnerCheck = (props) => {
  const [winner, setWinner] = useState("");
  useEffect(() => {
    if (CompObject.name === "rock") {
      if (props.userValue === "paper") {
        setWinner("USER");
      } else if (props.userValue === "scissors") {
        setWinner("COMPUTER");
      } else {
        setWinner("DRAW");
      }
    } else if (CompObject.name === "paper") {
      if (props.userValue === "rock") {
        setWinner("COMPUTER");
      } else if (props.userValue === "scissors") {
        setWinner("USER");
      } else {
        setWinner("DRAW");
      }
    } else {
      if (props.userValue === "rock") {
        setWinner("USER");
      } else if (props.userValue === "paper") {
        setWinner("COMPUTER");
      } else {
        setWinner("DRAW");
      }
    }
  }, []);
  console.log(winner);

  return (
    <h2 className={classes.header}>
      {winner === "USER" && `${winner} is winner with his ultimate brain!🥇`}
      {winner === "COMPUTER" &&
        `${winner} is winner with his ultimate brain!🥇`}
      {winner === "DRAW" && "SO SAD DRAW 🥲!"}
    </h2>
  );
};

export default WinnerCheck;

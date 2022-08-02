import React, { Fragment, useState, useEffect } from "react";
import classes from "./Home.module.css";
import WinnerCheck from "../Computer/WinnerCheck";
import CompObject from "../Computer/Computer";
import Rock from "../assets/rock.png";
import Paper from "../assets/paper.png";
import Scissors from "../assets/scissors.png";

const Home = (props) => {
  let userTemp = 0;
  switch (props.onUserValue) {
    case "rock":
      userTemp = 1;
      break;
    case "paper":
      userTemp = 2;
      break;
    case "scissors":
      userTemp = 3;
      break;
  }

  const handleInput = (user) => {
    if (user === 1) {
      return Rock;
    } else if (user === 2) {
      return Paper;
    }
    return Scissors;
  };

  return (
    <Fragment>
      <WinnerCheck userValue={props.onUserValue} />
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <img
            id={props.onUserValue}
            src={handleInput(userTemp)}
            alt={props.onUserValue}
          />
        </div>
        <div className={classes.imgContainer}>
          <img
            id={CompObject.name}
            src={handleInput(CompObject.id)}
            alt={CompObject.name}
          />
        </div>
      </div>
      <button className={classes.btn} onClick={props.onReset}>
        RESET
      </button>
    </Fragment>
  );
};

export default Home;

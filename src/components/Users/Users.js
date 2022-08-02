import React, { Fragment, useState, useEffect } from "react";
import SubUsers from "./SubUsers";
import classes from "./Users.module.css";
import Rock from "../assets/rock.png";
import Paper from "../assets/paper.png";
import Scissors from "../assets/scissors.png";

const Users = (props) => {

  const valueHandler = (e) => {
    props.onTakeValue(e.target.id);
  };

  return (
    <Fragment>
      <h2 className={classes.header}>
        WELCOME TO MY WORLD <span> ROCK PAPER SCISSORS </span> GAME
      </h2>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <img onClick={valueHandler} id="rock" src={Rock} alt="rock" />
        </div>
        <div className={classes.imgContainer}>
          <img onClick={valueHandler} id="paper" src={Paper} alt="paper" />
        </div>
        <div className={classes.imgContainer}>
          <img
            onClick={valueHandler}
            id="scissors"
            src={Scissors}
            alt="scissors"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Users;

import React from "react";

let compRandom = Math.floor(Math.random() * 3) + 1;
let compObject = { name: "", id: "" };

switch (compRandom) {
  case 1:
    compObject.name = "rock";
    compObject.id = 1;
    break;

  case 2:
    compObject.name = "paper";
    compObject.id = 2;
    break;

  case 3:
    compObject.name = "scissors";
    compObject.id = 3;
    break;
}

export default compObject;

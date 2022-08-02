import React, { useState, useEffect } from "react";
import Users from "./components/Users/Users";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  const [isValid, setIsValid] = useState(false);
  const [userInput, setUserInput] = useState("");

  // useEffect(() => {
  //   let settedLocalKey = localStorage.getItem("localKey");

  //   if (settedLocalKey === "1") {
  //     setIsValid(true);
  //     console.log("bura daxil oldu")
  //   }
  // }, []);

  const getValue = (userEnteredValue) => {
    setUserInput(userEnteredValue);
    setIsValid(true);
    //localStorage.setItem("localKey", "1");
  };

  const onReset = () => {
    //localStorage.removeItem("localKey");
    setIsValid(false);
  };

  return (
    <div className="App">
      {!isValid && <Users onTakeValue={getValue} />}
      {isValid && <Home onReset={onReset} onUserValue={userInput} />}
    </div>
  );
}

export default App;

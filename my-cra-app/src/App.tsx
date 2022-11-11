import React, { useEffect, useState } from "react";
import * as util from "date-fns";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [me, setMe] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1")
      .then((j) => j.json())
      .then((data) => {
        setMe(data.name);
        setAge(
          1900 + Number.parseInt((data.birth_year as string).substring(0, 2))
        );
      });
  }, [setMe]);

  return (
    (me && (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with {me}. <br />I am Jedi master for{" "}
            {util.getYear(util.addYears(new Date(), -age))} years!
          </a>
        </header>
      </div>
    )) ||
    null
  );
}

export default App;

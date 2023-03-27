import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let [bool, setBool] = useState(false);
  function showData() {
      setBool(true);
  }
  return (
      <div id="main">
          <button id="click" onClick={showData}>
              on click
          </button>
          {bool ? (
              <p id="para">
                  Hello, I've learnt to use the full-stack evaluation tool.
                  This makes me so happy
              </p>
          ) : (
              ""
          )}
      </div>
  );
}


export default App;

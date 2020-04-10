import React, { useState } from "react";

import socketIOClient from "socket.io-client";

import { Link, useHistory } from "react-router-dom";

import "./style.css";

export default function Spinner() {
  const [grillUp, setGrillUp] = useState(false);
  const [grillDown, setGrillDown] = useState(false);

  const history = useHistory();

  const socket = socketIOClient('http://127.0.0.1:4000');

  async function handleTurnOnGrillUp(e) {
    e.preventDefault();

    try {
      socket.on("state", data => {
        console.log(data);
      })
    } catch (error) {

    }
  }
  async function handleTurnOnGrillDown(e) {
    e.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Churrasqueira</h1>
      </header>

      <section>
        <div className="spinner">
          <h1>Espeto Giratorio</h1>
          <button className="spin-left" >Anti-horário</button>
          <button className="spin-right" >horário</button>
        </div>
        <div className="grill">
          <h1>Grelha</h1>
          <button className="grill-up">Subir</button>
          <button className="grill-down">Descer</button>
        </div>
      </section>
    </div>
  );
}

import React, { useEffect, useState, Component } from "react";

import socketIOClient from "socket.io-client";

import "./style.css";

class Spinner extends Component {
  socket = socketIOClient('http://192.168.100.101:4000');

  constructor(props) {
    super(props); this.state = { counter: 1 };
    socket.on("connection", data => console.log(data));
    socket.on("state", data => {
      setState(data)
      console.log(state);
    })
  }

  handleTurnOnLeftSpin(e) {
    e.preventDefault();
    try {
      socket.emit('onSpinnerLeft')
    } catch (error) {
      console.log(error);
    }
  }
  handleTurnOnRightSpin(e) {
    e.preventDefault();
    try {
      socket.emit('onSpinnerRight')
    } catch (error) {
      console.log(error);
    }
  }

  render() {


    return (
      <div className="App">
        <header className="App-header">
          <h1>Churrasqueira</h1>
        </header>

        <section>
          <div className="spinner">
            <h1>Espeto Giratorio</h1>
            <button className="spin-left" onClick={handleTurnOnLeftSpin} >Anti-horário</button>
            <button className="spin-right" onClick={handleTurnOnRightSpin} >horário</button>
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
}


export default Spinner

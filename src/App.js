import React, { Component } from "react";
import "./App.css";
import Messages from "./Components/MessagesComponent";
import Input from "./Components/InputComponent";
import { randomColor, randomName } from "./helperFunkcije";

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      member: {
        username: randomName(),
        color: randomColor(),
      },
    };
    this.drone = new window.Scaledrone("badCeLvDm7CQChEz", {
      data: this.state.member,
    });
    this.drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member, id: this.drone.clientId };
      this.setState({ member });
    });
    const room = this.drone.subscribe("observable-room");
    room.on("data", this.handleData);
  }

  handleData = (data, member) => {
    const messages = [...this.state.messages, { member, text: data }];
    this.setState({ messages });
  };

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Scaldrone chat aplikacija</h1>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input onSendMessage={this.onSendMessage} />
      </div>
    );
  }
}

export default App;

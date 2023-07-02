import React, { Component } from "react";

export default class Messages extends Component {
  render() {
    const { messages } = this.props;
    return (
      <ul className="lista-poruka">
        {messages.map((msg) => {
          let mojaPoruka = false;
          if (msg.member.id === this.props.currentMember.id) {
            mojaPoruka = true;
          }
          return this.renderMessage(msg, mojaPoruka);
        })}
      </ul>
    );
  }

  renderMessage(message, mojaPoruka) {
    const { member, text } = message;
    let className;
    if (mojaPoruka) {
      className = "msg currentMember";
    } else {
      className = "msg";
    }
    return (
      <li className={className} key={message.id}>
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className="sadrzaj-poruke">
          <div className="korisnik">{member.clientData.username}</div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }
}

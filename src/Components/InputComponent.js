import React, { useState } from "react";

const Input = ({ onSendMessage }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (text.trim() !== "") {
      onSendMessage(text);
      setText("");
    }
  };

  return (
    <div className="input">
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={text}
          type="text"
          placeholder="Klikni ENTER kako bi poslao poruku!"
          autoFocus={true}
        />
        <button>Pošalji</button>
      </form>
    </div>
  );
};

export default Input;

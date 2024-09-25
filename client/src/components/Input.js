import React from "react";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button className="sendButton" onClick={(e) => sendMessage(e)}>
      <img
        style={{
          width: "50px",
          height: "60px",
          marginBottom: "-5px",
          marginTop:"-20px",
          opacity: "70%",
        }}
        src="https://cdn1.iconfinder.com/data/icons/ionicons-sharp-vol-2/512/send-sharp-1024.png"
      ></img>
      <div
        style={{
          color: "black",
          marginBottom: "-20px",
          fontWeight:"500"
        }}
      >
        send
      </div>
    </button>
  </form>
);

export default Input;

import React from "react";
import "./App.css";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

export default function App() {
  const [message, setMessage] = React.useState("");
  const [chat, setChat] = React.useState<
    { nickname: string; message: string }[]
  >([]);
  const [nickname, setNickname] = React.useState("");

  React.useEffect(() => {
    socket.on(
      "chat message",
      ({ nickname, message }: { nickname: string; message: string }) => {
        setChat([...chat, { nickname, message }]);
      }
    );
  }, [chat, message]);

  const renderChat = () => {
    return chat.map(({ nickname, message }, idx) => (
      <div key={idx} className="chat-msg">
        <span style={{ color: "#5c7993" }}>{nickname}: </span>
        <span style={{ color: "#efebdf", marginLeft: "10px" }}>{message}</span>
      </div>
    ));
  };

  const onMessageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.emit("chat message", { nickname, message });
    setMessage("");
    setNickname("");
  };

  return (
    <div className="chat-wrap">
      <form className="chat-form" onSubmit={(e) => onMessageSubmit(e)}>
        <p className="input-msg">Nickname</p>
        <input
          type="text"
          onChange={(e) => setNickname(e.target.value)}
          value={nickname}
          className="chat-input"
        />
        <p className="input-msg">Input Message</p>
        <input
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="chat-input"
        />
        <button className="chat-btn">Send</button>
      </form>
      <p className="msg-output">Message Output</p>
      <div className="chat-render">{renderChat()}</div>
    </div>
  );
}

import * as React from "react";

interface ChatInputProps {
  ws: WebSocket;
  onSubmitMessage: (messageString: string) => void;
}

export default function ChatInput(props: ChatInputProps) {
  const [message, setMessage] = React.useState("");

  const onSubmitMessage = () => {
    console.log(message);
  };

  return (
    <form
      action="."
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitMessage();
        setMessage("");
      }}
    >
      <input
        type="text"
        placeholder={"Enter message..."}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input type="submit" value={"Send"} />
    </form>
  );
}

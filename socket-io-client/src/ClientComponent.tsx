import * as React from "react";
import "./App.css";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4000";

export default function ClientComponent() {
  const [response, setResponse] = React.useState("");

  React.useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", (data: string) => {
      setResponse(data);
      console.log(data);
    });
  }, []);

  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  );
}

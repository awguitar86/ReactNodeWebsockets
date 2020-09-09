import * as React from "react";
import "./App.css";
import ClientComponent from "./ClientComponent";

export default function App() {
  const [loadClient, setLoadClient] = React.useState(true);
  return (
    <>
      <button onClick={() => setLoadClient((prevState) => !prevState)}>
        STOP CLIENT
      </button>
      {loadClient ? <ClientComponent /> : null}
    </>
  );
}

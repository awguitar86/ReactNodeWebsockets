import * as React from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

const URL = "ws://localhost:5000";

interface ChatState {
  name: string;
  messages: {name: string, message: string}[];
}

export default function Chat() {
  const [chatState, setChatState] = React.useState<ChatState>({name: '', messages: []});
  const [ws, setWs] = React.useState(new WebSocket(URL));
  
  React.useEffect(() => {
    ws.onopen = () => {
      console.log("connected");
    };
    ws.onmessage = (evt) => {
      const message: {name: string; message: string;} = JSON.parse(evt.data);
      setChatState({...chatState, messages: [...chatState.messages, message]});
    };
    ws.onclose = () => {
      console.log('disconnected');
      setWs(new WebSocket(URL))
    }
  }, [chatState, ws.onmessage, ws.onopen, ws.onclose]);

  const onSubmitMessage = (messageString: string) => {
    const message = { name: chatState.name, message: messageString};
    ws.send(JSON.stringify(message));
    setChatState({...chatState, messages: [...chatState.messages, message]});
  }

  return (
    <div>
      <label htmlFor="name">
        Name&nbsp;
        <input 
          type="text"
          id={'name'}
          placeholder={'Enter your name...'}
          value={chatState.name}
          onChange={(e) => setChatState({...chatState, name: e.target.value})}
        />
      </label>
      <ChatInput 
        ws={ws}
        onSubmitMessage={onSubmitMessage}
      />
      {chatState.messages.map((message, idx) => 
        <ChatMessage 
          key={idx}
          message={message.message}
          name={message.name}
        />
      )}
    </div>
  )

}

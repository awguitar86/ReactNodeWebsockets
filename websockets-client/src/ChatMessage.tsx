import * as React from "react";

interface ChatMessageProps {
  name: string;
  message: string;
}

export default function ChatMessage(props: ChatMessageProps) {
  return (
    <p>
      <strong>{props.name}</strong> <em>{props.message}</em>
    </p>
  );
}

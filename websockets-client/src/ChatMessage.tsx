import * as React from "react";

export default function ChatMessage(name: string, message: string) {
  return (
    <p>
      <strong>{name}</strong> <em>{message}</em>
    </p>
  );
}

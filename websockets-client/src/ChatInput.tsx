import * as React from "react";
import PropTypes from "prop-types";

export default function ChatInput() {
  const [message, setMessage] = React.useState("");
  const propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  };

  return (
    <form action="">
      <input type="text" />
    </form>
  );
}

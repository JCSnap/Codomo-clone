import React from "react";
import axios from "axios";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const passToGPT = (message) => {
    async function generateResponse(prompt) {
      console.log("before get request");
      const response = await axios.get("http://localhost:3002/api", {
        params: {
          prompt: prompt,
        },
      });
      console.log("after get request");
      return response.data;
    }
    const response = generateResponse(message);
    const botMessage = createChatBotMessage(response);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            passToGPT,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;

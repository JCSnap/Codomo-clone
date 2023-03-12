import React, { useState, useEffect, useRef } from "react";
import "./Values.css";
import Carousell from "./Carousell";

function Values() {
  const blocks = [
    {
      image: "https://via.placeholder.com/150",
      title: "DESIGN THINKING",
      description:
        "Students and employees alike, critical thinking and complex problem-solving skills are crucial in helping us overcome challenges. We deliver Design Innovation workshops, facilitating participants to take the first step to creative problem-solving through design thinking.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "MAKER CULTURE",
      description:
        "We drive effective learning through gamification, social learning, mentorship and challenge-based projects. We create engaging, relevant and relatable content that resonates with participants of all ages, getting them to start building and creating.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "COMPUTATIONAL AI THINKING",
      description:
        "65% of first-graders will end up working jobs that do not exist today. We give them a headstart by equipping students and teachers with the most important job skill of the future: Computer programming.",
    },
  ];
  const [currentBlock, setCurrentBlock] = useState(0);
  const containerRef = useRef(null);

  /*useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the position of the next block
      const nextBlock = currentBlock < blocks.length - 1 ? currentBlock + 1 : 0;

      // Update the state to show the next block
      setCurrentBlock(nextBlock);

      // Calculate the position of the container to show the next block
      const container = containerRef.current;
      const blockWidth = container.offsetWidth / blocks.length;
      const newPosition = blockWidth * nextBlock;
      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }, 10000);
  });*/
  return (
    <div className="values-container">
      test
    </div>
  );
}

export default Values;

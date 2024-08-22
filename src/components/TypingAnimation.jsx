import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const message = "Hii! It's nice to meet you!";
  const typingSpeed = 100; // Adjust this for typing speed (ms)

  useEffect(() => {
    let index = 0;
    let typingTimeout;

    const type = () => {
      if (index < message.length) {
        setDisplayText(prev => prev + (message[index] || '')); // Ensure no undefined values are added
        index++;
        typingTimeout = setTimeout(type, typingSpeed);
      } else {
        onComplete(); // Call the onComplete function after typing is done
      }
    };
    

    type(); // Start typing effect

    return () => {
      clearTimeout(typingTimeout); // Clear the timeout if the component unmounts or re-renders
    };
  }, [onComplete]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-green-50 text-stone-900 dark:text-stone-300">
      <h1 className="text-3xl font-bold typing-text">{displayText}</h1>
        <img src="/assets/temp.gif" alt="Loading GIF" className="h-24 mb-4" />
    </div>
  );
};

export default TypingAnimation;

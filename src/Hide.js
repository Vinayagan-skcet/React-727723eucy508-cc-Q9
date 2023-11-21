// Hide.js
import React, { useState } from 'react';
import './Hide.css';

const Hide = () => {
  const [isTextVisible, setIsTextVisible] = useState(true);

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div>
      <button className="blueButton" onClick={toggleTextVisibility}>   
        {isTextVisible ? 'Hide' : 'Show'}
      </button>
      {isTextVisible && <p>Text is visible click to hide.</p>}
    </div>
  );
};

export default Hide;




import React, { useState } from 'react';

const TwoWayBindingComponent = () => {
  const [textInput, setTextInput] = useState('');

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <div>
      <label htmlFor="textareaInput">Enter Text:</label>
      <textarea
        id="textareaInput"
        value={textInput}
        onChange={handleInputChange}
      ></textarea>

      <table>
        <thead>
          <tr>
            <th>Text Display</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{textInput}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TwoWayBindingComponent;

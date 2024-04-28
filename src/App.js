/* 
1) When the button is clicked, display an alert with the text entered in the input field. 
2) Create a simple Character Counter component that allows users to type in text and displays the number of characters in real-time. 
3) Create a simple Color Switcher component that allows users to change the background color of a div by selecting a color from a dropdown list.
4) Remove Duplicates From a list
*/

import React, { useState } from 'react';
import './App.css';

function AlertOnClick() {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    alert(inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );

}
function CharacterCounter() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <textarea value={inputValue} onChange={handleInputChange} />
      <p>Character Count: {inputValue.length}</p>
    </div>
  )
}

function ColorSwitcher() {

  const [color, setColor] = useState('white');

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <div className='colorBox'
        style={{
          backgroundColor: color,
          width: '200px',
          height: '200px',
          margin: '10px',
          border: '1px solid black'
        }}
      ></div>
      <select value={color} onChange={handleColorChange}>
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="black">Black</option>
      </select>

    </div>
  );
}

function RemoveDuplicates() {
  const [inputList, setInputList] = useState('');
  const [outputList, setOutputList] = useState([]);

  const handleInputChange = (e) => {
    setInputList(e.target.value);
  };

  const removeDuplicates = () => {
    const uniqueList = [...new Set(inputList.split(','))];
    setOutputList(uniqueList);
  }

  return (
    <div>
      <input type="text" value={inputList} onChange={handleInputChange} />
      <button onClick={removeDuplicates}>Remove Duplicates</button>
      <ul>
        {outputList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function App() {
  return (
    <>
      <div className='partOne'>
        <h2>Write something in the input box and click on the button</h2>
        <AlertOnClick />
      </div>

      <div className='partTwo'>
        <h2>Type Something in the text area</h2>
        <CharacterCounter />
      </div>

      <div className='partThree'>
        <h2>Choose a color from the dropdown to change the color of the box</h2>
        <ColorSwitcher />
      </div>

      <div className='partFour'>
        <h2>Enter comma separated list and click on the button to remove duplicates</h2>
        <RemoveDuplicates />
      </div>

    </>
  )
}

export default App;
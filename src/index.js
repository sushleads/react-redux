// import the React and ReachDOM library
import React from 'react';
import ReactDOM from 'react-dom';

//Create React component
const App = () => {
  const buttonText = 'Submit';
  return (
      <div>
        <label className="label" htmlFor="name">Enter name:</label>
        <input id="name" type = "text"/>
  <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText}</button>
      </div>
  );
}

//Take the react component and show it on screen
ReactDOM.render(<App/>, document.querySelector('#root'))
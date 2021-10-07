import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     <Board></Board>
    </div>
  );
}

function Board(){
  return(
    <div className="Board">
      <Block></Block>
    </div>
  )
}

function Block (){
  return(
    <div className="Block dot">
         <Block></Block>
    </div>
  )
}



export default App;

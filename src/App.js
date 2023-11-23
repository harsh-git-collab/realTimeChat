import './App.css';
import { Auth } from './components/Auth.js'
import { Chat } from './components/Chat.js'
import Cookies from 'universal-cookie';
import React, { useState, useRef } from 'react';

const cookies = new Cookies();

function App() {
  // state to know if the user is authenticated
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null)

  const roomInputRef = useRef(null);

  if(!isAuth) {
    return (
      <Auth setIsAuth={setIsAuth} />
    );
  }

  return (
    <div>
      {room ? (
        <Chat props={room}/>
      ) : (
        <div>
          <label> Enter Room Name: </label>
          <input ref= {roomInputRef}/>
          <button onClick={() => setRoom(roomInputRef.current.value)}> Enter Chat</button>
        </div>
      )} 
    </div>
  )
}

export default App;

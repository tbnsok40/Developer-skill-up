import React from 'react';
import './App.css';
import Contacts from "./components/contacts";
function App() {
  return (
      <div className="container">
          <h1 className="subject">Phone Book</h1>
          <div>
              <Contacts/>
          </div>
      </div>
  );
}

export default App;

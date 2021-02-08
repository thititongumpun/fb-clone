import React from "react";
import "./App.css";

import Header from './components/Header/Header';
import Login from './Login';
import { useStateValue } from "./states/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();


  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
          <>
            <Header />
            
            <div className="app__body">
            {/* sidebar */}
            {/* Feed */}
            {/* widget */}
            </div>
          </>
      )}
      
    </div>
  );
}

export default App;
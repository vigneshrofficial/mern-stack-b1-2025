import './App.css';
import { useState, useEffect } from "react"

import WelcomeUser from './context/WelcomeUser';
import UserContext from './UserContext';

import Cart from "./components/Cart";


function App() {

  // useState
  const [count, setCount] = useState(0);
  const [targetAchieved, setTargetAchieved] = useState(false);
  const [user, setUser] = useState("Ramesh");

  // const increaseCount = () => {
  //   setCount(count + 1)
  // }

  // useEffect
  useEffect(() => {
    console.log("Count changing", count)
    if (count > 10) {
      setTargetAchieved(true)
    }
  }, [count]);

  const handleNameChange = () => {
    setUser("Vignesh")
  }


  return (
    <div className="App">
      <header className="App-header">
        {/* {targetAchieved && <div>Target Achieved</div>}
        {count}
        <button onClick={increaseCount}>Increase</button> */}

        <button onClick={handleNameChange}>Change name</button>

        <UserContext.Provider value={user}>
          <WelcomeUser />
          <Cart />
        </UserContext.Provider>


      </header>
    </div>
  );
}

export default App;




import './App.css';
import {useState} from "react"
import Counter from './Components/Counter';

function App() {
  
  return (
    <div className="App">
      <nav>
        <ul>
            <li><a href="*">Login</a></li>
            <li><a href="*">Menu</a></li>
        </ul>
    </nav>
      <Counter/>
    </div>
  );
}

export default App;

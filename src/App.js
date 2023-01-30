import {useState} from "react";
import './App.css';

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      
      <h1>{value}</h1>
     <input type = "text" value ={value} onChange={(evt)=> {
      setValue(evt.target.value);
     }}/>
    </div>
  );

}

export default App;

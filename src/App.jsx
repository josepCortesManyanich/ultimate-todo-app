import React, {useState} from 'react';
import './App.css';
import taskData from './list.json';

function App() {
  const [task, setTask] = useState(taskData)


  return (
    <div className="App">
      <h1>My tasks</h1>
      {task.map(elem =>  {
        return(
          <div key={elem._id}>
            <p>{elem.name}</p>
          </div>
        )
      })}
        
    </div>
  );
}

export default App;

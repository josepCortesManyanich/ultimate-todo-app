import React, {useState} from 'react';
import './App.css';
import taskData from './list.json';
import TaskCard from './components/TaskCard';
import SearchBar from './components/SearchBar';

function App() {
  const [task, setTask] = useState(taskData)

  const handleDelete = (name) => {
     const deletedTask = task.filter(elem => elem.name !== name)
      setTask(deletedTask)
    }
   
  const handleSearch = (searchedTask) => {
    if(searchedTask === ''){
      setTask(taskData)
    } else{
      const searched = task.filter(elem => elem.name.toLowerCase().includes((searchedTask).toLowerCase()))
      setTask(searched)
    }
  }

  const handleUrgency = () => {
    const ordered = [...task].sort((a,b) => a.urgency - b.urgency)
    setTask(ordered)
  }
  


  return (
    <div className="App">
      <h1>My tasks</h1>
      <button onClick={handleUrgency}>Urgency tasks</button>
      <nav> <SearchBar onSearch={handleSearch}/></nav>
      {task.map(elem =>  {
        return(
          <div key={elem._id}>
            <TaskCard onDelete={handleDelete} task={{
              name: elem.name,
              image: elem.image,
              useful_link: elem.useful_link,
              urgency: elem.urgency,
              description: elem.description,
              done: elem.done,
            }}/>
          </div>
        )
      })}
        
    </div>
  );
}

export default App;

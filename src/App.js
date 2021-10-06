import "./App.css";
import InputItem from "./Items/InputItem";
import Footer from "./Items/Footer";
import { useState } from "react";
import AllLists from "./Items/AllLists";
import { v4 as uuidv4 } from "uuid";
import * as S from "./Items/styles"

function App() {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), value: "task 1", editMode: false, done: false },
    { id: uuidv4(), value: "task 2", editMode: false, done: false },
    { id: uuidv4(), value: "task 2", editMode: false, done: false },
  ]);

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    const removedTasks = tasks.filter((element) => element.id !== id);
    setTasks(removedTasks);
  };

  const editTask = (id) => {
    const editedTask = tasks.map((element) => element.id === id)
    setTasks(editedTask)
  }

  const removeAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <div>
        <h1>TODO LIST</h1>
      </div>
      <div>
        <InputItem create={createTask} />
      </div>
      <div>
        <AllLists
          data={tasks}
          removeTask={removeTask}
          editTask={editTask}
        />
      </div>
      <div>
        <Footer removeAllTasks={removeAllTasks}/>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Footer from "./components/Dumb/Organism/Footer/Footer";
import { useState } from "react";
import List from "./components/Dumb/Organism/List/List";
import { v4 as uuidv4 } from "uuid";
import * as S from "./components/styles";
import AddInput from "./components/Dumb/Molecules/AddInput/AddInput";

function App() {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), value: "make task list", editMode: false, done: false },
    { id: uuidv4(), value: "add some functions", editMode: false, done: true },
    { id: uuidv4(), value: "make it work", editMode: false, done: false },
  ]);

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    const removedTasks = tasks.filter((element) => element.id !== id);
    setTasks(removedTasks);
  };

  const editTask = (id, value) => {
    const editedTasks = tasks.map((element) => {
      if (element.id === id) {
        element.value = value;
        element.editMode = false;
      }

      return element;
    });

    setTasks(editedTasks);
    console.log(editedTasks);
  };

  const changeEditModeTrue = (id) => {
    const changedEditModeTrue = tasks.map((element) => {
      if (element.id === id) {
        element.editMode = true;
      }

      return element;
    });

    setTasks(changedEditModeTrue);
  };

  const doneTask = (id, done) => {
    const changedDoneTasks = tasks.map((element) => {
      if (element.id === id) {
        element.done = !done;
      }
      return element;
    });
    setTasks(changedDoneTasks);
  };

  const removeAllTasks = () => {
    setTasks([]);
  };


  return (
    <S.AllWrapper>
    <S.App>
      <S.Header>
        <h1>TODO LIST</h1>
      </S.Header>


        <AddInput create={createTask} />

        <List
          data={tasks}
          removeTask={removeTask}
          editTask={editTask}
          changeEditModeTrue={changeEditModeTrue}
          doneTask={doneTask}
        />
      
        <Footer removeAllTasks={removeAllTasks} />
    
    </S.App>
    </S.AllWrapper>
  );
}

export default App;

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddInput from "../../Dumb/Molecules/AddInput/AddInput";
import List from "../../Dumb/Organism/List/List";
import Footer from "../../Dumb/Organism/Footer/Footer";
import * as S from "./styles";

function ToDo() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      value: "try to add something",
      editMode: false,
      done: false,
    },
    { id: uuidv4(), value: "try to delete it", editMode: false, done: true },
    { id: uuidv4(), value: "try to edit it", editMode: false, done: false },
    {
      id: uuidv4(),
      value: "try to clear it all",
      editMode: false,
      done: false,
    },
  ]);

  const createTask = (value) => {
    setTasks([
      ...tasks,
      { id: uuidv4(), value: value, editMode: false, done: false },
    ]);
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

        <AddInput
        addNewTask={createTask} />

        <List
          data={tasks}
          removeTask={removeTask}
          editTask={editTask}
          changeEditModeTrue={changeEditModeTrue}
          doneTask={doneTask}
        />

        <Footer data={tasks} removeAllTasks={removeAllTasks} />
      </S.App>
    </S.AllWrapper>
  );
}

export default ToDo;

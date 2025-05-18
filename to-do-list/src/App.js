import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { use } from "react";
import { nanoid } from "nanoid"; 

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task)=> task.completed
}
const FILTER_NAMES = Object.keys(FILTER_MAP) //действует по принципу for in, то есть перечисляет все ключи своего объекта

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filters, setFilter] = useState("All");
  function toggleTaskCompleted(id){
    const updateTasks = tasks.map((task)=>{
      if (id === task.id){
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updateTasks);
  }
  function deleteTask(id){
    const delTask = tasks.filter((task)=> id !== task.id); //в новый массив попадают все элементы, что по id не соответствуют удаляемому элементу
    setTasks(delTask);
  }
  function editTask(id, newName){
    const editTaskList = tasks.map((task)=>{
      if (id === task.id){
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editTaskList)
  }
  const taskList = tasks.filter(FILTER_MAP[filters]).map((task)=>(<Todo id={task.id} name={task.name} completed={task.completed} key={task.id} toggleTaskCompleted={toggleTaskCompleted} deleteTask={deleteTask} editTask={editTask}/>)) // функция передается в todo, где есть проверка события
  const filterList = FILTER_NAMES.map((name) =>(<FilterButton key={name} name={name} isPressed={name === filters } setFilter={setFilter}/>))
  const headingText = `Осталось задач: ${taskList.length}`;//по какой-то причине обновляется элемент при изменении const
  function addTask(name){
    const newTask = {id:`todo-${nanoid()}`,name, completed:false};//nanoid генератор id
    setTasks([...tasks, newTask]);
  }
 
  return (
    <div className="todoapp stack-large">
      <h1>Список задач</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
      {filterList}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
       {taskList}

      </ul>
    </div>
  );
  /* <Todo name="Поесть" completed={true} id="todo-0"/>
       <Todo name="Поспать" completed={false} id="todo-1"/>
       <Todo name="Повторить" completed={false} id="todo-2"/>*/
}
export default App

/*<button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Просмотреть </span>
          <span>активные</span>
          <span className="visually-hidden"> задачи</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Просмотреть </span>
          <span>завершенные</span>
          <span className="visually-hidden"> задачи</span>
        </button>*/
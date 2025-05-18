import React, { useState } from "react";
import { use } from "react";

function Form(props){
    const [name, setName] = useState('');
    function handleChange(elem){
        setName(elem.target.value)
    }
    function handleSubmit(elem){
        elem.preventDefault();
        props.addTask(name);
        setName(" ");
        /*target - фоакусировка на том что пишет пользователь*/
    }
    return(
        <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            Что необходимо сделать?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Добавить задачу
        </button>
      </form>
    )
}

export default Form
import React, { useState } from "react";
import ReactDOM from 'react-dom/client';

function Todo(props){
    const [isEditing, setEditing] = useState(false)
    const [newName, setNewName] = useState(props.name);
    function handleChange(eleme){
        setNewName(eleme.target.value);
    }
    function handleSubmit(eleme){
        eleme.preventDefault();
        props.editTask(props.id, newName);
        setNewName(newName);
        setEditing(false);
    }
    const editingTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
        <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
        Новое имя для: {props.name}
        </label>
        <input id={props.id} className="todo-text" type="text" value={newName} onChange={handleChange}/>
        </div>
        <div className="btn-group">
        <button type="button" className="btn todo-cancel" onClick={()=> setEditing(false)}>
        Закрыть
        <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit" >
        Сохранить
        <span className="visually-hidden">new name for {props.name}</span>
        </button>
        </div>
        </form>
        );
        const viewTemplate = (
            <div className="stack-small">
            <div className="c-cb">
            <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
            />
            <label className="todo-label" htmlFor={props.id}>
            {props.name}
            </label>
            </div>
            <div className="btn-group">
            <button type="button" className="btn" onClick={()=> setEditing(true)}>
            Редактировать <span
            className="visually-hidden">{props.name}</span>
            </button>
            <button
            type="button"
            className="btn btn__danger"
            onClick={() => props.deleteTask(props.id)}
            >
            Удалить <span className="visually-hidden">{props.name}</span>
            </button>
            </div>
            </div>
            );
    return(
       <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>
    )
}

export default Todo
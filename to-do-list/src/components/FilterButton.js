import React from "react";

function FilterButton(props){
  // aria-pressed - я так понимаю это обработч к для переключателей, то есть благодаря этой функции можно сделать из button переключатель   
  return(
        
        <button type="button" className="btn toggle-btn" aria-pressed={props.isPressed} onClick={()=> props.setFilter(props.name)}> 
          <span className="visually-hidden">Show </span>
          <span>{props.name}</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        

    );
}

export default FilterButton
function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>Список задач  </h1>
      <form>
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
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Добавить задачу
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Просмотреть </span>
          <span>все</span>
          <span className="visually-hidden"> задачи</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Просмотреть </span>
          <span>активные</span>
          <span className="visually-hidden"> задачи</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Просмотреть </span>
          <span>завершенные</span>
          <span className="visually-hidden"> задачи</span>
        </button>
      </div>
      <h2 id="list-heading">Осталось задач: 3</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Поесть
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Редактировать <span className="visually-hidden">Поесть</span>
            </button>
            <button type="button" className="btn btn__danger">
              Удалить <span className="visually-hidden">Поесть</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Поспать
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Редактировать <span className="visually-hidden">Поспать</span>
            </button>
            <button type="button" className="btn btn__danger">
              Удалить <span className="visually-hidden">Поспать</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Повторение
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Редактировать <span className="visually-hidden">Повторение</span>
            </button>
            <button type="button" className="btn btn__danger">
              Удалить <span className="visually-hidden">Повторение</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
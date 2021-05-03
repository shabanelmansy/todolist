import React, { FormEvent, Fragment, useState } from "react";
import "./App.css";

type FormElem = FormEvent<HTMLFormElement>;
interface ITodo {
  text: string;
  complete: boolean;
}
function App() {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const handleSubmit = (e: FormElem) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodo: ITodo[] = [...todos];
    newTodo[index].complete = !newTodo[index].complete;
    setTodos(newTodo);
  };

  const removeTodo = (index: number): void => {
    const newTodo: ITodo[] = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  console.log(todos);
  return (
    <div className="App">
      <Fragment>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit"> Add Todo </button>
        </form>
        <section>
          {todos.map((todos: ITodo, index: number) => (
            <Fragment key={index}>
              <div>{todos.text}</div>
              <button
                type="button"
                onClick={() => {
                  completeTodo(index);
                }}
              >
                {""}
                {todos.complete ? "Incomplete" : "Complete"}
                {""}
              </button>
              <button type="button" onClick={() => removeTodo(index)}>
                Remove
              </button>
            </Fragment>
          ))}
        </section>
      </Fragment>
    </div>
  );
}

export default App;

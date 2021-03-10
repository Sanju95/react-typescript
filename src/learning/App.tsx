import React, { Fragment, useState } from "react";
import "./App.css";

type FormEl = React.FormEvent<HTMLFormElement>;
interface Todo {
  name: string;
  status: boolean;
}

export default function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: FormEl) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (name: string) => {
    const newTodo: Todo[] = [...todos, { name, status: false }];
    setTodos(newTodo);
  };

  const todoStatus = (index: number) => {
    const newTodo: Todo[] = [...todos];
    newTodo[index].status = !newTodo[index].status;
    setTodos(newTodo);
  };

  const removeTodo = (index: number) => {
    const newTodo: Todo[] = [...todos];
    newTodo[index].status
      ? newTodo.splice(index, 1)
      : alert("To do not completed! You want to give up on this?");
    setTodos(newTodo);
  };

  return (
    <Fragment>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button type='submit'>Add</button>
      </form>

      <section>
        {todos.map((item, index: number) => {
          return (
            <div key={index}>
              {item.name}
              <button onClick={() => todoStatus(index)}>
                {item.status ? "Completed" : "Incomplete"}
              </button>
              <button onClick={() => removeTodo(index)}>&times;</button>
            </div>
          );
        })}
      </section>
    </Fragment>
  );
}

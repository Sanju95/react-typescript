import React, { useState } from "react";

interface TodoItems {
  name: string;
  status: boolean;
}

const ToDoList = () => {
  const [todo, setTodo] = useState<TodoItems[]>([]);

  const handleAddTodo = () => {};

  return (
    <>
      <section>
        <input type='text' placeholder='New Todo' />
        <button
          onClick={() => {
            handleAddTodo;
          }}
        >
          Add ToDo
        </button>
      </section>
      <section>
        <ul>
          <li>{todo}</li>
        </ul>
      </section>
    </>
  );
};

export default ToDoList;

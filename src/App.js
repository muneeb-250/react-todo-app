import React, { useState } from "react";
import { Todos } from "./Todos";
import { AddTodo } from "./AddTodo";

export default function App() {
  let initTodo = [];
  const [todos, setTodos] = useState(initTodo);
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    let id;
    if (todos.length === 0) {
      id = 0;
    } else {
      id = todos[todos.length - 1].id + 1;
    }

    const MyTodo = {
      id: id,
      title: title,
      desc: desc
    };

    setTodos([...todos, MyTodo]);
  };

  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <input name="name" id="name" placeholder="enter todo" />
      <button>Add Todo</button>
    </div>
  );
}

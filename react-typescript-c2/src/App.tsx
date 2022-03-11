import React, { useCallback, useReducer, useRef } from "react";
import "./App.css";
// import Lists from "./components/Lists";

function App() {
  interface Todo {
    id: number;
    text: string;
  }

  type ActionType = { type: "ADD"; text: string } | { type: "REMOVE"; id: number };

  const reducer = (state: Todo[], action: ActionType) => {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            text: action.text,
          },
        ];
      case "REMOVE":
        return state.filter(({ id }) => id !== action.id);
    }
  };

  // userReducer hook
  const [todos, dispatch] = useReducer(reducer, []);

  const newTodoRef = useRef<HTMLInputElement>(null);

  // useCallback hook
  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: "ADD",
        text: newTodoRef.current.value,
      });
      newTodoRef.current.value = "";
    }
  }, []);

  return (
    <div className="App">
      <h2>Todo List:</h2>
      <input placeholder="Todo name" type="text" ref={newTodoRef} required />
      <button onClick={onAddTodo}>ADD</button>
      {todos.map((todo) => (
        <div key={todo.id} style={{ marginTop: "10px" }}>
          <div className="todo">
            <li> {todo.text}</li>
            <button onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

// function component  write 2 method

// 1st method best prefer
/*  const Box = ({ children }: { children: JSX.Element }) => {
    return <div>{children}</div>;
  }; */

// 2nd method
/*  const Box: React.FunctionComponent<{ title: string }> = ({ title }) => {
    return <div></div>;
  }; */

import {
  collection,
  doc,
  deleteDoc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState, React } from "react";
import "./App.css";
import InputTodo from "./Components/InputTodo";
import Todolist from "./Components/Todolist";
import { db } from "./firebaseConfig";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let updatedTodos = [];
      querySnapshot.forEach((doc) => {
        updatedTodos.push({ ...doc.data(), id: doc.id });
      });
      if (!areTodosEqual(updatedTodos, todos)) {
        setTodos(updatedTodos);
      }
    });
    return () => unsub();
  },[todos]);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };


const areTodosEqual = (todos1, todos2) => {
  if (todos1.length !== todos2.length) {
    return false;
  }
  for (let i = 0; i < todos1.length; i++) {
    const todo1 = todos1[i];
    const todo2 = todos2[i];

    if (
      todo1.id !== todo2.id ||
      todo1.title !== todo2.title ||
      todo1.completed !== todo2.completed
    ) {
      return false;
    }
  }
  return true;
};




  return (
    <div className="App">
      <div className="title">
        <h1>Todo App</h1>
      </div>

      <div>
        <InputTodo />
      </div>

      <div className="todo-container">
        {todos.map((todo) => {
          return (
            <Todolist
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

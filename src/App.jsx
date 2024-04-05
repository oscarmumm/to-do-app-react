import NewToDo from "./components/NewToDo/NewToDo";
import ToDoList from "./components/ToDoList/ToDoList";
import {ToDoContext} from "./context/ToDoContext";
import "./App.css";
import {useState} from "react";

function App() {
    const [toDos, setToDos] = useState([]);

    return (
        <ToDoContext.Provider value={{toDos, setToDos}}>
            <main className="w-screen h-screen py-5 flex flex-col items-center">
                <h1 className="text-3xl">ToDo App</h1>
                <NewToDo />
                <ToDoList />
            </main>
        </ToDoContext.Provider>
    );
}

export default App;

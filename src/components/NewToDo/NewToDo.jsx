import {useState, useContext} from "react";
import {ToDoContext} from "../../context/ToDoContext";

const NewToDo = () => {
    const {toDos, setToDos} = useContext(ToDoContext);
    const [toDo, setToDo] = useState("");

    const addToDo = (e) => {
        e.preventDefault();
        if (!(toDo.trim() === "")) {
            setToDos([
                ...toDos,
                {
                    id: Date.now().toString(),
                    toDo: toDo,
                },
            ]);
            setToDo("");
        }
        console.log(toDos);
    };

    return (
        <form className="py-5">
            <input
            className="p-2 rounded-md outline-none bg-slate-300"
                onChange={(e) => setToDo(e.target.value)}
                type="text"
                placeholder="Type your ToDo here..."
                value={toDo}
            />
            <button className="rounded p-2 bg-slate-600 text-cyan-200" onClick={(e) => addToDo(e)}>ADD</button>
        </form>
    );
};

export default NewToDo;

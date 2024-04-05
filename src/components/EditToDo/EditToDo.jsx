import {useState, useContext} from "react";
import {ToDoContext} from "../../context/ToDoContext";

const EditToDo = ({toDoToEdit, setEdit}) => {
    const {toDos, setToDos} = useContext(ToDoContext);

    const [toDo, setToDo] = useState(toDoToEdit.toDo);

    const saveToDo = (e) => {
        e.preventDefault();
        toDos.map((el) => {
            if (el.id === toDoToEdit.id) {
                el.toDo = toDo;
            }
        });
        setEdit(false);
    };

    return (
        <div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-modal">
            <form className="">
                <input
                    onChange={(e) => setToDo(e.target.value)}
                    type="text"
                    placeholder="Type your ToDo here..."
                    value={toDo}
                />
                <button
                    className="rounded p-2 bg-slate-600 text-cyan-200"
                    onClick={(e) => saveToDo(e)}>
                    Save
                </button>
            </form>
        </div>
    );
};

export default EditToDo;

import {useContext, useState} from "react";
import {ToDoContext} from "../../context/ToDoContext";
import EditToDo from "../EditToDo/EditToDo";

const ToDo = ({todo}) => {
    const {toDos, setToDos} = useContext(ToDoContext);
    const [edit, setEdit] = useState(false);

    const editToDo = () => {
        console.log(todo);
        setEdit(true);
    };
    const deleteToDo = () => {
        setToDos(toDos.filter((el) => el.id !== todo.id));
    };

    return (
        <li className="bg-slate-200 p-3 flex justify-between">
            <p>{todo.toDo}</p>
            <div>
                <button
                    className="rounded-md p-2 ml-5 mr-1 bg-slate-600 text-cyan-200"
                    onClick={() => editToDo()}>
                    Edit
                </button>
                <button
                    className="rounded-md p-2 bg-slate-600 text-cyan-200"
                    onClick={() => deleteToDo()}>
                    Delete
                </button>
            </div>
            {edit ? <EditToDo toDoToEdit={todo} setEdit={setEdit} /> : null}
        </li>
    );
};

export default ToDo;

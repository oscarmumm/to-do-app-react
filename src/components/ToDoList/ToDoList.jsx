import {useContext} from "react";
import {ToDoContext} from "../../context/ToDoContext";
import ToDo from "../ToDo/ToDo";

const ToDoList = () => {
    const {toDos} = useContext(ToDoContext);

    return (
        <div className="py-5">
            <h2>ToDo List</h2>
            <ul>
                {
                    toDos?.map((el) => (
                        <ToDo key={el.id} todo={el}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default ToDoList;

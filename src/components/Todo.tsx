import { TodoProps } from "../types";

const Todo = (props: TodoProps) => {

    const { id, title } = props.todo;

    const deleteTodo = (id: string) => {
        props.handleDeleteTodo(id);
    };

    return (
        <article className="bg-sky-700 text-white p-2 flex font-bold space-x-2 ">
            <h3>{id}</h3>
            <p>{title}</p>
            <button onClick={() => deleteTodo(id)}>Delete Todo</button>
        </article>
    )
}

export default Todo
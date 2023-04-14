import { TodoType } from "../types";

type TodoProps = {
    todo: TodoType
}

const Todo = (props: TodoProps) => {

    const { id, title } = props.todo;

    return (
        <article className="bg-sky-700 text-white p-2 flex font-bold space-x-2 ">
            <h3>{id}</h3>
            <h3>{title}</h3>
        </article>
    )
}

export default Todo
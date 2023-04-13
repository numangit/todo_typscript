type TodoType = {
    todo: {
        id: string;
        title: string;
    }
}

const Todo = (props: TodoType) => {

    return (
        <article className="bg-sky-700 text-white p-2 flex font-bold space-x-2 ">
            <h3>{props.todo.id}</h3>
            <h3>{props.todo.title}</h3>
        </article>
    )
}

export default Todo
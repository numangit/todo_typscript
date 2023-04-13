type TodoType = {
    todo: {
        id: string;
        title: string;
    }
}

const Todo = (props: TodoType) => {

    return (
        <article>
            <h3>{props.todo.id}</h3>
            <h3>{props.todo.title}</h3>
        </article>
    )
}

export default Todo
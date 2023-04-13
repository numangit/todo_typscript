import Todo from "./Todo";

type TodosType = {
    todos: {
        id: string;
        title: string;
    }[],
    todo: {
        id: string;
        title: string;
    }
}

const Todos = (props: TodosType) => {
    return (
        <div>
            {props.todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
        </div>
    )
}

export default Todos
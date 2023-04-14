import { TodoType } from "../types";
import Todo from "./Todo";

type TodosProps = {
    todos: TodoType[],
}

const Todos = (props: TodosProps) => {
    return (
        <section>
            {props.todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </section>
    )
}

export default Todos
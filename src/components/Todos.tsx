import { TodoType } from "../types";
import Todo from "./Todo";

type TodosProps = {
    todos: TodoType[];
    handleDeleteTodo: Function;
}

const Todos = (props: TodosProps) => {
    return (
        <section>
            {props.todos.map((todo) => (
                <Todo key={todo.id} todo={todo} handleDeleteTodo={props.handleDeleteTodo} />
            ))}
        </section>
    )
}

export default Todos
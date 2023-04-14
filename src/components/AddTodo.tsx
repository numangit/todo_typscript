import { FormEvent, useState } from "react"
import { todoData } from "../data/data";

type Props = {
    handleAddTitle: Function;
}

const AddTodo = (props: Props) => {
    const [title, setTitle] = useState("");

    //function to handle submit
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime.toString(),
            title
        };
        props.handleAddTitle(newTodo);
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="relative flex">
                {/* <label htmlFor="Title" className="text-slate-50 font-semibold">Add Todo</label> */}
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required autoFocus placeholder="Add Todo" className="w-full rounded-md bg-slate-700 border-gray-200 py-2.5 pr-10 shadow-sm sm:text-sm text-white" />
                <span className="absolute inset-y-0 right-0 grid w-10 place-content-center">
                    <button
                        type="button"
                        className="rounded-full bg-rose-600 p-0.5 text-white hover:bg-rose-700"
                    >
                        <span className="sr-only">Submit</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                            />
                        </svg>
                    </button>
                </span>
            </div>
        </form>
    )
}

export default AddTodo
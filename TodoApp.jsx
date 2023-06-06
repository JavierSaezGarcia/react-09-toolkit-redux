import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./src/store/apis/todosApi";

export const TodoApp = () => {

    // const { isLoading, data: todos = [] } = useGetTodosQuery();

    const [todoId, setTodoId] = useState(1);

    const { isLoading, data: todo } = useGetTodoByIdQuery(todoId);
    console.log(todo);

    const prevTodo = () => {
        if (todoId === 1) return;
        setTodoId(todoId - 1);
    }
    const nextTodo = () => {
        setTodoId(todoId + 1);
    }

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            {
                isLoading && (<h4>Loading...</h4>)


            }

            <pre>{JSON.stringify(todo)}</pre>
            {/* <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id}><strong>{todo.completed ? 'DONE' : 'PENDING'}</strong> - {todo.id} - {todo.title}</li>
                    ))
                }
            </ul> */}

            <button onClick={prevTodo} >
                Previous Todo
            </button>
            <button onClick={nextTodo} >
                Next Todo
            </button>
        </>
    )
}

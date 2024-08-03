import * as React from "react";
import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoItem from "./components/TodoItem";
import TodoSummary from "./components/TodoSummary";
import { dummyData } from "./assets/data/todos"; // Ensure this path is correct
import { Todo } from "./types/todos";

function App() {
    const [todos, setTodos] = useState<Todo[]>(dummyData);

    function addTodo(title: string) {
        setTodos(prevTodos => [
            ...prevTodos,
            {
                id: prevTodos.length + 1,
                text: title,
                completed: false,
            }
        ]);
    }

    function setTodoCompleted(id: number, completed: boolean) {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed } : todo
            )
        );
    }

    function deleteAllCompleted() {
        setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
    }

    return (
        <main className="py-10 h-screen space-y-5">
            <h1 className="font-bold text-3xl text-center">Sudhanshu's Todo's</h1>
            <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
                <AddTodoForm onSubmit={addTodo} />
                <div className="space-y-2">
                    {todos.map(todo => (
                        <TodoItem
                            todo={todo}
                            key={todo.id}
                            onCompletedChange={setTodoCompleted}
                        />
                    ))}
                </div>
            </div>
            <TodoSummary
                todos={todos}
                deleteAllCompleted={deleteAllCompleted}
            />
        </main>
    );
}

export default App;

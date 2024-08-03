import * as React from "react";
import { useState } from "react";

interface AddTodoFormProps {
    onSubmit: (title: string) => void;
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
    const [input, setInput] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        if (!input.trim()) return;

        onSubmit(input);
        setInput("");
    }

    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What needs to be done?"
                className="rounded-md border-gray-100 p-2"
            />
            <button
                type="submit"
                className="ml-2 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
            >
                Add
            </button>
        </form>
    );
}

"use client";
import { type FC, useEffect, useState } from "react";
import { FaPlus, FaTimesCircle } from "react-icons/fa";
import { todoTypes } from "./todo.types";
import { useFetchClient } from "@/utils/useFetchClient";

const Todo: FC = () => {
  const { get, post, patch, deleteReq } = useFetchClient();
  const [todos, setTodos] = useState<todoTypes[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(false);
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Add Todo
  const handleAddTodo = async (title: string) => {
    if (!title.trim()) return;
    try {
      const createdTodo = await post<todoTypes>(
        "https://jsonplaceholder.typicode.com/todos",
        { userId: 1, title, completed: false },
        {}
      );
      setTodos((prev) => [...prev, createdTodo]);
      setNewTodo("");
    } catch {
      setError("Failed to add todo.");
    }
  };

  // Update Todo
  const handleUpdateTodo = async (id: number, completed: boolean) => {
    setUpdatingId(id);
    const prevTodos = [...todos];
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );

    try {
      await patch<todoTypes>(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        { completed },
        {}
      );
    } catch {
      setTodos(prevTodos);
      setError("Failed to update todo.");
    } finally {
      setUpdatingId(null);
    }
  };

  // Delete Todo
  const handleDeleteTodo = async (id: number) => {
    setDeletingId(id);
    const prevTodos = [...todos];
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

    try {
      await deleteReq<void>(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {}
      );
    } catch {
      setTodos(prevTodos); // rollback
      setError("Failed to delete todo.");
    } finally {
      setDeletingId(null);
    }
  };

  // Fetch todos on mount
  useEffect(() => {
    setLoading(true);
    get<todoTypes[]>("https://jsonplaceholder.typicode.com/todos?_limit=5", {})
      .then((result) => setTodos(result))
      .catch(() => setError("Failed to fetch todos."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="mx-auto w-140 p-4">
      {loading && <h2>Loading...</h2>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && (
        <div>
          <form
            className="mb-4 flex flex-row items-center"
            onSubmit={(e) => {
              e.preventDefault();
              handleAddTodo(newTodo);
            }}
          >
            <input
              className="border mr-2 h-10 p-2 flex-1 rounded"
              placeholder="Enter todo"
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button
              type="submit"
              disabled={!newTodo.trim()}
              className="flex flex-row items-center font-bold text-lg border-2 px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
            >
              Add <FaPlus className="ml-2" />
            </button>
          </form>

          <h3 className="font-bold mb-2">Todos</h3>
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex flex-row items-center justify-between border-b py-1"
              >
                <label className="flex items-center gap-2 flex-1 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    disabled={updatingId === todo.id}
                    onChange={(e) =>
                      handleUpdateTodo(todo.id, e.target.checked)
                    }
                  />
                  <span
                    className={`ml-2 ${
                      todo.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {todo.title}
                  </span>
                </label>
                <button
                  aria-label={`Delete ${todo.title}`}
                  disabled={deletingId === todo.id}
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  <FaTimesCircle />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Todo;

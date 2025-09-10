"use client";
import { type FC, useEffect, useState } from "react";
import {
  FaCheckSquare,
  FaPlus,
  FaRegSquare,
  FaTimesCircle,
} from "react-icons/fa";
import { todoTypes } from "./todo.types";
import { useFetchClient } from "@/utils/useFetchClient";

const Todo: FC<{}> = ({}) => {
  const { get, post, deleteReq } = useFetchClient();
  const [todos, setTodos] = useState<todoTypes[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleAddTodo = (title: string) => {
    post<todoTypes>(
      `https://jsonplaceholder.typicode.com/todos`,
      {
        userId: 1,
        title,
        completed: false,
      },
      {}
    ).then((createdTodo) => {
      setTodos((prev) => [...prev, createdTodo]);
      setNewTodo(""); 
    });
  };

  const handleDeleteTodo = (id: number) => {
    deleteReq<[]>(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {}
    ).then((result) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    });
  };

  useEffect(() => {
    setLoading(true);
    get<todoTypes[]>(
      "https://jsonplaceholder.typicode.com/todos?_limit=5",
      {}
    ).then((result) => {
      setTodos(result);
      setLoading(false);
    });
  }, [setTodos]);

  return (
    <div className="mx-auto w-140">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <div className="mb-2 flex flex-row items-center">
            <input
              className="border mr-2 h-10 p-2"
              placeholder="Enter todo"
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button
              className="flex flex-row items-center font-bold text-lg border-2 px-2 cursor-pointer"
              onClick={() => handleAddTodo(newTodo)}
            >
              Add <FaPlus className="ml-2" />
            </button>
          </div>
          <ul>
            <h3 className="font-bold">Todos</h3>
            {todos?.map((todo) => (
              <li key={todo.id}>
                <div className="flex flex-row items-center">
                  {todo.completed ? <FaCheckSquare /> : <FaRegSquare />}{" "}
                  <span className="ml-2">{todo.title}</span>
                  <button
                    className="ml-2 cursor-pointer"
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    <FaTimesCircle />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Todo;

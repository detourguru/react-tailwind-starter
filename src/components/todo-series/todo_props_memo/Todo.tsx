import { useCallback, useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

export type TTodo = {
  id: number;
  text: string;
  isCompleted: boolean;
};
const Todo = () => {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const addTodo = (text: string) => {
    setTodos((todos) => [
      ...todos,
      {
        id: todos.length + 1,
        text,
        isCompleted: false,
      },
    ]);
  };

  const toggleTodo = useCallback((id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[502px] py-10 px-[25px] text-[#4f4f4f] bg-white border border-[#d1d1d1] rounded-lg inter ">
          <h1 className="text-xl font-bold mb-[10px]">Todo List App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          {/* 등록 */}
          <TodoEditor addTodo={addTodo} />
          {/* 목록 */}
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </>
  );
};
export default Todo;

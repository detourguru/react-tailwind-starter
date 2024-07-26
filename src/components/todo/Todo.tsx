import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

type TTodo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

// 분리하기:props를 활용하면 된다
const Todo = () => {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const addTodo = (text: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: text,
        isCompleted: false,
      },
    ]);
  };

  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[502px] py-10 px-[25px] text-[#4f4f4f] bg-white border border-[#d1d1d1] rounded-lg inter ">
          <h1 className="text-xl font-bold mb-[10px]">Todo List App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          {/* todEditor */}
          <TodoEditor addTodo={addTodo} />
          {/* todolist */}
          <TodoList />
        </div>
      </div>
    </>
  );
};
export default Todo;

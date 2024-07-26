import React from "react";
import TodoListItem from "./TodoListItem";
import { TTodo, TTodoAction } from "../../reducer/todoReducer";

const TodoList = ({
  todos,
  dispatch,
}: {
  todos: TTodo[];
  dispatch: React.Dispatch<TTodoAction>;
}) => {
  console.log("todolist");

  return (
    <>
      <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </>
  );
};
export default React.memo(TodoList);

import { TTodo } from "./Todo";
import TodoListItem from "./TodoListItem";

const TodoList = ({
  todos,
  toggleTodo,
  deleteTodo,
}: {
  todos: TTodo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}) => {
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
};
export default TodoList;

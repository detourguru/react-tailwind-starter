import Button from "./html/Button";
import CheckBox from "./html/CheckBox";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
        <TodoListItem />
      </ul>
    </>
  );
};
export default TodoList;

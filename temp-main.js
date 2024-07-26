let todos = [
  {
    id: 1,
    text: "아침먹기",
    isCompleted: false,
  },
];

const addTodo = (text) => {
  const newTodo = {
    id: Date.now(),
    text: text,
    isCompleted: false,
  };
  //   todos.push(newTodo); 원본의 불변성을 위반한 코드이기 때문에 리액트에서는 이처럼 직접 접근해 원본을 수정하지 않음. 단, js에서는 가능 (유연)
  todos = [...todos, newTodo];
};

const toggleTodo = (id) => {
  todos = todos.map((todo) => {
    todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo;
  });
};

const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
};

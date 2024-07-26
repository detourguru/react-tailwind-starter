export type TTodo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

export type TTodoAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

export const todoReducer = (todos: TTodo[], action: TTodoAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...todos,
        {
          id: Date.now(),
          text: action.payload,
          isCompleted: false,
        },
      ];
<<<<<<< HEAD
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.payload);
=======
>>>>>>> a240d2f82402fb1f288ac79a2a8bc4d9e68b2943
    case "TOGGLE_TODO":
      return todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
<<<<<<< HEAD
=======
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.payload);
>>>>>>> a240d2f82402fb1f288ac79a2a8bc4d9e68b2943
    default:
      return todos;
  }
};

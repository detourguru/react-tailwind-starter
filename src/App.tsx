<<<<<<< HEAD
import AnotherComponent from "./AnotherComponent";
import { ThemeProvider } from "./ThemeContext";
=======
import Todo from "./components/todo-series/todo_publish/Todo"; // todo + component division + publish
// import Todo from "./components/todo-series/todo_props/Todo"; // todo_props
// import Todo from "./components/todo-series/todo_props_memo/Todo"; // todo_props + memoization
// import Todo from "./components/todo-series/todo_reducer/Todo"; // todo + reducer + memoization
>>>>>>> a240d2f82402fb1f288ac79a2a8bc4d9e68b2943

const App = () => {
  return (
    <>
      {/* 데이터를 제공받을 컴포넌트를 provider로 감싸주었다 */}
      <ThemeProvider>
        <AnotherComponent />
      </ThemeProvider>
    </>
  );
};
export default App;

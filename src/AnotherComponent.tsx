import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const AnotherComponent = () => {
  const { theme, dispatch } = useContext(ThemeContext);
  return (
    <>
      <h1>another component 현재 테마: {theme}</h1>
      <button
        onClick={() =>
          dispatch({
            type: "TOGGLE_THEME",
            payload: { theme: theme === "light" ? "dark" : "light" },
          })
        }
      >
        another component 모드 바꾸기
      </button>
    </>
  );
};
export default AnotherComponent;

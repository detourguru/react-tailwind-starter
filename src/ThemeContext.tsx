import React, { createContext, useReducer } from "react";

// action type 생성
type TThemeAction = { type: string; payload: object };

// createContext함수를 통해 context 생성
export const ThemeContext = createContext<{
  theme: string;
  dispatch?: React.Dispatch<TThemeAction>;
}>({ theme: "light" });

// 상태변경을 위한 reducer 함수
const reducer = (state: string, action: TThemeAction) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "dark" ? "light" : "dark";
    default:
      return state;
  }
};

// provider
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, dispatch] = useReducer(reducer, "light");

  // 이제 이 provider로 컴포넌트를 감싸주면 value를 공유할 수 있다
  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

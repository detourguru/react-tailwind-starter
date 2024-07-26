import AnotherComponent from "./AnotherComponent";
import { ThemeProvider } from "./ThemeContext";

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

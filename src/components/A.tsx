import React, { useState } from "react";
import C from "./C";

const A = () => {
  const [count, setCount] = useState(0);
  console.log(`a가 렌더링 됨 ${count}`);
  return (
    <>
      <h1>A Component: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>A에서 증가</button>
      <C />
    </>
  );
};
export default React.memo(A);

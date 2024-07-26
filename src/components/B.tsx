import React, { useState } from "react";

const B = ({ increment }: { increment: () => void }) => {
  const [count, setCount] = useState(0);
  console.log(`b가 렌더링 됨 ${count}`);
  return (
    <>
      <h1>B Component: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>B에서 증가</button>
    </>
  );
};
export default React.memo(B);

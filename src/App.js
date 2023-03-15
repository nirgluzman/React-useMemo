import { useState, useMemo, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // optimizing the performance by eliminating repeating heavy computations
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // useMemo to check referential equality
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme changed !");
  }, [themeStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num) {
  console.log("Calling Slow Function");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

export default App;

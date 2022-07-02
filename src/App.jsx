import { useReducer } from "react";
// import { useState } from "react";

function reducer(state, action) {
  if (action.type === "increment") return { count: state.count + 1 };
  if (action.type === "decrement") return { count: state.count - 1 };
  // return {count: state.count + 1}
}

const App = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    // setCount((prevValue) => prevValue + 1);
    dispatch({ type: "increment" });
    // dispatch()
  }

  function decrement() {
    // setCount((prevValue) => prevValue - 1);
    dispatch({ type: "decrement" });
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      {/* <span>{count}</span> */}
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
};

export default App;

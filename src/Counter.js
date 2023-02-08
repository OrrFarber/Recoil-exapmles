import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
// import TodoList from "./TodoList";

//atom is like a state => returns writable recoil object
export const counterState = atom({
  //unique string used to identify the atom
  key: "counterState",
  // The initial value of the atom
  default: 0,
});

// state is a pure function that will return always the same value for given set of depencency
const X2Selector = selector({
  key: "x2Selector",
  // retrieve values from other atoms/selectors
  get: ({ get }) => {
    const count = get(counterState);
    return count * 2;
  },
  // return writeable state
  set: ({ set }, devide) => {
    set(counterState, devide / 5);
  },
});

function Counter() {
  // use this to read or write atom (enables the transform)
  const [count, setCount] = useRecoilState(counterState);
  const doubleCount = useRecoilValue(X2Selector);
  const [devide, setDevide] = useRecoilState(X2Selector);
  // const doubleValue = useRecoilValue(X2Selector);

  function increment() {
    setCount(count + 1);
  }
  function dencrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>Counter: {count} </p>
      <p>Double Counter: {doubleCount}</p>
      <p>Devided Counter </p>
      <button onClick={() => setDevide()}>devide</button>
      <button onClick={increment}>Increment</button>
      <button onClick={dencrement}>Decrement</button>
    </div>
  );
}

export default Counter;

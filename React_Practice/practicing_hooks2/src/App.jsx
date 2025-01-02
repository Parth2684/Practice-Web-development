import { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let finalCount = useMemo(() => {
    let sum = 0;
    for (let i = 0; i <= inputValue; i++) {
      sum = sum + i;
    }
    return sum;
  }, [inputValue]);

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <p>{finalCount}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
    </div>
  );
}

export default App;

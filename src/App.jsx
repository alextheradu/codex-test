import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useHover } from './hooks/useHover';
import { useInterval } from './hooks/useInterval';
import './App.css';

function App() {
  const [name, setName] = useLocalStorage('name', '');
  const [hoverRef, hovered] = useHover();
  const [count, setCount] = useState(0);

  useInterval(() => setCount((c) => c + 1), 1000);

  return (
    <div className="app">
      <h1>React Bits Demo</h1>
      <div className="card">
        <label>
          Name:
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <p>Persisted in localStorage</p>
      </div>
      <div ref={hoverRef} className="hover-box">
        {hovered ? 'You are hovering!' : 'Hover over me'}
      </div>
      <p className="counter">Interval count: {count}</p>
    </div>
  );
}

export default App;

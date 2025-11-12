import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Chào mừng đến với React + Vite!</h1>
      <p>Ứng dụng React đầu tiên của bạn đã chạy thành công 🎉</p>
      <div style={{ marginTop: '2rem' }}>
        <button
          onClick={() => setCount((count) => count + 1)}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: '#646cff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          Count: {count}
        </button>
      </div>
    </div>
  );
}

export default App;

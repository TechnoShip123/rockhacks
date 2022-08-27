import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>RockHacks</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Get started by editing the <code>src/App.tsx</code> file.
          <br />
          <code>npm run dev</code> to start the development environment.
        </p>
      </div>
      <p className="read-the-docs">
        Initial commit for the <b>RockHacks</b> site. Boring, I know.
      </p>
    </div>
  )
}

export default App

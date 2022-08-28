import { useState } from 'react'
import * as Style from './AppStyles';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">

      <nav>
        <a className="homeIcon" href="/"><img src="/vite.svg" alt="RockHacks logo" /></a>
        <Style.NavLink_GRADIENT_WARM1 href='#about'>About</Style.NavLink_GRADIENT_WARM1>
        <Style.NavLink_GRADIENT_COOL1 href='#sponsors'>Sponsors</Style.NavLink_GRADIENT_COOL1>
        <Style.NavLink_GRADIENT_COOL2 href='#faq'>FAQ</Style.NavLink_GRADIENT_COOL2>
      </nav>

      <h1>RockHackssssssssssssssssssssssssss</h1>
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

export default App;

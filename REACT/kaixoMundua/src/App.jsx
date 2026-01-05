import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Kaixo from './Kaixo.jsx'
import Comment from "./Comment";

const comment = {
  date: new Date(2025, 3, 12),
  text: 25,
  author: {
    name: "Hola",
    avatarUrl: "https://cdn-food.tribune.com.pk/users/user.png"
  }
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Kaixo />
      <Comment date={comment.date} text={comment.text} author={comment.author} />
    </>
  )
}

export default App

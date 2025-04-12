import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import tailwindcss from '@tailwindcss/vite'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={"https://raw.githubusercontent.com/BaderAlmutairi123/hackathon2025/50b448f4647dad41393a6df32b33487349ef2caf/Homer/src/assets/Homer%20logo%20final.svg"} class="logo" alt="Homer logo final" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={"https://raw.githubusercontent.com/BaderAlmutairi123/hackathon2025/50b448f4647dad41393a6df32b33487349ef2caf/Homer/src/assets/Homer%20logo%20final.svg"} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1 className={"big-text"}>Homer</h1>
      <h1 className={"small-text"}> A hub for skilled trades </h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          
        </p>
      </div>
      <p className="text-amber-800">
        Check out{' '}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}

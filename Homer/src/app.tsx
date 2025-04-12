import { useState } from 'preact/hooks'
import './app.css'

import ChatInput from './ChatInput'
import { Topbar } from './Topbar'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Shows Top Bar */}
      <Topbar />

      <div class="chatbox">
      

      </div>

      <ChatInput onSend={(msg: String) => console.log("User said:", msg)} />

    </>
  )
}

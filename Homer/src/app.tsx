import './app.css'

import ChatInput from './ChatInput'
import { Topbar } from './Topbar'
import { fetchServices } from './messages'

export function App() {

  return (
    <>
      {/* Shows Top Bar */}
      <Topbar />


       <ChatInput onSend={(msg) => fetchServices(msg, "Hempstead") } />

    </>
  )
}

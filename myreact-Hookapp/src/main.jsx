import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClickCounter from './Counter'
import EmojiCounter from './EmojiCounter'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ClickCounter />
    <EmojiCounter pic="Love" />
    <EmojiCounter pic="Sad" />
    <EmojiCounter pic="Like" />
  </StrictMode>,
)

import { useState } from 'react'
import './App.css'
import ColorPicker from './ColorPicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ColorPicker/>
    </>
  )
}

export default App

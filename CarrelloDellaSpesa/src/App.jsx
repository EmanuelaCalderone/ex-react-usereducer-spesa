import { useState } from 'react'
import './App.css'
import ListaProdotti from './components/ListaProdotti'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListaProdotti />
    </>
  )
}

export default App

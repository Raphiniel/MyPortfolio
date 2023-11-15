import { useState } from 'react'
import Top from './pages/Top'
import Body from './home/body'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Top/>
      <Body/>
    </>
  )
}

export default App

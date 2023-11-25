import { useState } from 'react'
import Top from './pages/Top'
import Body from './home/body'
import Footerz from './home/footerz'
// import {BrowserRouter, Routes, Route} from 'react-router-dom';s
import {Analytics} from '@vercel/analytics/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Top/>
      <Body/>
      <Footerz/>
      <Analytics/>
      </>
  )
}

export default App

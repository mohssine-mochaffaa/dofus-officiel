import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/fr';
import Home3 from './pages/es';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/es" element={< Home3/>} />

        </Routes>
    </Router>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
          } />
      </Routes>
    </div>
  );
}

export default App

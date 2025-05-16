import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import {Header} from './components/home/Header'
import { Home } from './pages/home'
import { Glossarium } from './pages/Glossarium'

function App() {
  return (
    <>
    <Router>
      <Header/>
        <Routes>
          <Route 
          path="/"
          element={<Home />}
          />
          <Route 
          path="/glossarium"
          element={<Glossarium />}
          />
        </Routes>
    </Router>
    </>
  )
}

export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import NewProject from './pages/NewProject'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/" element={<AboutUs />}/>
          <Route path="/" element={<Contact />}/>
          <Route path="/" element={<NewProject />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App

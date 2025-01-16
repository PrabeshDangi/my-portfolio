import './App.css'
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
function App() {
  return (
    <>

    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </Router>
  </>
  );
}

export default App

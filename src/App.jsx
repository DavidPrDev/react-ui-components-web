import './styles/App.css'
import { Nav } from './components/Nav'
import { GetStarted } from './components/GetStarted';
import { Components } from './components/Components';
import { Presentation } from './components/Presentation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Router>

        <Nav />

        <Routes>
          <Route path="/" exact element={<Presentation />} />
          <Route path="/get-started" exact element={<GetStarted />} />
          <Route path="/components" exact element={<Components />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

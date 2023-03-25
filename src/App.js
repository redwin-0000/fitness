import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home"
import BMI from "./components/pages/BMI"
import About from "./components/pages/About"
import Diet from "./components/pages/Diet"
function App() {

  return (
     <>
      <Router>
        <Routes>
        <Route 
          path='/'
          element = {<Home />}/>
          <Route 
          path='Home'
          element = {<Home />}/>
          <Route 
          path='Diet'
          element = {<Diet />}/>
          <Route 
          path='About'
          element = {<About />}/>
           <Route 
          path='BMI'
          element = {<BMI />}/>
          
        </Routes>
      </Router>
      </>
  );
}

export default App;

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,


} from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import NoteState from './Context/notes/NoteState';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useState } from 'react';
import Alert from './Components/Alert';
import Footer from './Components/Footer';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1700);
  };
  return (
    <>

      <NoteState>
        <Router>
          <Navbar showAlert= {showAlert}  />
          <Alert alert ={alert}/>
          <div className="container">
            <Routes>
              <Route path='/' element={<Home showAlert= {showAlert} />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/login' element={<Login showAlert= {showAlert} />}></Route>
              <Route path='/signup' element={<Signup showAlert= {showAlert} />}></Route>
            </Routes>
          </div>
          <Footer/>
        </Router>
      </NoteState>
    </>
  );
}

export default App;

import './App.css';
import  Navbar  from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import  About  from "./Components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';

function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode =(cls)=>{
    console.log(cls);
   // document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
     // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing mode';
      // }, 2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }

  return ( 
    <> 
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> 
      <Alert alert ={alert}/>
      <Switch>
          <Route exact path="/" > 
          <TextForm heading ="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert}/>
          </Route>
          <Route exact path="/About" >
            <About  mode = {mode}/>
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </>
  );
}

export default App;

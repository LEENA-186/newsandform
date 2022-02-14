import React from 'react'
import New from './News/New'
import Formcontrols from './Formcontrol/Formcontrols' 
import './App.css';
import { Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={ <Formcontrols/>}/>
        <Route path="/news" element={ <New/>}/>
     {/* <New/>
     <Formcontrols/> */}
     </Routes>
    </div>
  );
}

export default App;

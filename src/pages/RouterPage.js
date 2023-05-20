import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

import About from "./About";
import Home from "./Home";


export default function RouterPage() {
  return (
    
      <Router>
        <Routes>
        <Route  index element={<Home />} />
        <Route path="about" element={<About />} />
        </Routes>
      </Router>
   
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<RouterPage/>);

    


 


        
import React from "react";

import Index3 from "./index3";
import  './main.css';
import { BrowserRouter as Router  , Route, Routes  } from "react-router-dom";

const Index1 = () => {
           return (

           <Router>

<Routes>

    <Route  path = '/' element = {<Index3/>}   />
   
</Routes> 

           </Router>

       
           )
}


export default Index1
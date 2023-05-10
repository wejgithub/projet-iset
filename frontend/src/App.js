
import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Singup";
import { Fragment } from "react";
import { BrowserRouter,Route,Redirect} from "react-router-dom";
import './App.css'
import  LandingPage from "./components/LandingPage";





function App() {
	const user = localStorage.getItem("token");
	return (
    
    <Fragment>
      <BrowserRouter>
    
      <Route  path="/landing" >  <LandingPage/></Route>  

      <Route  path="/signup" ><Signup/></Route>  
		 	<Route path="/login" ><Login/></Route>
       {user && <Route path="/" ><Home/></Route>} 
			{/* {! user && <Route  exact path="/" > <Redirect  to="/login" /></Route>} */}
      { ! user &&<Route exact path="/">
      <Redirect  to="/landing" />
      </Route>}

      </BrowserRouter>
    </Fragment>

	);
}

export default App;
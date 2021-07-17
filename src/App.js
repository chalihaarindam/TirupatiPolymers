import './App.css';
import React,{useEffect} from "react";
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import Footer from './Footer';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import ProtectedRoute from './ProtectedRoute';


const promise = loadStripe("pk_test_51J84tqSFogxiIKqZelL91WzjVdHdQlPP2dJayjYgDgAA8MqHNkYrmEZUmPCz1CjFyXqHgQkxABIoZNM1hqEG5qwp00ftrjD0X7");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
    <div className="app">
      <Switch>
        <ProtectedRoute exact path="/orders">
          <Header />
          <Orders />
        </ProtectedRoute>
        <Route path="/login">
          <Login />
          <Footer/>
        </Route>
        <Route path="/checkout">
          <Header />  
          <Checkout />
          <Footer/>
        </Route>
        <ProtectedRoute exact path="/payment" >
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
          <Footer/>
        </ProtectedRoute>
        <Route path="/">     
          <Header />
          <Home /> 
          <Footer/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;

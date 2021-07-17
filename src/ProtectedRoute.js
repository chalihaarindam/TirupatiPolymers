import React ,{useState}from 'react';
import {Route, Redirect } from 'react-router-dom';
import {auth} from './firebase';




const ProtectedRoute = (props) =>{
    const [loggedIn, setloggedIn] = useState(null);

    auth.onAuthStateChanged((user) => {
        if(user){
            setloggedIn(true);
        }
        else{
            setloggedIn(false);
        }
    });

    if(loggedIn == null){
       return "loading...";     
    }else if(loggedIn){
       return props.children;     
    }else if(!loggedIn){
            return <Redirect to="/"/>
    }
};

export default ProtectedRoute;
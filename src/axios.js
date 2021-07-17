import axios from "axios"

const instance = axios.create({
     //The API cloud function url
    baseURL:'https://us-central1-clone-e25e2.cloudfunctions.net/api'
    //'http://localhost:5001/clone-e25e2/us-central1/api' 
    
   
});

export default instance;


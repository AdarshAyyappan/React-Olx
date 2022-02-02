import React  from "react";
import ReactDom from "react-dom";
import App from './App';
import { FirebaseContext } from "./store/FIrebaseContext";
import Context from './store/FIrebaseContext';
import firebase from './firebase/config'

ReactDom.render(


<FirebaseContext.Provider value={{firebase}}>
    <Context>
    <App/>
    </Context>
  
</FirebaseContext.Provider>
, document.getElementById('root')) ;
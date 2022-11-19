import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import FormUsers from "./js/FormUsers"

import FormAllUsers from './App';
import reportWebVitals from './reportWebVitals';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
// import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    
    <StyledEngineProvider injectFirst>
      <FormUsers />
    </StyledEngineProvider>
    <div className="containerLoad_Relative">
          
          
      {/* </div>  */}
      <div id ="idFormAllUsersContainer" > 
      {/* <FormAllUsers  /> */}
      </div>
    </div>
  </React.StrictMode>
);

// App.use(cors(corsOptions)) 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

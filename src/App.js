import React from 'react';
import './App.css';
import Register from './pages/form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return(
      <>
        <Register />
        <ToastContainer 
            autoClose={3000}
        />
      </>
  )
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './styles.css';
import App from './App';
// import Login from './Login';
// import Admin from './components/Admin';
// import SignUp from './SignUp';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Admin from './components/Admin';
import Product from './components/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/order" element={<Admin/>}/>
        <Route path="/product" element={<Product/>}/>
        
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

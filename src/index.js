import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header } from "./comp/Header";
import { Footer } from "./comp/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <div style={{
      background: 'url(https://media.fortniteapi.io/images/shop/b068b3a7b046f8e4ff9c76ae5a65c5e62b6954e160a061d91bab2faf02e8b2ae/v2/MI_Drum_Cardboard/background.png)',
    }}>
      <App />
    </div>
    <Footer />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

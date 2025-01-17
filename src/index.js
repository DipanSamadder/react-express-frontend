import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import CreateComponent from './components/CreateComponent';
import ShowComponent from "./components/ShowComponent";
import { BrowserRouter, Routes,  Route } from 'react-router-dom';


export default function Index(){
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={ <CreateComponent/> }/>
        <Route path="/show" element={ <ShowComponent/> }/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header/Header';
import User from './component/User/User';


const App = () => {
  return (
    <div className="App">
      <div className="bg bg-info">
      <Header></Header>
      <br/>
      <User></User>
      </div>
    
    </div>
  );
};

export default App;
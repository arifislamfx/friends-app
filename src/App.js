import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header/Header';
import User from './component/User/User';
import { Container } from 'react-bootstrap';


const App = () => {
  return (
    <div className="App">
      <Container fluid>
      <div className="bg bg-info">
      <Header></Header>
      <br/>
      <User></User>
      </div>
      </Container>
    </div>
  );
};

export default App;
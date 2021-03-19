//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import Homescreen from './screens/Homescreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <Router>
      <Header/>
      <Container>
        <main className="py-3">  
          <Route path='/' component={Homescreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
        </main>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;

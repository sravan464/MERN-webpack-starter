import React from 'react';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import AppNavbar from './components/AppNavbar';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './components/home-page';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <AppNavbar />
      <Container fluid>
        <ToastContainer />
        <HomePage />
      </Container>
    </div>
  </Provider>
);

export default App;

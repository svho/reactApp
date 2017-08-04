import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ButtonToolbar, Button, Grid, Row, Col } from 'react-bootstrap';
import InputForm from './InputForm.js'
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to my React-App</h2>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={6}>
              <InputForm/>
            </Col>
            <Col xs={6}>
              <h2>... and some buttons</h2>
              <ButtonToolbar>
                <Button>Default</Button>
                <Button bsStyle="primary">Primary</Button>
                <Button bsStyle="success">Success</Button>
                <Button bsStyle="info">Info</Button>
                <Button bsStyle="warning">Warning</Button>
                <Button bsStyle="danger">Danger</Button>
                <Button bsStyle="link">Link</Button>
              </ButtonToolbar>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12}>
              <Footer/>
            </Col>
          </Row>

        </Grid>
      </div>
    );
  }
}

export default App;

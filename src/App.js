import React from 'react';
import {BrowserRouter as HashRouter, Link, Route, Switch} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MembersPage from './pages/MembersPage';
import QuestionsPage from './pages/QuestionsPage';
import MaterialsPage from './pages/MaterialsPage';
import PositionPage from './pages/PositionPage';
import logo from './images/logo_1.png';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: 'Студентски Парламент Математичког Факултета Универзитета у Београду',
      headerLinks: [
        { title: 'home', path: '/' },
        { title: 'clanovi', path: '/clanovi' },
        { title: 'pitanja', path: '/pitanja' },
        { title: 'materijali', path: '/materijali' },
        { title: 'funkcije', path: '/funkcije' }
      ],
      home: {
        title: 'Студентски Парламент Математичког Факултета',
        subTitle: 'Универзитета у Београду',
      },
      clanovi: {
        title: 'Чланови парламента'
      },
      pitanja: {
        title: 'Честа питања'
      },
      materijali: {
        title: 'Материјали'
      },
      funkcije: {
        title: 'Функције'
      }
    }
  }

  render(){
    return(
      <HashRouter basename="/~parlament">
      <Container className="p-0" fluid={true}>
        <Container >
        <Navbar fixed='top' className="border-bottom" bg="dark" variant='dark' expand="lg">
          <Navbar.Brand>
            <img
              src={logo}
              width="60"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{' '}
            Студентски парламент Математичког факултета 
            </Navbar.Brand>

          <Navbar.Toggle className="border-0 " aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Почетна страна</Link>
              <Link className="nav-link" to="/clanovi">Чланови парламента</Link>
              <Link className="nav-link" to="/materijali">Материјали</Link>
              <Link className="nav-link" to="/funkcije">Функције</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </Container>

      <div style={{padding:'60px'}}>
          <Route path="/" exact render={() => 
          <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle}/>} />
          
          <Route path="/clanovi" exact render={() => 
          <MembersPage title={this.state.clanovi.title} />} />
          
          <Route path="/materijali" exact render={() => 
          <MaterialsPage title={this.state.materijali.title} />} />
          
          <Route path="/funkcije" exact render={() => 
          <PositionPage title={this.state.funkcije.title} />} />
        </div>

      </Container>
        <Footer />
    </HashRouter>
    );
  }
}

export default App;

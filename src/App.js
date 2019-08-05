import React from 'react';
// import Bday from './bday/Bday';
import './App.scss';
import Expander from './components/Expander';
import Alert from 'react-bootstrap/Alert';
import Counter from './components/Counter';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home as Index } from './components/Home'
import Users from './components/Users'
import Gallery from './components/Gallery'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="container-fluid">
            <ul className="nav nav-pills nav-fill">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Users/">Users</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Gallery/">Gallery</Link></li>
            </ul>
          </nav>
        </div>
        <main>
          <Route path="/" exact component={Index} />
          <Route path="/Users/" component={Users} />
          <Route path="/Gallery/" component={Gallery} />
        </main>
      </Router>
  );
  }
}

export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Content } from "./components/Content";
import { Read } from "./components/Read";
import { Create } from "./components/Create";

class App extends React.Component {
  // Render must be defined when you inherit from react.component
  render() {
    return (
      <Router>
        {/* Everything inside return is written in JSX not JS */}
        <div className="App">
          {/*Bootstrap Blue Navbar using react-bootstrap imports */}
          {/* Changes url when clicked, this can be used with routing to swap in components */}
          <Navbar bg="info" variant="dark">
            <Container>
              <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          {/* show different component based on url (client side routing using react-router-dom)*/}
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/read" element={<Read />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Content } from "./components/content";
import { Reviews } from "./components/reviews";
import { CreateReview } from "./components/createReview";
import { EditReview } from "./components/editReview";

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
              <Navbar.Brand href="/">TV Show Reviews</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/reviews">View Reviews</Nav.Link>
                <Nav.Link href="/createReview">Add Review</Nav.Link>
              </Nav>
              {/* <Nav>
                <Nav.Link href="/">Previous Entries</Nav.Link>
              </Nav> */}
            </Container>
          </Navbar>

          {/* show different component based on url (client side routing using react-router-dom)*/}
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/createReview" element={<CreateReview />} />
            <Route path='/editReview/:id' element={<EditReview />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

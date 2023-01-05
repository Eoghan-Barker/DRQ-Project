import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

export class ShowItem extends React.Component {
  constructor() {
    // Binding event is needed to handle event invoking
    super();
    this.DeleteShow = this.DeleteShow.bind(this);
  }
  DeleteShow(e) {
    e.preventDefault();

    // use axios to talk http to the server - this will delete a record from the database
    // we get a response and refresh the page
    axios
      .delete("http://localhost:4000/api/shows/" + this.props.show._id)
      .then((res) => {
        this.props.ReloadData();
      })
      .catch();
  }

  render() {
    return (
      <div>
        {/* Bootstrap Card for stylizing */}
        <Card>
          {/* Get object info from show array */}
          <Card.Header>{this.props.show.title}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <img src={this.props.show.poster} width="200" height="200" />
              <footer>{this.props.show.director}</footer>
            </blockquote>
          </Card.Body>
          {/* Add a link to the edit component on a button */}
          <Link to={"/edit/" + this.props.show._id} className="btn btn-primary">
            Edit
          </Link>
          {/* Add a red button to invoke a method to delete a show */}
          <Button variant="danger" onClick={this.DeleteShow}>
            Delete
          </Button>
        </Card>
      </div>
    );
  }
}

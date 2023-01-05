import React, { Component } from "react";
import axios from "axios";

export class CreateReview extends Component {
  constructor() {
    super();
    // Binding event is needed in constructor to handle event invoking
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeShowTitle = this.onChangeShowTitle.bind(this);
    this.onChangeShowDirector = this.onChangeShowDirector.bind(this);
    this.onChangeShowPoster = this.onChangeShowPoster.bind(this);
    this.onChangeShowRating = this.onChangeShowRating.bind(this);
    this.onChangeShowComments = this.onChangeShowComments.bind(this);
    this.state = {
      title: "",
      director: "",
      poster: "",
      rating: "",
      comments: "",
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(`${this.state.title},
    ${this.state.director}, ${this.state.poster}, ${this.state.rating}, ${this.state.comments}`);

    // Use axios to post the http request to the server (use post to embed data in the response)
    const show = {
      // object to pass up to the server
      title: this.state.title,
      poster: this.state.poster,
      director: this.state.director,
      rating: this.state.rating,
      comments: this.state.comments,
    };
    // async request
    axios.post("http://localhost:4000/api/shows", show).then().catch();

    // clear the state after logging
    this.setState({ title: "", director: "", poster: "" , rating: "", comments: ""});
  }

  // Add the inputed values to the state
  onChangeShowTitle(e) {
    this.setState({ title: e.target.value });
  }

  onChangeShowDirector(e) {
    this.setState({ director: e.target.value });
  }

  onChangeShowPoster(e) {
    this.setState({ poster: e.target.value });
  }

  onChangeShowRating(e) {
    this.setState({ rating: e.target.value });
  }

  onChangeShowComments(e) {
    this.setState({ comments: e.target.value });
  }

  render() {
    return (
      <div>  
        {/* React form acts similarly to html one, uses JSX
        Invoke methods on submit button press and when the input value is changed
        to update the state */}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Add Show Title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeShowTitle}
            />
          </div>
          <div className="form-group">
            <label>Add Show Director: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.director}
              onChange={this.onChangeShowDirector}
            />
          </div>
          <div className="form-group">
            <label>Add Show Poster: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.poster}
              onChange={this.onChangeShowPoster}
            />
          </div>
          <div className="form-group">
            <label>Add Rating: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.rating}
              onChange={this.onChangeShowRating}
            />
          </div>
          <div className="form-group">
            <label>Add Comments: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.comments}
              onChange={this.onChangeShowComments}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function EditReview(props) {
  // The useParams hook returns an object of key/value pairs of
  // the dynamic params from the current URL that were matched by
  //the <Route path>.
  let { id } = useParams();
  // update arrays using the React useState()
  // and without the Array object's push() method
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [director, setDirector] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");
  // useNavigate return a function that we can use to navigate
  const navigate = useNavigate();
  //useEffect Hook is similar componentDidMount
  useEffect(() => {
    //axios is a promised based web client
    //make a HTTP Request with GET method and pass as part of the
    //url.
    axios
      .get("http://localhost:4000/api/shows/" + id)
      .then((response) => {
        // Assign Response data to the arrays using useState.
        setTitle(response.data.title);
        setPoster(response.data.poster);
        setDirector(response.data.director);
        setRating(response.data.rating);
        setComments(response.data.comments);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // need to create a function in a variable to handle the submit event on the form
  const handleSubmit = (event) => {
    event.preventDefault();
    const newShow = {
      id: id,
      title: title,
      poster: poster,
      director: director,
      rating: rating,
      comments: comments,
    };

    axios.put("http://localhost:4000/api/show/" + id, newShow).then((res) => {
      console.log(res.data);
      navigate("/reviews");
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add TV Show Title: </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Add poster URL: </label>
          <input
            type="text"
            className="form-control"
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Add Director: </label>
          <input
            type="text"
            className="form-control"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Rating: </label>
          <input
            type="text"
            className="form-control"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Comments: </label>
          <input
            type="text"
            className="form-control"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Edit Show" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

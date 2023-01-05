import React from "react";
import { ShowItem } from "./showItem";

export class Shows extends React.Component {
  render() {
    // Arrow function to return all of the objects from the shows array
    return this.props.shows.map((show) => {
      //map function makes showItem component and passes each one a show,
      //added a key to stop infinate components from being made

      return (
        <ShowItem
          show={show}
          key={show._id}
          ReloadData={this.props.ReloadData}
        ></ShowItem>
      );
    });
  }
}

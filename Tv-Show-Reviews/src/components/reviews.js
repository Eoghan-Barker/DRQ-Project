import React from 'react';
import { Shows } from './shows';
import axios from 'axios';
import CardGroup from "react-bootstrap/CardGroup"
import { NoReviews } from './noReviews';

export class Reviews extends React.Component {

    constructor(){
        super();
        // event binding
        this.ReloadData = this.ReloadData.bind(this);

        
    }

    // state is used to pass items down to children using state.props.xxx <= json data headers
    // make http request using httpclient axios to pull json data
    // axios makes a http request to the api
    componentDidMount() {
        // promise -result of an async operation
        axios.get('http://localhost:4000/api/shows')
        //callback function - a function is passed as an argument to the function
        .then((response)=> {
            this.setState({
               shows:response.data
            })
            // this function is fulfilling the promise
        })
        .catch((error)=>{console.log(error)});   // handles rejected path
    }

    // DeleteShow does not remove the TV show from the screen untill manually refreshed
    // Use this method to do it automatically
    ReloadData() {
        axios.get('http://localhost:4000/api/shows')
        .then((response)=> {
            this.setState({
               shows:response.data
            })
        })
        .catch((error)=>{console.log(error)});
    }
    
    state = {
        // Show Array of show objects
        shows: [ ]
    }

    
    
    render(){
        // Condition Rendering - if there are no items in the shows array then render the NoReviews component
        // otherwise render the CardGroup of shows
        if(this.state.shows.length <= 0){
            return <NoReviews />;
        }

        return(
            <div>
                {/* Embed component in this component, pass shows array to Shows componant */}
                {/* Use a cardGroup to align the cards horizontally */}
                <CardGroup>
                <Shows shows={this.state.shows} ReloadData={this.ReloadData}/>
                </CardGroup>
            </div>
        );
    }
}
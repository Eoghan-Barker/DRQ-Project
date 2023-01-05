import React from 'react';
import { Shows } from './shows';
import axios from 'axios';

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
        return(
            <div>
                <h3>You have not created any reviews yet. Once you do they will appear here.</h3>
                {/* Embed component in this component, pass shows array to Shows componant */}
                <Shows shows={this.state.shows} ReloadData={this.ReloadData}/>
            </div>
        );
    }
}
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { link } from "fs";
import Form from "./components/Form";

class App extends Component {
  //This will set the state, by default we are setting senators to an empty Array
  state = {
    senators: []
  };

  //see article on componentDidMount vs componentWillMount
  //https://medium.com/coffee-and-codes/componentdidmount-v-s-componnetwillmount-react-47f4f631276c
  componentDidMount() {
    //This will fetch the data
    fetch(
      "https://raw.githubusercontent.com/CivilServiceUSA/us-senate/master/us-senate/data/us-senate.json"
    )
      //this turns the returned data in JSON
      .then(response => {
        return response.json();
      })
      //This will set state, you can keep the console log the data in the console or remove it form this code
      //It may be a good idea to keep it for reference until you have displayed that data that you need
      .then(data => {
        console.log("data:", data);
        this.setState({ senators: data });
      });
  }

  render() {
    const senatorsList = this.state.senators.map(senator => {
      return (
        <div>
          <h5>{senator.name}</h5>
          <h6>{senator.state_name}</h6>
          <h6>{senator.contact_page}</h6>
        </div>
      );
    });

    return (
      <div className="App">
        <h1>hello</h1>
        <Form />
        {senatorsList}
        {/* This is how you could use map to loop over the data to display what you want */}
        {/* sort is a mutable function that changes the Array */}
        {/* {this.state.senators.sort((a, b) => a.itemM > b.itemM)
       .map((senator)=> (
       <div>
         <h1>Name: {senator.name}</h1>
         <h2>State: {senator.state_name}</h2>
         <button>Gender: {senator.gender}</button>
         </div>))} */}

        {/* end of map */}
      </div>
    );
  }
}

export default App;

import React, {Component} from "react";
import {PropTypes} from "prop-types";
import { Meteor } from "meteor/meteor";
import { createContainer} from "meteor/react-meteor-data"

import TweetsResults from "./TweetsResults.jsx";
import TwitterNetwork from "./TwitterNetwork.jsx";
import {Tweets} from "../api/Tweets.js";
import ColombiaMap from "./ColombiaMap.jsx";
import Overlay from "./Overlay.jsx";

export class App extends Component {
  constructor(props) {
    super(props);
    this.projection=null;

  }
  setProjection(p){
    this.projection =p;
  }

  getProjection(){
    return this.projection;
  }
  changeQuery(evt) {
    if (evt.key !== "Enter") {
      return;
    }
    // "this" will change in the method call, so I need to save it
    let component = this;

    console.log(evt.target.value);
    console.log('before Meteor call');
    Meteor.call("twitter.stream", evt.target.value);
    console.log('after Meteor call');
  }


  render() {
    console.log("render!");
    return (
      <div>
        <ColombiaMap
          width="600"
          height="600"
          data={{RISARALDA:10, CALDAS:12}} setProjection={this.setProjection.bind(this)}
        ></ColombiaMap>
      <Overlay width="600" height="600" getProjection={this.getProjection.bind(this)} tweets={this.props.tweets} />
        <input type="text" onKeyPress={this.changeQuery.bind(this)} placeholder="Query"/>
        { this.props && this.props.err ?
          <div>Error: {this.props.err}</div> :
          <span></span>
        }
        <h2>Results:</h2>
        {this.props && this.props.tweets ?

          <TweetsResults  tweets={this.props.tweets}/>:
          <p>Enter a query</p>
        }

      </div>
    );
  }
}

App.propTypes = {
  tweets : PropTypes.array.isRequired
};

export default AppContainer = createContainer(() => {
  Meteor.subscribe("tweets");


  return {
    tweets: Tweets.find({}).fetch()
  };
}, App);

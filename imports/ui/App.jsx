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
    Meteor.call("twitter.stream", evt.target.value);
  }
  getTweets(){
    let component = this;
    Meteor.call("twitter.stream", "");

  }


  render() {
    console.log("render!");
    return (
      <div className="container">
      <div className="row">
        <div className="col-md-6">


        <ColombiaMap
          width="500"
          height="500"
          data={{RISARALDA:10, CALDAS:12}} setProjection={this.setProjection.bind(this)}
        ></ColombiaMap>
      <Overlay width="500" height="500" getProjection={this.getProjection.bind(this)} tweets={this.props.tweets} />
      </div>
      <div className="col-md-6">
        <h1>Colombia Visualization React</h1>
        <h2><a href="https://github.com/jgmurillo10" target="_blank"><i className="fa fa-github fa-fw"></i> @jgmurillo10</a></h2>

        <div className="row">
          <div className="form-horizontal" >
            <div className="form-group">
              <label className="control-label col-sm-6">Buscar palabra específica:</label>
              <div className="col-sm-4">
                <input type="text" placeholder="Falcao" className="form-control" onKeyPress={this.changeQuery.bind(this)} />
              </div>
            </div>
            <hr></hr>


            <div className="form-group">
              <label className="control-label col-sm-6">Buscar todos los tweets en colombia:</label>
              <div className="col-sm-6">
                <button type="button"  className="btn" onClick={this.getTweets.bind(this)}> Buscar </button>
              </div>
            </div>
          </div>
        { this.props && this.props.err ?
          <div>Error: {this.props.err}</div> :
          <span></span>
        }

        {this.props && this.props.tweets ?

          <TweetsResults  tweets={this.props.tweets}/>:
          <p>Enter a query</p>
        }
        </div>
      </div>
    </div>
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

import React, {Component} from "react";
import { Meteor } from "meteor/meteor";



export default class Tweet extends Component {
  render() {
    return (<div className="tweet">

    <h1>{this.props.tweet.user.screen_name} </h1>
    	<p>{this.props.tweet.created_at} </p>
    	<img src={this.props.tweet.user.profile_image_url} alt={this.props.tweet.user.screen_name + "profile image"}/>
      <p>{this.props.tweet.text} </p>
      <br></br>
      {/*<span>{JSON.stringify(this.props.tweet)}</span>*/}
    </div>);
  }
}

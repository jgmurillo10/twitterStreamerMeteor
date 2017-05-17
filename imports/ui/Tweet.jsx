import React, {Component} from "react";
import { Meteor } from "meteor/meteor";

import './Tweet.css';

export default class Tweet extends Component {
  render() {
    return (
      <div className="tweet">
        <div className="row">
          <div className="col-md-2">
            <img src={this.props.tweet.user.profile_image_url} className="img-responsive" alt={this.props.tweet.user.screen_name + "profile image"}/>
          </div>
          <div className="col-md-10">
            <a target="_blank" href={'https://twitter.com/'+this.props.tweet.user.screen_name}>@{this.props.tweet.user.screen_name} </a>
            <p>{this.props.tweet.created_at} </p>
            <p>{this.props.tweet.text} </p>
          </div>

        </div>

    </div>);
  }
}

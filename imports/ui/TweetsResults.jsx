import React, {Component} from "react";


import Tweet from "./Tweet.jsx";

export default class TweetResults extends Component {
  constructor(props){
    super(props);

  }
  renderTweets() {
    return this.props.tweets.map((tweet) => {
      if(tweet.coordinates)
        return (<Tweet key={tweet.id} tweet={tweet}/>);
    });
  }

  render() {
    return (
      <div className="tweetResults">
        {this.renderTweets()}
      </div>
    );
  }
}

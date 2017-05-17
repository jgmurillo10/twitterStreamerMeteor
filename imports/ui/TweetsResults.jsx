import React, {Component} from "react";


import Tweet from "./Tweet.jsx";

export default class TweetResults extends Component {
  constructor(props){
    super(props);

  }
  renderTweets() {
    return this.props.tweets.map((tweet) => {
      if(tweet.coordinates && tweet.user.location && !(tweet.user.location.includes('Venezuela')|| tweet.user.location.includes('Ecuador')))
        return (<Tweet key={tweet.id} tweet={tweet}/>);
    });
  }

  render() {
    return (
      <div>


        <div className="tweetResults">

          {this.renderTweets()}
        </div>
      </div>
    );
  }
}

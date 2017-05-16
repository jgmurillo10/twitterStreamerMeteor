import React, {Component} from "react";


export default class Overlay extends Component{
  constructor(props){
    super(props);
    this.canvas=null;
    //this.projection= this.props.getProjection();
  }
  componentWillUpdate(nextProps){

    let ctx = this.canvas.getContext("2d");
    ctx.fillStyle = "rgb(200,0,0)";

    nextProps.tweets.forEach((tweet)=>{
      if(tweet.coordinates){
        console.log(tweet);
        console.log(this.props.getProjection()(tweet.coordinates.coordinates));
        var p=this.props.getProjection()(tweet.coordinates.coordinates);
        let x= p[0], r=10, y=p[1];
        console.log(x,y);
        ctx.fillText(tweet.user.screen_name, x+20,y+r/2);
        ctx.moveTo(x,y);
        ctx.arc(x,y,r,0,2*Math.PI)
      }

    });
    ctx.fill();



    //tweet.coordinates.coordinates
    //p = this.projection(tweet.coordinates.coordinates);



  }
  getTweets() {
    return this.props.tweets.map((tweet) => {
      if(tweet.coordinates)
        return (<Tweet key={tweet.id} tweet={tweet}/>);
    });
  }
  render(){
    return(
      <canvas className="canvasMap" width={this.props.width} height={this.props.height} ref={(canvas)=>{this.canvas=canvas}}></canvas>
    )
  }
}

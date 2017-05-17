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
        let x= p[0], r=5, y=p[1];
        console.log(x,y);
        ctx.fillText(tweet.user.screen_name, x+20,y+r/2);
        ctx.moveTo(x,y);

        // ctx.strokeStyle = "#f00";
        // ctx.stroke();
        ctx.beginPath();
        ctx.arc(x,y,r,0,2*Math.PI, false);
        ctx.fillStyle = 'green';
        //context.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#003300';
        ctx.stroke();


      }

    });




    //tweet.coordinates.coordinates
    //p = this.projection(tweet.coordinates.coordinates);



  }
  getTweets() {
    return this.props.tweets.map((tweet) => {
      if(tweet.coordinates && tweet.user.location && !(tweet.user.location.includes('Venezuela')|| tweet.user.location.includes('Ecuador')))
        return (<Tweet key={tweet.id} tweet={tweet}/>);
    });
  }
  render(){
    return(
      <div>
      <canvas className="canvasMap" width={this.props.width} height={this.props.height} ref={(canvas)=>{this.canvas=canvas}}></canvas>
      </div>
  )
  }
}

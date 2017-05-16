import React, {Component} from "react";
import { Meteor } from "meteor/meteor";
import d3 from "d3";
export default class TwitterNetwork extends Component {
  constructor(props){
    super(props);
    this.width=400;
    this.height=400;
  }
  componentDidMount(){
    console.log('didMount');
    var simulation = d3.forceSimulation(nodes)
    .velocityDecay(0.2)
    .force("x", d3.forceX().strength(0.002))
    .force("y", d3.forceY().strength(0.002))
    .force("collide", d3.forceCollide().radius(function(d) { return d.r + 0.5; }).iterations(2))
    .on("tick", ticked);


  }
  ticked() {
    context.clearRect(0, 0, this.width, this.height);
    context.save();
    context.translate(this.width / 2, this.height / 2);

    context.beginPath();
    nodes.forEach(function(d) {
      context.moveTo(d.x + d.r, d.y);
      context.arc(d.x, d.y, d.r, 0, tau);
    });
    context.fillStyle = "#ddd";
    context.fill();
    context.strokeStyle = "#333";
    context.stroke();

    context.restore();
  }


  componentDidUpdate(){
    console.log('didUpdate');

    let canvas= d3.select("#twitterNetwork").nodes()[0];
    this.ctx = canvas.getContext("2d");
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = "rgb(200,0,0)";


    this.props.tweets.forEach((t,i)=>{
      let x= 100, r=10, y= Math.PI*2 + i*r*3;
      //ctx.beginPath();
      this.ctx.fillText(t.user.screen_name, x+20,y+r/2);
      this.ctx.moveTo(x,y);
      this.ctx.arc(x,y,r,0,2*Math.PI);
      //ctx.closePath();
    });

    this.ctx.stroke();
  }
  render(){
    return (
      <canvas id="twitterNetwork" width={this.width} height={this.height}></canvas>
    )
  }
}

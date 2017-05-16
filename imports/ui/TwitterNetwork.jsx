import React, {Component} from "react";
import {Meteor} from "meteor/meteor";
import d3 from "d3";

export default class TwitterNetwork extends Component{
  constructor(props){
    super(props);
    this.width=500;
    this.height=500;
    this.simulation;
  }
  componentDidMount(){
    console.log("hace mount");

  }
  componentDidUpdate(){
    var canvas = document.querySelector("canvas"),
      context = canvas.getContext("2d"),
      width = canvas.width,
      height = canvas.height,
      tau = 2 * Math.PI;
      var nodes = [];
      this.props.tweets.forEach((t,i)=>{
        console.log("considera tweets");
        let x= 100, r=10, y= Math.PI*2 + i*r*3;
        let node = {x: 100, r: 10, y:Math.PI*2 + i*r*3,screen_name: t.user.screen_name};
        nodes.push(node);
      });
    simulation = d3.forceSimulation(nodes)
        .velocityDecay(0.5)
        .force("charge", d3.forceManyBody())
        .force("x", d3.forceX().strength(0.002))
        .force("y", d3.forceY().strength(0.002))
        .force("collide", d3.forceCollide().radius(function(d) { return d.r + 2; }).iterations(2))
        .on("tick", ticked);

    function ticked() {
      context.clearRect(0, 0, this.width, this.height);
      context.save();
      context.translate(this.width / 2, this.height / 2);

      context.beginPath();
      nodes.forEach(function(d) {
        context.moveTo(d.x + d.r, d.y);
        context.arc(d.x, d.y, d.r, 0, tau);
        context.fillText(d.screen_name, d.x+20,d.y+d.r/2);



      });
      context.fillStyle = "rgb(200,0,0)";
      //context.fill();
      context.strokeStyle = "rgb(200,0,0)";
      context.stroke();
      context.restore();
    }
  }
  render(){
    return(
      <canvas id="twitterNetwork" width={this.width} height={this.height}></canvas>
    )
  }
}

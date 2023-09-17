import React from "react";



class Item extends React.Component {

    constructor(props) {
      super(props)

      this.state = {
          clicks: 0,
          remaining: 100
      }
    }


    clickMe(){
      this.setState({
        clicks: this.state.clicks + 1,
        remaining: this.state.remaining - 1
      })
    }


    render(){
      return (
        <div>
        <h1 onClick={() => this.clickMe()}>Hello World from {this.props.name} </h1>
        <span>Number of Clicks :{this.state.clicks}. Remaining: {this.state.remaining}</span>
        </div>
      )
    }
  }


  export default Item;

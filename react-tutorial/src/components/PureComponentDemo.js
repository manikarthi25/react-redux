import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';

 class PureComponentDemo extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : "Pure Component Demo"
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name : "Changed Pure Component Name"
            })
        }, 2000);
    }

  render() {
    console.log("===========PureComponentDemo===========")
    return (
      <div>
        <RegComp name = {this.state.name}></RegComp>
        <PureComp name = {this.state.name}></PureComp>
      </div>
    )
  }
}

export default PureComponentDemo
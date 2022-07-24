import React, { Component } from 'react'
import MemoComp from './MemoComp'

class ParentMemoCompDemo extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : "Memo Component Demo"
      }
      this.changeState = this.changeState.bind(this)
    }

    changeState = () => {
        setInterval(() => {
            this.setState({
                name : "Memo Component Demo Changed state"
            })
        }, 2000)
    }

  render() {
    console.log("ParentMemoCompDemo - called")
    return (
      <div>
        <MemoComp name = {this.state.name}/>
        <button onClick = {this.changeState}>Change State</button>
      </div>
    )
  }
}

export default ParentMemoCompDemo
import React, { Component } from 'react'
import ForwardRefChild from './ForwardRefChild';

class ForwardRefParent extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef();
      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler =() => {
        this.inputRef.current.focus()
        alert(this.inputRef.current.value)
    }

  render() {
    return (
      <div>
        <ForwardRefChild ref = {this.inputRef}/>
        <button onClick={this.clickHandler}>Forward Ref</button>
      </div>
    )
  }
}

export default ForwardRefParent
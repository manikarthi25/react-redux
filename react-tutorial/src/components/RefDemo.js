import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
    super(props)
        this.inputRef = React.createRef()
        this.changeHandler = this.changeHandler.bind(this)
    }

    componentDidMount() {
        this.inputRef.current.focus()
        console.log("RefDemo Render")
        console.log("logged input ref object", this.inputRef)
    }

    changeHandler = () => {
        alert(this.inputRef.current.value);
    }

  render() {
    return (
      <div>
        <input type = "text" ref = {this.inputRef} />
        <button onClick={this.changeHandler}>Ref Demo</button>
      </div>
    )
  }
}

export default RefDemo
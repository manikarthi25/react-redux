import React, { Component } from 'react'

export class FormHandling extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            address:'',
            games:'cricket'
        }
        this.userNameChangeHandler = this.userNameChangeHandler.bind(this)
        this.addressChangeHandler = this.addressChangeHandler.bind(this)
        this.gamesChangeHandler = this.gamesChangeHandler.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

userNameChangeHandler = (event) => {
    this.setState({
        userName : event.target.value
    })
}

addressChangeHandler = (event) => {
    this.setState({
        address : event.target.value
    })
}

gamesChangeHandler = (event) => {
    this.setState({
        games : event.target.value
    })
}

handleSubmit = event => {
    alert(`UserName : ${this.state.userName} , Address : ${this.state.address} , games : ${this.state.games}`)
}
    
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>User Name</label>
                <input type = "text" value = {this.state.userName} onChange = {this.userNameChangeHandler} />
            </div>
            <div>
                <label>Address</label>
                <textarea value = {this.state.address} onChange = {this.addressChangeHandler} />
            </div>
            <div>
                <label>Games</label>
                <select value = {this.state.games} onChange = {this.gamesChangeHandler}>
                    <option value = 'cricket'>Cricket</option>
                    <option value = 'vollyball'>vollyball</option>
                    <option value = 'basketball'>basketball</option>
                </select>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>               
      </div>
    )
  }
}

export default FormHandling
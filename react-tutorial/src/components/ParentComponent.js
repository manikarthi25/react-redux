import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parentName : "Parent"
        }
        this.getParent = this.getParent.bind(this)
    }

    getParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
    render() {
        return (
            <div>
               <ChildComponent sendDataToParent = {this.getParent}></ChildComponent>
            </div>
        );
    }
}

export default ParentComponent
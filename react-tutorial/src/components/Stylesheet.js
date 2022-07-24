import React from 'react'
import '../css/appStyles.css';
import styles from '../css/appStyles.module.css';

const heading = {
    fontSize: '25px',
    color: 'blue'
}

function Stylesheet(props) {
    let className = props.colorName ? 'success' : 'failure';
  return (
    <div>
        <h3 className = {`${className}`}>CSS Stylesheet</h3>
        <h3 style = {heading}>Inline Stylesheet </h3>
        <h3 className = 'secondary'>External Stylesheet</h3>
        <h3 className = {styles.primary}>Module Stylesheet</h3>
    </div>
  )
}

export default Stylesheet;

import React from 'react'

export default function ConditionalRendering() {
    let isTrue = true;
    let message = '';
  return (
    <div>
        {
            isTrue ? message = <h3>This is true</h3> : message = <h3>This is false</h3>
        }
        {message}
    </div>
  )
}

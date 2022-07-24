import React from 'react'

function MemoComp(props) {
    console.log("MemoComp - called")
  return (
    <div>
        <h3>{props.name}</h3>
    </div>
  )
}

export default React.memo(MemoComp)
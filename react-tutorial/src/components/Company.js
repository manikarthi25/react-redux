import React from 'react'

function Company(props) {
    
    if(props.companyName === "CTS") {
        throw new Error("This is not correct company")
    }

  return (
    <div>
        {props.companyName}
    </div>
  )
}

export default Company
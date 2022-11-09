import React from 'react'

const Message = ({ msg, bgColor }) => {
  return (
    <div>
        <h2 style={`background-color: ${bgColor}`}>{msg}</h2>
    </div>
  )
}

export default Message
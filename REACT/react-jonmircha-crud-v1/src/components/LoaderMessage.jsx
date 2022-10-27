import React from 'react'

 const LoaderMessage = ( {sms, color}) => {

  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: color,
    fontWeight: "bold"
  }


  return (
    <div>
        <h2 style={styles}>{sms}</h2>
    </div>
  )
}

export default LoaderMessage;

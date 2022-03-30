import React from "react"

const GifGridItem = ({title, url}) => {
  
  return(
    <div className="card animate__animated animate__bounceIn animate__delay-2s">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}

export { GifGridItem }
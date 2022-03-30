// import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { GifGridItem } from "./GifGridItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

const GifGrid = ({ category }) => {

  const { data:images, loading } = useFetchGifs(category)

  // //const [count, setCount] = useState(0)

  return(
    <>
      <h3 className="animate__animated animate__bounceIn">{ category }</h3>
      { loading && <p>loading</p>}
      <div className="card-grid">
          {
            images.map( (img) => (
              <GifGridItem
                key={ img.id }
                { ...img }
              />
            ))
          }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export { GifGrid }
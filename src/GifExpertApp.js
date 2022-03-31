import React, { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

const GifExpertApp = ({defaultCategories = []}) => {
  const [categories, setCategories] = useState(defaultCategories)

  //const handleAdd = () => {
    //HunterXHunter
    //setCategories([...categories, 'HunterXHunter'])
    //setCategories( cats => [...cats, 'HunterXHunter'])
  //}

  return(
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr/>
      <ol>
        {
          categories.map(category => (
            <GifGrid
              key={ category }
              category={ category }/>
          ))
        }
      </ol>
    </div>
  )
}

export { GifExpertApp }
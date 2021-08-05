import React from "react"
import DishCard from "./DishCard"

const DishesList = ({}) => {
  return (
    <div className="grid grid-cols-3 gap-7">
      <DishCard />
      <DishCard />
      <DishCard />
    </div>
  )
}

export default DishesList

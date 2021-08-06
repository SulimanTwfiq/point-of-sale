import React, { useState } from "react"
import Header from "./Header"
import ChooseDishes from "./ChooseDishes"
const Dishes = ({ setCart }) => {
  return (
    <div className="p-6 ">
      <Header />
      <ChooseDishes setCart={setCart} />
    </div>
  )
}

export default Dishes

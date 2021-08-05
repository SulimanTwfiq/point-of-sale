import React from "react"
import Cart from "./Cart"
import Dishes from "./Dishes"

const HomePage = () => (
  <div className="grid grid-cols-homePage">
    <Dishes />
    <Cart />
  </div>
)

export default HomePage

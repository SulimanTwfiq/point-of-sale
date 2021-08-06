import React, { useState } from "react"
import Cart from "./Cart"
import Dishes from "./Dishes"
import Layout from "components/Layout"
const HomePage = () => {
  const [cart, setCart] = useState([])
  return (
    <Layout>
      <div className="grid h-screen grid-cols-[2fr,1fr]">
        <Dishes cart={cart} setCart={setCart} />
        <Cart />
      </div>
    </Layout>
  )
}

export default HomePage

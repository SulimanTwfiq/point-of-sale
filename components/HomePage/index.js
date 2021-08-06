import React from "react"
import Cart from "./Cart"
import Dishes from "./Dishes"
import Layout from "components/Layout"
const HomePage = () => (
  <Layout>
    <div className="grid h-screen grid-cols-[2fr,1fr]">
      <Dishes />
      <Cart />
    </div>
  </Layout>
)

export default HomePage

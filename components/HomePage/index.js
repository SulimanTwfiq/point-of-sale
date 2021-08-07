import React, { useReducer, useState } from "react"
import Cart from "./Cart"
import Layout from "components/Layout"
import cartReducer from "utills/reducers/cartReducer"
import Header from "./Header"
import MenuCategoriesTabs from "./MenuCategoriesTabs"
import { orderTypes } from "utills/constants"
import { Select } from "components/shared"
import DishesList from "./DishesList"

const HomePage = () => {
  const [cart, dispatchCart] = useReducer(cartReducer, [])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [dishSearch, setDishSearch] = useState("")
  return (
    <Layout>
      <div className="grid h-screen grid-cols-[2fr,1fr]">
        {/* Left section  */}
        <div className="p-6 ">
          <Header setDishSearch={setDishSearch} />
          <MenuCategoriesTabs
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className="flex items-center justify-between my-10">
            <h2 className="text-lg font-bold text-white ">Choose Dishes</h2>
            <SelectOrderType />
          </div>
          <DishesList
            dishSearch={dishSearch}
            dispatchCart={dispatchCart}
            selectedCategory={selectedCategory}
          />
        </div>
        {/* Right section */}
        <Cart cart={cart} dispatchCart={dispatchCart} />
      </div>
    </Layout>
  )
}

const SelectOrderType = () => {
  return <Select options={orderTypes} />
}
export default HomePage

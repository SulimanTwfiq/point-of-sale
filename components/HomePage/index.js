import React, { useEffect, useReducer, useState } from "react"
import Cart from "./Cart"
import { cartReducer, initialCartState } from "utills/reducers/cartReducer"
import Header from "./Header"
import MenuCategoriesTabs from "./MenuCategoriesTabs"
import { orderTypes } from "utills/constants"
import { Select } from "components/shared"
import DishesList from "./DishesList"
import { useMenuQuery } from "hooks/react-query/useMenu"

const HomePage = () => {
  const menuQuery = useMenuQuery()
  const [cart, dispatchCart] = useReducer(cartReducer, initialCartState)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [dishSearch, setDishSearch] = useState("")

  return (
    <div className="grid h-screen grid-cols-[2fr,1fr]">
      {/* Left section  */}
      <div className="p-6 pb-0 ">
        <Header dishSearch={dishSearch} setDishSearch={setDishSearch} />
        <MenuCategoriesTabs
          menuQuery={menuQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="flex items-center justify-between mb-9 mt-7">
          <h2 className="text-lg font-bold text-white ">Choose Dishes</h2>
          <Select className="w-32" options={orderTypes} />
        </div>
        <DishesList
          menuQuery={menuQuery}
          dishSearch={dishSearch}
          dispatchCart={dispatchCart}
          selectedCategory={selectedCategory}
        />
      </div>
      {/* Right section */}
      <Cart cart={cart} dispatchCart={dispatchCart} />
    </div>
  )
}

export default HomePage

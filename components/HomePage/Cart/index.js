import React, { useState } from "react"
import { orderTypes } from "utills/constants"
import ChooseOrderTypeButtons from "./ChooseOrderTypeButtons"
import CartProductItem from "./CartProductItem"
import CartProductItemsListHeader from "./CartProductItemsListHeader"
import CartFooter from "./CartFooter"

const Cart = () => {
  const [selectedOrderType, setSelectedOrderType] = useState(orderTypes[0])
  return (
    <div className="flex flex-col justify-between p-5 bg-secondary-1100">
      <div>
        <h1 className="text-xl">Orders #34562</h1>
        <ChooseOrderTypeButtons
          selectedOrderType={selectedOrderType}
          setSelectedOrderType={setSelectedOrderType}
        />
        <CartProductItemsListHeader />
        <CartProductItem />
        <CartProductItem />
      </div>
      <CartFooter />
    </div>
  )
}

export default Cart

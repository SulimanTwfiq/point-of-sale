import React, { useState } from "react"
import ChooseOrderTypeButtons from "./ChooseOrderTypeButtons"
import { orderTypes } from "utills/constants"

const Cart = () => {
  const [selectedOrderType, setSelectedOrderType] = useState(orderTypes[0])
  return (
    <div className="p-7 bg-secondary-1100">
      <h1 className="text-xl">Orders #34562</h1>
      <ChooseOrderTypeButtons
        selectedOrderType={selectedOrderType}
        setSelectedOrderType={setSelectedOrderType}
      />
    </div>
  )
}

export default Cart

import React from "react"
import ChooseOrderTypeButtons from "./ChooseOrderTypeButtons"
import CartProductItem from "./CartProductItem"
import CartProductItemsListHeader from "./CartProductItemsListHeader"
import CartFooter from "./CartFooter"

const Cart = ({ cart, dispatchCart }) => {
  return (
    <div className="flex flex-col justify-between p-5 bg-secondary-1100">
      <div>
        <h1 className="text-xl">Orders #34562</h1>
        <ChooseOrderTypeButtons />
        <CartProductItemsListHeader />
        {cart.map((item) => (
          <CartProductItem key={item.name} item={item} dispatchCart={dispatchCart} />
        ))}
      </div>
      <CartFooter cart={cart} />
    </div>
  )
}

export default Cart

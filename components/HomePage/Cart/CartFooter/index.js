import React from "react"
import { Button, showToast } from "components/shared"
import { formatPrice } from "utills/common"
import { ACTIONS } from "utills/reducers/cartReducer"

const CartFooter = ({ cart, dispatchCart }) => {
  const subTotal = cart.reduce((total, product) => total + product.quantity * product.price, 0)

  return (
    <div className="pt-5 mt-1 border-t border-[#393C49] ">
      <RowInfo title="Discount" />
      <RowInfo title="Sub total" total={subTotal} />
      <Button
        onClick={() => {
          if (subTotal === 0) {
            showToast("error", "empty cart , please fill it . ")
          } else {
            showToast("success", "The order is sent to kitchen successfully !")
            dispatchCart({ type: ACTIONS.CLEAR_CART })
          }
        }}
        className="w-full h-[50px] font-bold shadow-tertiary mt-7 hover:scale-105 transition duration-500 ease-in-out"
      >
        Continue to Payment
      </Button>
    </div>
  )
}
const RowInfo = ({ title, total = 0 }) => {
  return (
    <div className="flex justify-between mb-3">
      <p className="text-[#ABBBC2]">{title}</p>
      <p>{formatPrice(total)}</p>
    </div>
  )
}

export default CartFooter

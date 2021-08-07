import React from "react"
import { Button } from "components/shared"
import { formatPrice } from "utills/common"
const CartFooter = ({ cart }) => {
  const subTotal = cart.reduce((total, product) => total + product.quantity * product.price, 0)

  return (
    <div className="pt-5 mt-1 border-t border-[#393C49] ">
      <RowInfo title="Discount" />
      <RowInfo title="Sub total" total={subTotal} />
      <Button className="w-full h-[50px] font-bold shadow-tertiary mt-7">
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

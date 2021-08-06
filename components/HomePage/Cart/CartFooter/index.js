import React from "react"
import { Button } from "components/shared"
const CartFooter = () => {
  return (
    <div className="pt-5 mt-1 border-t border-[#393C49] ">
      <RowInfo title="Discount" total="$0" />
      <RowInfo title="Sub total" total="$21,03" />
      <Button className="w-full h-[50px] font-bold shadow-tertiary mt-7">
        Continue to Payment
      </Button>
    </div>
  )
}
const RowInfo = ({ title, total }) => {
  return (
    <div className="flex justify-between mb-3">
      <p className="text-[#ABBBC2]">{title}</p>
      <p>{total}</p>
    </div>
  )
}

export default CartFooter

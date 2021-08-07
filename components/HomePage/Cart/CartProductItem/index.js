import React from "react"
import { Button, TextInput } from "components/shared"
import Image from "next/image"
import Dish from "public/Dish.png"
import { ACTIONS } from "utills/reducers/cartReducer"
import { formatPrice } from "utills/common"

const CartProductItem = ({ item, dispatchCart }) => {
  const { id, name, quantity, price } = item
  console.log("quantity", quantity)
  return (
    <div className="grid gap-3 mb-6 grid-cols-cartProductItemContainer">
      {/* left section */}
      <div>
        <div className="grid gap-2 mb-2 grid-cols-cartProductItemTopSection">
          <Image src={Dish} alt={"TEMP_alt"} width={25} height={25} />
          <div>
            <p className="text-sm line-clamp-1">{name}</p>
            <p className="text-sm text-gray-400">{formatPrice(price)}</p>
          </div>
          <TextInput
            value={quantity}
            inputClassName="px-1 py-0 text-center 	"
            type="number"
            min={1}
            onChange={(e) => {
              dispatchCart({
                type: ACTIONS.EDIT_PRODUCT,
                payload: { id, quantity: e.target.value },
              })
            }}
            onBlur={(e) => {
              // if the value is lower than one , remove the product from the cart .
              if (e.target.value < 1) {
                dispatchCart({
                  type: ACTIONS.REMOVE_PRODUCT,
                  payload: { id },
                })
              }
            }}
          />
        </div>
        <TextInput placeholder="Order Note..." />
      </div>
      {/* right section */}
      <div className="flex flex-col justify-between ">
        <p className="flex items-center h-full text-sm">{formatPrice(price * quantity)}</p>
        <Button
          onClick={() => dispatchCart({ type: ACTIONS.REMOVE_PRODUCT, payload: { id } })}
          variant="outline"
          className="px-3 py-2 border-tertiary-450"
        >
          <Image
            src={"/icons/common/deleteIcon.svg"}
            className="rotate-[20deg]"
            alt="delete icon"
            width={20}
            height={20}
          />
        </Button>
      </div>
    </div>
  )
}

export default CartProductItem

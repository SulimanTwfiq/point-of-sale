import React from "react"
import { Button, TextInput } from "components/shared"
import Image from "next/image"
import { ACTIONS } from "utills/reducers/cartReducer"
import { formatPrice, getImageFromUnsplashAPI } from "utills/common"

const CartProductItem = ({ item, dispatchCart }) => {
  const { id, name, quantity, price, imagesUnsplashCollectionId } = item

  return (
    <div className="grid gap-3 mb-6 grid-cols-[1fr,50px]">
      {/* left column */}
      <div>
        <div className="grid gap-2 mb-2 grid-cols-[35px,1fr,50px]">
          <Image
            src={getImageFromUnsplashAPI({
              imagesUnsplashCollectionId,
              itemId: id,
              width: "160",
              height: "160",
            })}
            className="rounded-full"
            alt={name}
            width={35}
            height={35}
            layout="fixed"
          />
          <div>
            <p className="text-sm line-clamp-1">{name}</p>
            <p className="text-sm text-gray-400">{formatPrice(price)}</p>
          </div>
          <QuantityInput value={quantity} id={id} dispatchCart={dispatchCart} />
        </div>
        <TextInput placeholder="Order Note..." />
      </div>
      {/* right column */}
      <div className="flex flex-col justify-between ">
        <p className="flex items-center h-full text-sm">{formatPrice(price * quantity)}</p>
        <RemoveProductButton id={id} dispatchCart={dispatchCart} />
      </div>
    </div>
  )
}

const RemoveProductButton = ({ id, dispatchCart }) => {
  return (
    <Button
      onClick={() => dispatchCart({ type: ACTIONS.REMOVE_PRODUCT, payload: { id } })}
      variant="outline"
      className="px-3 py-2 border-tertiary-450 "
    >
      <Image
        src={"/icons/common/delete-icon.svg"}
        className="rotate-[20deg] "
        alt="delete icon"
        width={20}
        height={20}
      />
    </Button>
  )
}
const QuantityInput = ({ value, id, dispatchCart }) => {
  return (
    <TextInput
      value={value}
      inputClassName="px-1 py-0 text-center"
      type="number"
      min={1}
      onChange={(e) => {
        dispatchCart({
          type: ACTIONS.EDIT_PRODUCT,
          payload: { id, quantity: e.target.value },
        })
      }}
      onBlur={(e) => {
        // if the quantity is lower than one , remove the product from the cart .
        if (e.target.value < 1) {
          dispatchCart({
            type: ACTIONS.REMOVE_PRODUCT,
            payload: { id },
          })
        }
      }}
    />
  )
}
export default CartProductItem

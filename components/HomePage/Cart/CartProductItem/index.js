import React from "react"
import { Button, TextInput } from "components/shared"
import Image from "next/image"
import Dish from "public/Dish.png"

const CartProductItem = () => {
  return (
    <div className="grid gap-3 mb-6 grid-cols-cartProductItemContainer">
      {/* left section */}
      <div>
        <div className="grid gap-2 mb-2 grid-cols-cartProductItemTopSection">
          <Image src={Dish} alt={"TEMP_alt"} width={25} height={25} />
          <div>
            <p className="text-sm line-clamp-1">Spicy seasoned sea...</p>
            <p className="text-sm text-gray-400">$ 2.29</p>
          </div>
          <TextInput />
        </div>
        <TextInput placeholder="Order Note..." />
      </div>
      {/* right section */}
      <div className="flex flex-col justify-between ">
        <p className="flex items-center h-full text-sm">$ 4,58</p>
        <Button variant="outline" className="px-3 py-2 border-tertiary-450">
          <Image src={"/icons/common/deleteIcon.svg"} alt="delete icon" width={20} height={20} />
        </Button>
      </div>
    </div>
  )
}

export default CartProductItem

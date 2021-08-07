import React from "react"
import Image from "next/image"
import Dish from "public/Dish.png"
import { formatPrice } from "utills/common"

const DishCard = ({ item, onClick }) => {
  const { name, price } = item
  return (
    <div
      onClick={onClick}
      className="px-3 py-6 text-sm text-center text-white cursor-pointer bg-secondary-1100 rounded-14 "
    >
      <div className="z-30 -translate-y-9 ">
        <Image src={Dish} alt={"TEMP_alt"} width={150} height={100} layout="fixed" />{" "}
      </div>

      <h3>{name}</h3>
      <p className="mt-2 mb-1">{formatPrice(price)}</p>
      <p className="text-gray-400">20 Bowls available</p>
    </div>
  )
}

export default DishCard

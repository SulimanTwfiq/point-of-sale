import React from "react"
import Image from "next/image"
import Dish from "public/Dish.png"

const DishCard = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-3 py-6 text-sm text-center text-white cursor-pointer bg-secondary-1100 rounded-14 "
    >
      <div className="z-30 -translate-y-9 ">
        <Image src={Dish} alt={"TEMP_alt"} width={150} height={100} layout="fixed" />{" "}
      </div>

      <h3>Spicy seasoned seafood noodles</h3>
      <p className="mt-2 mb-1">$ 2.29</p>
      <p className="text-gray-400">20 Bowls available</p>
    </div>
  )
}

export default DishCard

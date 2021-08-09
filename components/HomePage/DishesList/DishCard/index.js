import React from "react"
import Image from "next/image"
import { formatPrice } from "utills/common"

const DishCard = ({ item, onClick }) => {
  const { name, price, bowlsAvailable, img, id } = item
  return (
    <div
      onClick={onClick}
      className="h-[250px] pt-[148px] relative px-3 py-6 text-sm text-center text-white cursor-pointer bg-secondary-1100 rounded-2xl "
    >
      <div className="absolute left-0 right-0 m-auto text-center top-[-25px]">
        <Image
          // src={`https://source.unsplash.com/collection/${imagesCollectionId}/150x100?id=${name}`}
          src={`https://source.unsplash.com/160x160/?${img},${id}`}
          // src={"https://source.unsplash.com/collection/190727/1600x900"}
          alt={name}
          width={160}
          height={160}
          layout="fixed"
          className="rounded-full "
        />
      </div>

      <h3>{name}</h3>
      <p className="mt-2 mb-1">{formatPrice(price)}</p>
      <p className="text-gray-400">{bowlsAvailable} Bowls available</p>
    </div>
  )
}

export default DishCard

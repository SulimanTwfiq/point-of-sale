import React from "react"
import Image from "next/image"
import { formatPrice, getImageFromUnsplashAPI } from "utills/common"

const DishCard = ({ item, onClick }) => {
  const { name, price, bowlsAvailable, id, imagesUnsplashCollectionId } = item
  return (
    <div
      onClick={onClick}
      className="active:shadow-xl	 h-[250px] pt-[148px] relative px-3 py-6 text-sm text-center text-white cursor-pointer bg-secondary-1100 rounded-2xl "
    >
      <div className="absolute left-0 right-0 m-auto text-center top-[-25px]">
        <Image
          src={getImageFromUnsplashAPI({
            imagesUnsplashCollectionId,
            itemId: id,
            width: "160",
            height: "160",
          })}
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

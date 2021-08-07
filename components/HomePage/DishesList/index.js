import React from "react"
import DishCard from "./DishCard"
import { ACTIONS } from "utills/reducers/cartReducer"
import { useMenuQuery } from "hooks/react-query/useMenu"

const DishesList = ({ dispatchCart, selectedCategory, dishSearch }) => {
  const { isLoading, error, data, isError, isSuccess } = useMenuQuery()
  if (isLoading || !selectedCategory) {
    return <p>loading ...</p>
  }
  if (isError) {
    return <p>error</p>
  }
  const categoryDishes = data.menus.find((item) => item.name === selectedCategory).meals
  const theDishesUserSearchedFor = categoryDishes.filter((d) => d.name.includes(dishSearch.trim()))
  const didUserSearchButNothingFound = dishSearch !== "" && theDishesUserSearchedFor.length === 0
  return (
    <div className="grid grid-cols-3 gap-7">
      {didUserSearchButNothingFound ? (
        <h1 className="text-center text-gray-500 col-span-full">
          Nothing found , maybe you forgot to add it to your resturant menu !
        </h1>
      ) : (
        theDishesUserSearchedFor.map((dish) => {
          return (
            <DishCard
              key={dish.name}
              item={dish}
              onClick={() => dispatchCart({ type: ACTIONS.ADD_PRODUCT, payload: { dish } })}
            />
          )
        })
      )}
    </div>
  )
}

export default DishesList

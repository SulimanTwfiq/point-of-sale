import React from "react"
import DishCard from "./DishCard"
import { ACTIONS } from "utills/reducers/cartReducer"
import { useMenuQuery } from "hooks/react-query/useMenu"
import styles from "./DishesList.module.scss"
import clsx from "clsx"
import ListOfCardsAnimation from "./ListOfCardsAnimation"

const DishesList = ({ dispatchCart, selectedCategory, dishSearch }) => {
  const { isLoading, data, isError } = useMenuQuery()
  if (isLoading || !selectedCategory) {
    return <p>loading ...</p>
  }
  if (isError) {
    return <p>error</p>
  }
  let categoryDishes = data.menus.find((item) => item.name === selectedCategory).meals
  // if dishSearch input is not empty , do dishes filtering based on it.
  if (dishSearch !== "") {
    categoryDishes = categoryDishes.filter((d) => d.name.includes(dishSearch.trim()))
  }
  return (
    <ListOfCardsAnimation className={clsx("grid grid-cols-3 gap-x-7 gap-y-12 ", styles.container)}>
      {categoryDishes.length === 0 ? (
        <h1 className="text-center text-gray-500 col-span-full">
          Nothing found , maybe you forgot to add it in the menu !
        </h1>
      ) : (
        categoryDishes.map((dish) => {
          return (
            <ListOfCardsAnimation.Card key={dish.name}>
              <DishCard
                item={dish}
                onClick={() => dispatchCart({ type: ACTIONS.ADD_PRODUCT, payload: { dish } })}
              />
            </ListOfCardsAnimation.Card>
          )
        })
      )}
    </ListOfCardsAnimation>
  )
}

export default DishesList

import React from "react"
import { orderTypes } from "utills/constants"
import { Select } from "components/shared"
import DishesList from "./DishesList"
const ChooseDishes = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-lg font-bold text-white ">Choose Dishes</h2>
        <Select options={orderTypes} />
      </div>
      <DishesList />
    </div>
  )
}

export default ChooseDishes

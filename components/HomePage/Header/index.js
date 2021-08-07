import React, { useState, useEffect } from "react"
import { TextInput } from "components/shared"
const Header = ({ setDishSearch }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-white font-barlow600Bold">Jaegar Resto</h1>
        <h3 className="mt-2 text-gray-200">Tuesday, 2 Feb 2021</h3>
      </div>
      <TextInput
        placeholder="Search for food, coffe, etc.."
        onChange={(e) => setDishSearch(e.target.value)}
      />
    </div>
  )
}

export default Header

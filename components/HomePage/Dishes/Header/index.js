import React, { useState } from "react"
import { TextInput, Tabs } from "components/shared"
const Header = () => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white font-barlow600Bold">Jaegar Resto</h1>
          <h3 className="mt-2 text-gray-200">Tuesday, 2 Feb 2021</h3>
        </div>
        <TextInput placeholder="Search for food, coffe, etc.." />
      </div>
      <Tabs
        list={[
          { name: "Hot Dishes" },
          { name: "Cold Dishes" },
          { name: "Soup" },
          { name: "Grill" },
          { name: "Appetizer" },
          { name: "Dessert" },
        ]}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </div>
  )
}

export default Header

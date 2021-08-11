import React from "react"
import { Tabs, Tab } from "components/shared"

const MenuCategoriesTabs = ({ menuQuery, selectedCategory, setSelectedCategory }) => {
  console.log("selectedCategory", selectedCategory)
  return (
    <Tabs>
      {menuQuery.data.menus.map((t) => (
        <Tab
          key={t.name}
          isActive={selectedCategory === t.name}
          onClick={() => setSelectedCategory(t.name)}
        >
          {t.name}
        </Tab>
      ))}
    </Tabs>
  )
}

export default MenuCategoriesTabs

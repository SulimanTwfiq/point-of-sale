import React, { useEffect } from "react"
import { Tabs, Tab } from "components/shared"

const MenuCategoriesTabs = ({ menuQuery, selectedCategory, setSelectedCategory }) => {
  useEffect(() => {
    if (menuQuery.isSuccess) {
      setSelectedCategory(menuQuery.data.menus[0].name)
    }
  }, [menuQuery.isSuccess])

  return (
    <Tabs>
      {menuQuery.isFetched &&
        menuQuery.data.menus.map((t) => (
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

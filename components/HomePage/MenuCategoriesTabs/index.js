import React, { useEffect } from "react"
import { Tabs } from "components/shared"

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
          <Tabs.Tab
            key={t.name}
            isActive={selectedCategory === t.name}
            onClick={() => setSelectedCategory(t.name)}
          >
            {t.name}
          </Tabs.Tab>
        ))}
    </Tabs>
  )
}

export default MenuCategoriesTabs

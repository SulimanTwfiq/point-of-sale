import React from "react"
import { Tabs, Tab } from "components/shared"
import { useMenuQuery } from "hooks/react-query/useMenu"

const MenuCategoriesTabs = ({ selectedCategory, setSelectedCategory }) => {
  const { isLoading, error, data, isError, isSuccess } = useMenuQuery({
    options: {
      onSuccess: (returnedData) => setSelectedCategory(returnedData.menus[0].name),
    },
  })

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  return (
    <Tabs>
      {data.menus.map((t) => (
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

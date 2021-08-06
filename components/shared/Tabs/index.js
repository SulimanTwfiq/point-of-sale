import React from "react"

const Tabs = ({ list, setSelectedTab, selectedTab }) => {
  return (
    <ul className="flex items-center border-b border-bordersColor">
      {list.map((tab, index) => (
        <li
          key={tab.name}
          onClick={() => setSelectedTab(index)}
          className={`cursor-pointer py-2 pl-1 pr-10 text-white text-left  ${
            selectedTab === index ? "border-b-2 text-tertiary-450 border-tertiary-450" : ""
          }`}
        >
          {tab.name}
        </li>
      ))}
    </ul>
  )
}

export default Tabs

import React from "react"

const Tabs = ({ children }) => {
  return <ul className="flex items-center border-b border-bordersColor">{children}</ul>
}
export const Tab = ({ isActive = false, children, ...reset }) => {
  return (
    <li
      {...reset}
      className={`cursor-pointer py-2 pl-1 pr-10 text-white text-left  ${
        isActive ? "border-b-2 text-tertiary-450 border-tertiary-450" : ""
      }`}
    >
      {children}
    </li>
  )
}
export default Tabs

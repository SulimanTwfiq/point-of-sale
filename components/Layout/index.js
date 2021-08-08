import React from "react"
import Navigation from "./Navigation"
const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-[110px,1fr] h-screen">
      <Navigation />
      {children}
    </div>
  )
}

export default Layout

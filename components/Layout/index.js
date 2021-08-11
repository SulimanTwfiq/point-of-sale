import React from "react"
import Navigation from "./Navigation"
import SplashScreen from "./SplashScreen"
const Layout = ({ children }) => {
  return (
    <>
      <SplashScreen />
      <div className="grid grid-cols-[110px,1fr] h-screen">
        <Navigation />
        {children}
      </div>
    </>
  )
}

export default Layout

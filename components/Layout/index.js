import { useMenuQuery } from "hooks/react-query/useMenu"
import React from "react"
import Navigation from "./Navigation"
import { motion, AnimatePresence } from "framer-motion"

const Layout = ({ children }) => {
  return (
    <SplashScreen>
      <div className="grid grid-cols-[110px,1fr] h-screen">
        <Navigation />
        {children}
      </div>
    </SplashScreen>
  )
}

const SplashScreen = ({ children }) => {
  // if the APIs are still loading ,show splash screen
  const menuQuery = useMenuQuery()

  return (
    <>
      <AnimatePresence>
        {menuQuery.isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center h-screen"
          >
            <p className="text-3xl">Welcome to the best </p>
            <h1 className="text-6xl text-tertiary-450">Point of sales system</h1>
          </motion.div>
        )}
      </AnimatePresence>

      {menuQuery.isFetched && children}
    </>
  )
}

export default Layout

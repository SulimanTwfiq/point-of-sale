import { useMenuQuery } from "hooks/react-query/useMenu"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const SplashScreen = () => {
  // if the APIs are still loading ,show splash screen
  const menuQuery = useMenuQuery()

  return (
    <AnimatePresence>
      {menuQuery.isLoading && (
        <motion.div
          className="flex flex-col items-center justify-center h-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className="text-3xl">Welcome to the </p>
          <h1 className="text-6xl text-tertiary-450">Point of sale system</h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SplashScreen

import React from "react"
import { motion, AnimateSharedLayout } from "framer-motion"
import clsx from "clsx"

const Tabs = ({ children }) => {
  return (
    <AnimateSharedLayout transition={{ duration: 0.5 }}>
      <ul className="flex items-center pb-3 border-b border-bordersColor">{children}</ul>
    </AnimateSharedLayout>
  )
}
export const Tab = ({ isActive = false, children, ...reset }) => {
  return (
    <motion.li
      animate
      className={clsx(
        `cursor-pointer pr-10 text-white relative text-sm`,
        isActive && "text-tertiary-450"
      )}
      {...reset}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="underline"
          className="absolute w-12 border-b-2 border-tertiary-450 top-8"
        ></motion.div>
      )}
    </motion.li>
  )
}
export default Tabs

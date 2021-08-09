import { motion } from "framer-motion"

const ListOfCardsAnimation = ({ children, ...reset }) => {
  return (
    <motion.div variants={container} initial="hidden" animate="visible" {...reset}>
      {children}
    </motion.div>
  )
}

// eslint-disable-next-line react/display-name
ListOfCardsAnimation.Card = ({ children }) => {
  return <motion.div variants={item}>{children}</motion.div>
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default ListOfCardsAnimation

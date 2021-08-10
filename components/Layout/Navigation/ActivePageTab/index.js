import clsx from "clsx"
import styles from "./ActivePageTab.module.scss"
import { motion } from "framer-motion"

const ActivePageTab = () => {
  return (
    <motion.div
      animate
      layoutId="tab"
      className="absolute w-64 h-20 px-3 py-3 rounded-tl-2xl rounded-bl-2xl -top-3 -left-3 bg-primary-1100"
    >
      <AnglesCurves />
    </motion.div>
  )
}

const AnglesCurves = () => {
  return (
    <>
      <div className={clsx(styles["curves"], styles["curves--top"])}>
        <div className={clsx(styles["curves__inside"], styles["curves__inside--top"])}></div>
      </div>
      <div className={clsx(styles["curves"], styles["curves--bottom"])}>
        <div className={clsx(styles["curves__inside"], styles["curves__inside--bottom"])}></div>
      </div>
    </>
  )
}

export default ActivePageTab

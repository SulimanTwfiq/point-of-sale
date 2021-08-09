import clsx from "clsx"
import styles from "./SelectedPageAngleCurves.module.scss"

const SelectedPageAngleCurves = () => {
  return (
    <>
      <div className={clsx(styles["button-curve"], styles["button-curve--top"])}>
        <div
          className={clsx(styles["button-curve__inside"], styles["button-curve__inside--top"])}
        ></div>
      </div>
      <div className={clsx(styles["button-curve"], styles["button-curve--bottom"])}>
        <div
          className={clsx(styles["button-curve__inside"], styles["button-curve__inside--bottom"])}
        ></div>
      </div>
    </>
  )
}

export default SelectedPageAngleCurves

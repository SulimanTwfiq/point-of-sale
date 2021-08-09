import React from "react"
import ChooseOrderTypeButtons from "./ChooseOrderTypeButtons"
import CartProductItem from "./CartProductItem"
import CartProductItemsListHeader from "./CartProductItemsListHeader"
import CartFooter from "./CartFooter"
import styles from "./Cart.module.scss"
import { motion, AnimatePresence } from "framer-motion"

const Cart = ({ cart, dispatchCart }) => {
  return (
    <div className="flex flex-col justify-between p-5 bg-secondary-1100">
      <div>
        <h1 className="text-xl">Orders #34562</h1>
        <ChooseOrderTypeButtons />
        <CartProductItemsListHeader />
        <div className={styles["products-container"]}>
          <AnimatePresence>
            {cart.map((item) => (
              <motion.div
                key={item.name}
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ opacity: 0 }}
              >
                <CartProductItem item={item} dispatchCart={dispatchCart} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <CartFooter cart={cart} dispatchCart={dispatchCart} />
    </div>
  )
}

export default Cart

const CartProductItemsListHeader = () => {
  return (
    <div className="grid mb-3 grid-cols-cartProductItemContainer">
      <div className="flex justify-between pr-6">
        <p>Item</p>
        <p>Qty</p>
      </div>
      <p>Price</p>
    </div>
  )
}

export default CartProductItemsListHeader

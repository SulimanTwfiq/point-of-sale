const CartProductItemsListHeader = () => {
  return (
    <div className="grid mb-3 grid-cols-[1fr,50px]">
      <div className="flex justify-between pr-6">
        <p>Item</p>
        <p>Qty</p>
      </div>
      <p>Price</p>
    </div>
  )
}

export default CartProductItemsListHeader

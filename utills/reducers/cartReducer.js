export const ACTIONS = {
  ADD_PRODUCT: "ADD_PRODUCT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT",
  EDIT_PRODUCT: "EDIT_PRODUCT",
}
const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT:
      const isItemAddedInTheCartBefore = state.find((item) => item.id === action.payload.dish.id)
      if (isItemAddedInTheCartBefore) {
        // increase item quantity by one
        return state.map((item) =>
          item.id === action.payload.dish.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        return [...state, { quantity: 1, ...action.payload.dish }]
      }
    case ACTIONS.REMOVE_PRODUCT: {
      return state.filter((item) => item.id !== action.payload.id)
    }
    case ACTIONS.EDIT_PRODUCT: {
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      )
    }
    default: {
      return state
    }
  }
}

export default cartReducer

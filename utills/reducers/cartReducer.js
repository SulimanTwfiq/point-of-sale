export const ACTIONS = {
  ADD_PRODUCT: "ADD_PRODUCT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT",
  EDIT_PRODUCT: "EDIT_PRODUCT",
  CLEAR_CART: "CLEAR_CART",
}
export const initialCartState = []

export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT:
      const isItemAddedInTheCartBefore = state.find((item) => item.id === action.payload.dish.id)
      if (isItemAddedInTheCartBefore) {
        // increase item quantity by one
        return state.map((item) =>
          item.id === action.payload.dish.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        return [{ quantity: 1, ...action.payload.dish }, ...state]
      }
    case ACTIONS.REMOVE_PRODUCT: {
      return state.filter((item) => item.id !== action.payload.id)
    }
    case ACTIONS.EDIT_PRODUCT: {
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      )
    }
    case ACTIONS.CLEAR_CART: {
      return initialCartState
    }
    default: {
      return state
    }
  }
}

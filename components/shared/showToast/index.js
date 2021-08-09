import React from "react"
import { toast } from "react-toastify"

function showToast(type, message, options = {}) {
  const defaultOptions = {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  }
  return toast[type](message, {
    ...defaultOptions,
    ...options,
  })
}

export default showToast

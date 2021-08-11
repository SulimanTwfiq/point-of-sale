import clsx from "clsx"

const Button = ({ children, variant = "solid", className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx("px-2 py-1 text-sm rounded-lg ", getVariantStyle(variant), className)}
    >
      {children}
    </button>
  )
}

function getVariantStyle(variant) {
  switch (variant) {
    case "solid" || !variant:
      return "text-white bg-tertiary-450"

    case "outline":
      return "border border-gray-700	text-tertiary-450 "

    default:
      break
  }
}

export default Button

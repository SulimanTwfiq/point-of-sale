const Button = ({ children, variant = "solid", className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${getVariantStyle(variant)} ${className} px-2 py-1 text-sm rounded-lg`}
    >
      {children}
    </button>
  )
}

function getVariantStyle(variant) {
  if (variant === "solid" || !variant) {
    return "text-white bg-tertiary-450"
  }
  if (variant === "outline") {
    return "border border-gray-700	text-tertiary-450 "
  }
}

export default Button

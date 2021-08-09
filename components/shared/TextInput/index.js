import clsx from "clsx"
import React from "react"
import Image from "next/image"

const TextInput = ({ id, label, placeholder, type = "text", inputClassName, icon, ...reset }) => {
  const InputComponent = (
    <input
      className={clsx(
        inputClassName,
        icon ? "pr-2 py-2 pl-7 " : "px-2",
        "w-full h-10 leading-tight text-gray-200 border rounded-md shadow appearance-none bg-[#2D303E] border-bordersColor focus:outline-none focus:shadow-outline"
      )}
      id={id}
      type={type}
      placeholder={placeholder}
      {...reset}
    />
  )
  return (
    <div>
      {label && (
        <label className="block mb-2 font-bold text-gray-400 text-md" htmlFor={id}>
          {label}
        </label>
      )}
      {icon ? (
        <div className="relative">
          <div className="absolute flex items-center h-full px-2">
            {typeof icon === "string" ? (
              <Image src={getIcon(icon)} className="absolute" alt={icon} width={15} height={15} />
            ) : (
              icon
            )}
          </div>

          {InputComponent}
        </div>
      ) : (
        InputComponent
      )}
    </div>
  )
}

const getIcon = (icon) => {
  switch (icon) {
    case "search":
      return "/icons/common/search-icon.png"

    default:
      break
  }
}

export default TextInput

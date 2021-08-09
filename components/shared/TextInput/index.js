import clsx from "clsx"
import React from "react"

const TextInput = ({ id, label, placeholder, type = "text", inputClassName, ...reset }) => {
  return (
    <div>
      {label && (
        <label className="block mb-2 font-bold text-gray-400 text-md" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        className={clsx(
          inputClassName,
          "w-full h-10 px-3 py-2 leading-tight text-gray-200 border rounded shadow appearance-none bg-[#2D303E] border-bordersColor focus:outline-none focus:shadow-outline"
        )}
        id={id}
        type={type}
        placeholder={placeholder}
        {...reset}
      />
    </div>
  )
}

export default TextInput

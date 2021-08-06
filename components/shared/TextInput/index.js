import React from "react"

const TextInput = ({ id, label, placeholder }) => {
  return (
    <div>
      {label && (
        <label className="block mb-2 font-bold text-gray-400 text-md" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        className="w-full h-10 px-3 py-2 leading-tight text-gray-200 border rounded shadow appearance-none bg-inputColor border-bordersColor focus:outline-none focus:shadow-outline"
        id={id}
        type="text"
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextInput

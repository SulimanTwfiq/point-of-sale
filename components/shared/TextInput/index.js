import React from "react"

const TextInput = ({ id, label, placeholder }) => {
  return (
    <div>
      {label && (
        <label class="block text-gray-400 text-md font-bold mb-2" for={id}>
          {label}
        </label>
      )}

      <input
        class="shadow appearance-none bg-inputColor border border-bordersColor rounded w-64  h-10 py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type="text"
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextInput

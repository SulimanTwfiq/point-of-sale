import clsx from "clsx"

const Select = ({ options, className = "" }) => {
  return (
    <select
      className={clsx(
        "block  px-4 py-2 pr-8 leading-tight text-white border rounded shadow appearance-none  bg-secondary-1100 border-bordersColor hover:border-gray-500 focus:outline-none focus:shadow-outline",
        className
      )}
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  )
}

export default Select

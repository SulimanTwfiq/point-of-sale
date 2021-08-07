import { useState } from "react"
import { Button } from "components/shared"
import { orderTypes } from "utills/constants"

const ChooseOrderTypeButtons = ({}) => {
  const [selectedOrderType, setSelectedOrderType] = useState(orderTypes[0])

  return (
    <div className="my-5 space-x-2">
      {orderTypes.map((type) => (
        <Button
          key={type}
          variant={type === selectedOrderType ? "solid" : "outline"}
          onClick={() => setSelectedOrderType(type)}
        >
          {type}
        </Button>
      ))}
    </div>
  )
}

export default ChooseOrderTypeButtons

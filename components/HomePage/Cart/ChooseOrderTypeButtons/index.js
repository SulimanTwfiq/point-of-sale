import { Button } from "components/shared"
import { orderTypes } from "utills/constants"

const ChooseOrderTypeButtons = ({ selectedOrderType, setSelectedOrderType }) => {
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

import { Button } from "components/shared"
import { orderTypes } from "utills/constants"

const ChooseOrderTypeButtons = ({ selectedOrderType, setSelectedOrderType }) => {
  return (
    <div className="mt-5">
      {orderTypes.map((type) => (
        <Button
          className="mr-3"
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

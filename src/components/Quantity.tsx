import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useAppDispatch } from "../redux/root/hooks";
import { changeQuantityCart } from "../redux/silces/cartSlide";

const ChangeQuantityCart: React.FC<{
  count: number;
  id: string;
}> = (props) => {
  const { count, id } = props;
  const dispatch = useAppDispatch();

  return (
    <div className="amount-btns grid grid-cols-3 items-center justify-center w-36 max-sm:w-20">
      <button
        type="button"
        className="amount-btn text-base flex justify-center max-sm:text-sm"
        onClick={() => dispatch(changeQuantityCart({ id, count: count - 1 }))}
      >
        <FaMinus color="#0d1928" />
      </button>
      <h2 className="amount text-3xl font-medium text-background flex justify-center max-sm:text-xl">
        {count}
      </h2>
      <button
        type="button"
        className="amount-btn text-base flex justify-center max-sm:text-sm"
        onClick={() => dispatch(changeQuantityCart({ id, count: count + 1 }))}
      >
        <FaPlus color="#0d1928" />
      </button>
    </div>
  );
};

export default ChangeQuantityCart;

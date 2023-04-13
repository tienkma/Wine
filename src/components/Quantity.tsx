import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const AddToCard: React.FC<{
  decreAmount: (id: string) => void;
  increAmuont: (id: string) => void;
  count: number;
  id: string;
}> = (props) => {
  const { count, decreAmount, increAmuont, id } = props;
  return (
    <div className="amount-btns">
      <button
        type="button"
        className="amount-btn"
        onClick={() => decreAmount(id)}
      >
        <FaMinus />
      </button>
      <h2 className="amount">{count}</h2>
      <button
        type="button"
        className="amount-btn"
        onClick={() => increAmuont(id)}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default AddToCard;

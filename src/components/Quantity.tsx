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
    <div className="amount-btns grid grid-cols-3 items-center justify-center w-36 max-sm:w-20">
      <button
        type="button"
        className="amount-btn text-base flex justify-center max-sm:text-sm"
        onClick={() => decreAmount(id)}
      >
        <FaMinus color="#0d1928" />
      </button>
      <h2 className="amount text-3xl font-medium text-background flex justify-center max-sm:text-xl">
        {count}
      </h2>
      <button
        type="button"
        className="amount-btn text-base flex justify-center max-sm:text-sm"
        onClick={() => increAmuont(id)}
      >
        <FaPlus color="#0d1928" />
      </button>
    </div>
  );
};

export default AddToCard;

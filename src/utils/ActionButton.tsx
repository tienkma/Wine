import React, { HTMLAttributes, useState } from "react";

const ActionButton = (props: HTMLAttributes<HTMLButtonElement>) => {
  const { onClick, children, ...rest } = props;
  const [actionLoading, setActionLoading] = useState(false);

  const customOnclick = async (event: any) => {
    setActionLoading(true);
    try {
      onClick && (await onClick(event));
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <button onClick={customOnclick} disabled={actionLoading} {...rest}>
      {!actionLoading ? children : "Please wait..."}
    </button>
  );
};

export default ActionButton;

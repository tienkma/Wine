import { Labels } from "common/labels";
import { t } from "core/translations";
import React, { useState } from "react";
import { Button } from "reactstrap";
import { ButtonProps } from "reactstrap/types/lib/Button";

const ActionButton = (props: ButtonProps) => {
  const { onClick, children, ...rest } = props;
  const [actionLoading, setActionLoading] = useState(false);

  const customOnclick = async (event: any) => {
    setActionLoading(true);
    try {
      onClick && await onClick(event);
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <button onClick={customOnclick} {...rest}>{ !actionLoading ? children : t(Labels.action_running)}</button>
  );

};

export default ActionButton;

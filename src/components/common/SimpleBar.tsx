import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

interface ScrollComponentProps {
  children: JSX.Element | JSX.Element[];
  [T: string]: any;
}

export const ScrollComponent = (props: ScrollComponentProps) => {
  const { children, ...rest } = props;
  return <SimpleBar {...rest}>{props.children}</SimpleBar>;
};

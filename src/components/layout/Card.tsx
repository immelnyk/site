import React from "react";
import { classNames } from "~/utils/classNames";

// @ts-ignore
const Card = ({ children }) => {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      className: classNames(
        child.props.className,
        "rounded-lg bg-foreground p-4",
      ),
    });
  });
};

export default Card;

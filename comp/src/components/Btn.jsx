import React from 'react';
import "./btn.css"

export const Button = ({onClick,children}) => {
  return <button className="btn" onClick={onClick}>{children}</button>;
};

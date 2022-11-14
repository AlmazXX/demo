import React from "react";

interface Props {
  show: boolean;
  onClick?: React.MouseEventHandler;
}

const Backdrop: React.FC<Props> = ({ show, onClick }) => {
  const style = { display: show ? "block" : "none" };
  return <div className="modal-backdrop show" style={style} onClick={onClick}/>;
};

export default Backdrop;
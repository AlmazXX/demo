import React from "react";

const ModalBody: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="modal-body">{children}</div>;
};

export default ModalBody;
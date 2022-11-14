import React from "react";
import { ButtonType } from "../../types";

interface Props extends React.PropsWithChildren {
  buttons?: ButtonType[];
}

const ModalFooter: React.FC<Props> = ({ buttons, children }) => {
  return (
    <div className="modal-footer">
      {children}
      {buttons ? buttons.map((button) => (
        <button key={Math.random() + Math.random()} className={"btn btn-" + button.type} onClick={button.onClick}>
          {button.label}
        </button>
      )) : null}
    </div>
  );
};

export default ModalFooter;

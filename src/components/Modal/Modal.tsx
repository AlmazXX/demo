import React from "react";
import Backdrop from "../Backdrop/Backdrop";

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
}

const Modal: React.FC<Props> = ({ show, title, onClose, children }) => {
  const style = { display: show ? "block" : "none" };

  return (
    <React.Fragment>
      <Backdrop show={show}/>
      <div className="modal show" style={style} onClick={onClose}>
        <div className="modal-dialog" onClick={e => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
            </div>
            {children}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
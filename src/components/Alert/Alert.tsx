import React from "react";

interface Props extends React.PropsWithChildren {
  show: boolean;
  type: string;
  clickDismissable?: boolean;
  onDismiss?: React.MouseEventHandler;
}

const Alert: React.FC<Props> = ({ show, type, clickDismissable, onDismiss, children }) => {
  return (
    <div style={{display: show ? 'block' : 'none'}} className={"alert alert-dismissible alert-" + type} onClick={clickDismissable ? onDismiss : undefined}>
      {children}
      {onDismiss ? clickDismissable ? null : <button type="button" className="btn-close" onClick={onDismiss}></button> : null}
    </div>
  );
};

export default Alert;

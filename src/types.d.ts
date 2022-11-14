export interface ButtonType {
  btnType?: 'submit' | 'reset' | 'button' | undefined;
  type: string;
  label: string;
  onClick: React.MouseEventHandler;
}
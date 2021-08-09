import React from 'react';
import { className } from './styles.css';

type ButtonProps = {
  disabled?: boolean;
  onClick?: React.EventHandler<any>;
};

const Button: React.FC<ButtonProps> = ({
  disabled = false,
  onClick,
  children,
}) => (
  <button
    disabled={disabled}
    type="button"
    onClick={onClick}
    className={className}
  >
    {children}
  </button>
);

export default Button;

import React from 'react';
import { useButton } from 'react-aria';

import styles from './Button.module.scss';

export type ButtonType = {
};


export interface ButtonProps {
  children?: React.ReactNode;
  className?: any;
  type?: "button" | "link"
};

const Button : React.FC = (props:ButtonProps) => {
  const { 
    className,
    type,
    children,
  } = props;

  let ref = React.useRef(null);
  const { buttonProps } = useButton(props, ref);

  if (type === "link") {
    return (
      <a 
        className={(
          className ? `${styles.Button} ${className}` : styles.Button
        )}
        {...buttonProps}
        ref={ref}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={(
        className ? `${styles.Button} ${className}` : styles.Button
      )}
      {...buttonProps}
      ref={ref}
    >
      {children}
    </button>
  );
};

export default Button;

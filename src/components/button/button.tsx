import React from 'react';
import styles from './button.module.css';

type Props = {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
};

function Button({ children, variant }: Props) {
  const className = variant === 'primary' ? styles.primary : styles.secondary;
  return <button className={className}>{children}</button>;
}

export default Button;

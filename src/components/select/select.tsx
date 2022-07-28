import React from 'react';
import styles from './select.module.css';

type Option = {
  value: string;
  description: string;
};

type Props = {
  label: string;
  options: Option[];
  onSelect: (value: string) => void;
};

function Select({ label, options, onSelect }: Props) {
  if (options.length === 0) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value);
  };

  return (
    <div className={styles.select}>
      <label htmlFor={label}>{label}:</label>
      <select id={label} onChange={handleChange}>
        <option value="">Select...</option>
        {options.map(({ value, description }) => (
          <option data-testid="option" key={value} value={value}>
            {description}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;

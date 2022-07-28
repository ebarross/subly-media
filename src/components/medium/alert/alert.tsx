import React from 'react';
import { Button } from '../../../components';
import { ReactComponent as ExclamationIcon } from '../../../assets/exclamation.svg';
import styles from './alert.module.css';

function Alert() {
  return (
    <div className={styles.container}>
      <div className={styles.messageContainer}>
        <span className={styles.icon}>
          <ExclamationIcon fill="#fc2356" height={20} width={20} />
        </span>
        <span className={styles.message}>
          An error occurred while processing your file. Delete file to try
          again, and report issue if the problem persists.
        </span>
      </div>
      <div className={styles.actions}>
        <Button variant="secondary">Delete file</Button>
        <Button variant="primary">Report issue</Button>
      </div>
    </div>
  );
}

export default Alert;

import React from 'react';
import { Button } from '../../../components';
import styles from './alert.module.css';

function Alert() {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.message}>
          An error occurred while processing your file. Delete file to try
          again, and report issue if the problem persists.
        </p>
      </div>
      <div className={styles.actions}>
        <Button variant="secondary">Delete file</Button>
        <Button variant="primary">Report issue</Button>
      </div>
    </div>
  );
}

export default Alert;

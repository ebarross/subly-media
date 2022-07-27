import React from 'react';
import styles from './backdrop.module.css';

function Backdrop() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Transcribing subtitles</span>
      <span className={styles.progress} />
    </div>
  );
}

export default Backdrop;

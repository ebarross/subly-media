import React from 'react';
import { MediumData } from '../../interfaces/medium-data';
import styles from './medium.module.css';

type Props = {
  data: MediumData;
};

function Medium({ data }: Props) {
  const { name, cover, status } = data;

  const getStatusMessage = () => {
    if (status === 'error') {
      return 'Error in processing';
    } else if (status === 'transcribing') {
      return 'Transcribing';
    } else {
      // calculate edited time
      return 'Edited';
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <img src={cover} alt="Cover" />
      </div>
      <div className={styles.details}>
        <p className={styles.title}>{name}</p>
        <p className={styles.status}>{getStatusMessage()}</p>
      </div>
    </div>
  );
}

export default Medium;

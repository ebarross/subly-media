import React from 'react';
import { MediumData } from '../../interfaces/medium-data';
import styles from './medium.module.css';
import Alert from './alert/alert';
import Backdrop from './backdrop/backdrop';
import Actions from './actions/actions';

type Props = {
  data: MediumData;
};

function Medium({ data }: Props) {
  const { name, cover, status, languages } = data;

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

  const renderCover = () => {
    if (status === 'error') {
      return <Alert />;
    }

    return (
      <>
        {status === 'transcribing' ? (
          <Backdrop />
        ) : (
          <Actions languages={languages.length} />
        )}
        <img src={cover} alt="Cover" />
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.cover}>{renderCover()}</div>
      <div className={styles.details}>
        <p className={styles.title}>{name}</p>
        <p className={styles.status}>{getStatusMessage()}</p>
      </div>
    </div>
  );
}

export default Medium;

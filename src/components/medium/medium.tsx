import React, { useMemo } from 'react';
import { MediumData } from '../../interfaces/medium-data';
import styles from './medium.module.css';
import Alert from './alert/alert';
import Backdrop from './backdrop/backdrop';
import Actions from './actions/actions';

const calcLastEditedInMonths = (edited: Date): number => {
  const current = new Date();
  let diff = (current.getFullYear() - edited.getFullYear()) * 12;
  diff -= edited.getMonth() + 1;
  diff += current.getMonth();
  return diff <= 0 ? 0 : diff;
};

type Props = {
  data: MediumData;
};

function Medium({ data }: Props) {
  const { name, cover, status, languages, updatedAt } = data;

  const statusMessage = useMemo(() => {
    if (status === 'error') {
      return 'Error in processing';
    } else if (status === 'transcribing') {
      return 'Transcribing';
    } else {
      const months = calcLastEditedInMonths(new Date(updatedAt));
      return `Edited ${months} months ago`;
    }
  }, [status, updatedAt]);

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
        <p className={styles.status}>{statusMessage}</p>
      </div>
    </div>
  );
}

export default Medium;

import React from 'react';
import styles from './actions.module.css';
import { ReactComponent as LanguagesIcon } from '../../../assets/languages.svg';
import { ReactComponent as TrashIcon } from '../../../assets/trash.svg';

type Props = {
  languages: number;
};

function Actions({ languages }: Props) {
  return (
    <div className={styles.container}>
      {languages > 0 && (
        <div className={styles.languages}>
          <div className={styles.languagesIcon}>
            <LanguagesIcon fill="#fefefe" height={18} width={18} />
          </div>
          <div className={styles.languagesInfo}>{languages} languages</div>
        </div>
      )}
      <button className={styles.delete}>
        <TrashIcon fill="#fefefe" height={22} width={22} />
      </button>
      <div className={styles.edit}>
        <button>Edit</button>
      </div>
    </div>
  );
}

export default Actions;

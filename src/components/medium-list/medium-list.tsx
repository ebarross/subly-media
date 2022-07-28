import React from 'react';
import { MediumData } from '../../interfaces/medium-data';
import { Medium } from '../../components';
import styles from './medium-list.module.css';

type Props = {
  list: MediumData[];
};

function MediumList({ list }: Props) {
  return (
    <>
      {list && list.length > 0 ? (
        <ul className={styles.list}>
          {list.map((medium) => (
            <li data-testid="item" key={medium.id}>
              <Medium data={medium} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.message}>
          <p>No data</p>
        </div>
      )}
    </>
  );
}

export default MediumList;

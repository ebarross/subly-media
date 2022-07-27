import React from 'react';
import { MediumData } from '../../interfaces/medium-data';
import styles from './medium.module.css';

type Props = {
  data: MediumData;
};

function Medium({ data }: Props) {
  const { name } = data;
  return <div className={styles.container}>{name}</div>;
}

export default Medium;

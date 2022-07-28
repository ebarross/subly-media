import React from 'react';
import { MediumList } from '../../components';
import styles from './home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <header>
        <h1>Subly</h1>
      </header>
      <main>
        <MediumList />
      </main>
    </div>
  );
}

export default Home;

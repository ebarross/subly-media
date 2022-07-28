import React, { useEffect, useState } from 'react';
import { MediumData } from '../../interfaces/medium-data';
import fetchMedia from '../../services/media';
import { FilterableList } from '../../components';
import styles from './home.module.css';

function Home() {
  const [media, setMedia] = useState<Array<MediumData>>([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchMedia()
      .then((media) => setMedia(media))
      .catch(() => setHasError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.container}>
      <header>
        <h1>Subly</h1>
      </header>
      <main>
        {loading ? (
          <p>Loading...</p>
        ) : hasError ? (
          <p>Error :/</p>
        ) : media && media.length > 0 ? (
          <FilterableList list={media} />
        ) : (
          <p>No data</p>
        )}
      </main>
    </div>
  );
}

export default Home;

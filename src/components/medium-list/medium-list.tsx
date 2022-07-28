import React, { useEffect, useState } from 'react';
import { MediumData } from '../../interfaces/medium-data';
import { Medium } from '../../components';
import fetchMedia from '../../services/media';
import styles from './medium-list.module.css';

function MediumList() {
  const [list, setList] = useState<Array<MediumData>>([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchMedia()
      .then((media) => setList(media))
      .catch(() => setHasError(true))
      .finally(() => setLoading(false));
  }, []);

  const renderList = () => (
    <ul className={styles.list}>
      {list.map((medium) => (
        <li key={medium.id}>
          <Medium data={medium} />
        </li>
      ))}
    </ul>
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {hasError ? (
        <p>Error: :/</p>
      ) : list && list.length > 0 ? (
        renderList()
      ) : (
        <p>No data</p>
      )}
    </>
  );
}

export default MediumList;

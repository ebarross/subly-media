import React, { useEffect, useState } from 'react';
import { MediumData } from '../../interfaces/medium-data';
import styles from './medium-list.module.css';

function MediumList() {
  const [list, setList] = useState<Array<MediumData>>([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      fetch('https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b')
        .then((response) => response.json())
        .then((data) => setList(data.media))
        .catch(() => setHasError(true))
        .finally(() => setLoading(false));
    }

    fetchData();
  }, []);

  const renderList = () => (
    <ul className={styles.list}>
      {list.map((medium) => (
        <li key={medium.id}>{medium.name}</li>
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

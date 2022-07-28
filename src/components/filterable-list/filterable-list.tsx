import React, { useState } from 'react';
import { MediumData } from '../../interfaces/medium-data';
import { Select, MediumList } from '../../components';
import styles from './filterable-list.module.css';

type Props = {
  list: MediumData[];
};

function FilterableList({ list }: Props) {
  const [status, setStatus] = useState('');
  const [language, setLanguage] = useState('');
  const filtered = list
    .filter((item) => !status || item.status === status)
    .filter((item) => !language || item.languages.includes(language));

  return (
    <>
      <div className={styles.filters}>
        <Select
          label="Status"
          options={[
            { value: 'error', description: 'Error' },
            { value: 'ready', description: 'Ready' },
            { value: 'transcribing', description: 'Transcribing' },
          ]}
          onSelect={(value) => setStatus(value)}
        />
        <Select
          label="Language"
          options={[
            { value: 'cz', description: 'Czech' },
            { value: 'nl', description: 'Dutch' },
            { value: 'en', description: 'English' },
          ]}
          onSelect={(value) => setLanguage(value)}
        />
      </div>
      <MediumList list={filtered} />
    </>
  );
}

export default FilterableList;

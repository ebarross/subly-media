import { MediumData } from '../interfaces/medium-data';

const apiUrl = 'https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b';

function fetchMedia(): Promise<MediumData[]> {
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => data.media);
}

export default fetchMedia;

import { render, screen } from '@testing-library/react';
import { MediumData } from '../../interfaces/medium-data';
import MediumList from './medium-list';

const mediumMock1: MediumData = {
  id: 1,
  name: 'How to use to Subly',
  cover: 'test.jpg',
  status: 'ready',
  languages: [],
  createdAt: '2022-07-28T10:00:00.000Z',
  updatedAt: '2022-07-28T10:00:00.000Z',
};
const mediumMock2: MediumData = {
  id: 2,
  name: 'This has many languages',
  cover: 'test.jpg',
  status: 'ready',
  languages: [],
  createdAt: '2022-07-28T10:00:00.000Z',
  updatedAt: '2022-07-28T10:00:00.000Z',
};

describe('MediumList component', () => {
  it('should render nothing when list is empty', () => {
    render(<MediumList list={[]} />);
    const message = screen.getByText(/no data/i);
    expect(message).toBeInTheDocument();
  });

  it('should render medium list when a list is provided', () => {
    const list = [mediumMock1, mediumMock2];

    render(<MediumList list={list} />);

    const listitems = screen.getAllByTestId('item');
    expect(listitems).toHaveLength(list.length);
  });
});

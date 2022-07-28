import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MediumData } from '../../interfaces/medium-data';
import FilterableList from './filterable-list';

const mediumMock1: MediumData = {
  id: 1,
  name: 'How to use to Subly',
  cover: 'test.jpg',
  status: 'ready',
  languages: ['en', 'nl'],
  createdAt: '2022-07-28T10:00:00.000Z',
  updatedAt: '2022-07-28T10:00:00.000Z',
};
const mediumMock2: MediumData = {
  id: 2,
  name: 'This has many languages',
  cover: 'test.jpg',
  status: 'error',
  languages: ['en'],
  createdAt: '2022-07-28T10:00:00.000Z',
  updatedAt: '2022-07-28T10:00:00.000Z',
};
const mediumMock3: MediumData = {
  id: 3,
  name: 'This is transcribing',
  cover: 'test.jpg',
  status: 'transcribing',
  languages: ['cz'],
  createdAt: '2022-07-28T10:00:00.000Z',
  updatedAt: '2022-07-28T10:00:00.000Z',
};
const list = [mediumMock1, mediumMock2, mediumMock3];

describe('FilterableList component', () => {
  it('should render all medium when no filter is selected', () => {
    render(<FilterableList list={list} />);

    const readyMedium = screen.getByText('How to use to Subly');
    const errorMedium = screen.getByText('This has many languages');
    const transcribingMedium = screen.getByText('This is transcribing');

    expect(readyMedium).toBeInTheDocument();
    expect(errorMedium).toBeInTheDocument();
    expect(transcribingMedium).toBeInTheDocument();
  });

  it('should render only ready medium on select status filter', () => {
    render(<FilterableList list={list} />);

    userEvent.selectOptions(
      screen.getByRole('combobox', { name: /status/i }),
      screen.getByRole('option', { name: 'Ready' })
    );

    const readyMedium = screen.getByText('How to use to Subly');
    const errorMedium = screen.queryByText('This has many languages');
    const transcribingMedium = screen.queryByText('This is transcribing');

    expect(readyMedium).toBeInTheDocument();
    expect(errorMedium).not.toBeInTheDocument();
    expect(transcribingMedium).not.toBeInTheDocument();
  });

  it('should render only english medium on select language filter', () => {
    render(<FilterableList list={list} />);

    userEvent.selectOptions(
      screen.getByRole('combobox', { name: /language/i }),
      screen.getByRole('option', { name: 'English' })
    );

    expect(screen.getByText('How to use to Subly')).toBeInTheDocument();
    expect(screen.getByText('This has many languages')).toBeInTheDocument();
    expect(screen.queryByText('This is transcribing')).not.toBeInTheDocument();
  });

  it('should render only transcribing and czech medium on select status and language filter', () => {
    render(<FilterableList list={list} />);

    userEvent.selectOptions(
      screen.getByRole('combobox', { name: /status/i }),
      screen.getByRole('option', { name: 'Transcribing' })
    );
    userEvent.selectOptions(
      screen.getByRole('combobox', { name: /language/i }),
      screen.getByRole('option', { name: 'Czech' })
    );

    expect(screen.queryByText('How to use to Subly')).not.toBeInTheDocument();
    expect(
      screen.queryByText('This has many languages')
    ).not.toBeInTheDocument();
    expect(screen.getByText('This is transcribing')).toBeInTheDocument();
  });
});

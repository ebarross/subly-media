import { render, screen } from '@testing-library/react';
import Select from './select';

describe('Select component', () => {
  it('should render nothing when options is empty', () => {
    const { container } = render(
      <Select label="test" onSelect={jest.fn()} options={[]} />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('should render options when options is provided', () => {
    const options = [
      { value: 'value 1', description: 'description 1' },
      { value: 'value 2', description: 'description 2' },
    ];

    render(<Select label="test" onSelect={jest.fn()} options={options} />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getAllByTestId('option')).toHaveLength(options.length);
  });
});

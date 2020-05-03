import React from 'react';
import {
  render
} from '@testing-library/react';
import Filter from '../';

const mockList = [{
  name: 'title',
  selected: false,
  subCategory: []
}];

const search = jest.fn();
const handleSelection = jest.fn();

describe('Filter Component', () => {

  test('TEST renders element with empty props', () => {
    const { getByText } = render(<Filter />);
    const linkElement = getByText(/Apply filter/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('TEST renders element with props', () => {
    const { getByText, getByRole } = render(<Filter list={mockList} search={search} handleSelection={handleSelection} />);
    const title = getByText(/title/i);
    const btn = getByText(/Apply filter/i);
    const checkbox = getByRole('checkbox-row');
    checkbox.click();
    expect(handleSelection).toBeCalled();
    btn.click();
    expect(search).toBeCalled();
    expect(title).toBeInTheDocument();
  });
})

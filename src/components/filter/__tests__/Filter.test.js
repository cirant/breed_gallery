import React from 'react';
import {
  render
} from '@testing-library/react';
import Filter from '../';
import '@testing-library/jest-dom/extend-expect';

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
    const { getByText } = render(<Filter list={mockList} search={search} handleSelection={handleSelection} />);
    const title = getByText(/title/i);
    const btn = getByText(/Apply filter/i); btn.click(); expect(search).toBeCalled(); expect(title).toBeInTheDocument();
  });

})


    // list: PropTypes.arrayOf(
    //   PropTypes.shape({
    //     name: PropTypes.string.isRequired,
    //     selected: PropTypes.bool.isRequired,
    //     subCategory: PropTypes.arrayOf(PropTypes.shape({
    //       name: PropTypes.string.isRequired,
    //       selected: PropTypes.bool.isRequired
    //     })).isRequired
    //   }),
    // ).isRequired,
    // search: PropTypes.func.isRequired,
    // handleSelection: PropTypes.func.isRequired
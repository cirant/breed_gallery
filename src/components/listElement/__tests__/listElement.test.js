import '@testing-library/jest-dom';
import React from 'react';
import ListElement from '../';
import {
  render
} from '@testing-library/react';

const mockList = {
  name: 'title',
  selected: false,
  subCategory: [
    {
      name: 'subcategory',
      selected: false,
    }
  ]
};

const handler = jest.fn();

describe('ListElement Component', () => {

  test('TEST renders element with empty props', () => {
    const { getByText, getByRole } = render(<ListElement element={mockList} onClick={handler} ></ListElement>);
    const title = getByText(/title/i);
    expect(title).toBeInTheDocument();
    const checkbox = getByRole('checkbox-row');
    const subCheckbox = getByRole('second-checkbox-row');
    checkbox.click();
    subCheckbox.click();
    expect(handler).toHaveBeenCalledTimes(2);
  });
})

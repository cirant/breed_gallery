import React from 'react';
import {
  render
} from '@testing-library/react';
import Gallery from '../';

const list = [{
  title: 'breed',
  pictures: ['https://images.dog.ceo/breeds/greyhound-italian/n02091032_10079.jpg',
    'https://images.dog.ceo/breeds/greyhound-italian/n02091032_102.jpg'
  ]
},
{
  title: 'breed 2',
  pictures: ['https://images.dog.ceo/breeds/greyhound-italian/n02091032_10079.jpg',
    'https://images.dog.ceo/breeds/greyhound-italian/n02091032_102.jpg'
  ]
}
];

describe('Gallery Component', () => {

  test('TEST renders element with default props', () => {
    const { getByText } = render(<Gallery />);
    const defaultText = getByText(/Gallery empty. Please select a breed/i);
    expect(defaultText).toBeInTheDocument();
  });

  test('TEST renders element with emptyMessage prop', () => {
    const { getByText } = render(<Gallery emptyMessage="any text" />);
    const defaultText = getByText(/any text/i);
    expect(defaultText).toBeInTheDocument();
  });

  test('TEST renders element with pictureList prop', () => {
    const { getAllByText } = render(<Gallery pictureList={list} col={4} />);
    const breed = getAllByText(/breed/i);
    expect(breed).toHaveLength(4)
  });

})



import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders the counter component', () => {
  const { getByText } = render(<Counter />);
  const incrementButton = getByText('Increment');
  const decrementButton = getByText('Decrement');

  expect(incrementButton).toBeInTheDocument();
  expect(decrementButton).toBeInTheDocument();
});

test('increments and decrements the counter', () => {
  const { getByText } = render(<Counter />);
  const incrementButton = getByText('Increment');
  const decrementButton = getByText('Decrement');
  const counterValue = getByText('Count: 0');

  fireEvent.click(incrementButton);
  expect(counterValue).toHaveTextContent('Count: 1');

  fireEvent.click(decrementButton);
  expect(counterValue).toHaveTextContent('Count: 0');
});

/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import renderer from 'react-test-renderer';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ReviewList from '../review/ReviewList.jsx';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});

test('should render ReviewList Component', () => {
  render(<ReviewList />);
  const reviewListElement = screen.getByTestId('reviewlist-1');
  expect(reviewListElement).toBeInTheDocument();
});

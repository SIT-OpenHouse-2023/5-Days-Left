import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeView from './views/HomeView';

test('renders learn react link', () => {
  render(<HomeView />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

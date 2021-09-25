import { render, screen } from '@testing-library/react';
import { App } from './app';

test('renders Reddid', () => {
  render(<App />);
  const element = screen.getByText(/Reddid/i);
  expect(element).toBeInTheDocument();
});

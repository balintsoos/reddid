import { render, screen } from '@testing-library/react';
import { App } from './app';

test('renders hello', () => {
  render(<App />);
  const helloElement = screen.getByText(/Coming soon/i);
  expect(helloElement).toBeInTheDocument();
});

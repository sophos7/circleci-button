import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('displays greeting when clicked', async () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Press Here/));
  const linkElement = screen.getByText(/Build app with CircleCI/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('header renders with react testing tutorial in the document', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is react testing testing tutorial/i);
  expect(linkElement).toBeInTheDocument();
});

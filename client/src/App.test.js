import { render, screen } from '@testing-library/react';
import App from './App';
import SearchAction from './components/SearchAction';

test('render main page', () => {
  render(<App />);
  const linkElement = screen.getByText(/SEPER System/i);
  expect(linkElement).toBeInTheDocument();
});













































test('render search page', () => {
  render(<SearchAction />);
  const TitleText = screen.getByText(/Title:/i);
  expect(TitleText).toBeInTheDocument();
  const IsbnText = screen.getByText(/Isbn:/i);
  expect(IsbnText).toBeInTheDocument();
  const AuthorText = screen.getByText(/Author:/i);
  expect(AuthorText).toBeInTheDocument();









  
});


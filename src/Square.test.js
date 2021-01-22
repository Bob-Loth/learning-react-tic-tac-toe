import { render } from '@testing-library/react';

// Square is a "default" export from Square.js, so we don't need
// curly braces around it like we do for render
import Square from './Square';

test('should render an empty Square', () => {
  const square = render(<Square value={null} />); // Line 1
  const button = square.getByRole('button'); // Line 2
  expect(button.innerHTML).toBe(''); // Line 3
}); 

test('should render with an X when the value prop is X', () => {
  const square = render(<Square value={'X'} />); // Line 1
  const button = square.getByRole('button'); // Line 2
  expect(button.innerHTML).toBe('X'); // Line 3
})
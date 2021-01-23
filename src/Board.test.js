import { render, fireEvent } from '@testing-library/react';
import Board from './Board'

test('board re-rendered on each click, with xs and os appearing on alternating clicks',
() => {
  const board = render(<Board initialSquares={Array(9).fill(null)}/>);
  
  const buttons = board.queryAllByRole('button');
  expect(buttons).toHaveLength(9);
  expect(buttons[4].innerHTML).toBe("");
  expect(buttons[0].innerHTML).toBe("");
  fireEvent.click(buttons[4]);
  fireEvent.click(buttons[0]);
  expect(buttons[4].innerHTML).toBe('X');
  expect(buttons[0].innerHTML).toBe('O');
}) 

test('Next player status should alternate between X and O on clicks, starting with X',
() => {
  const board = render(<Board initialSquares={Array(9).fill(null)}/>);
  
  const status_msg_pre_click = board.getByText('Next player', {exact: false});
  expect(status_msg_pre_click.innerHTML).toBe('Next player: X');

  const buttons = board.queryAllByRole('button');
  fireEvent.click(buttons[4]);
  
  const status_msg_post_click = board.getByText('Next player', {exact: false});
  expect(status_msg_post_click.innerHTML).toBe('Next player: O');
})
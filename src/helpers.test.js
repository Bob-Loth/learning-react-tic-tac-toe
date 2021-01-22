import {calculateWinner} from './helpers';

test('should return X as the winner if it has the top row', () => {
   // Arrange the test
   const squares = ['X', 'X', 'X', 'O', null, 'O', null, null, null];
   
   // Act
   const winner = calculateWinner(squares);
 
   // Assert
   expect(winner).toBe('X');
 });

 test('should return O as the winner if it has the ascending diagonal', () => {
   // Arrange the test
   const squares = ['X', 'X', 'O', null, 'O', null, 'O', null, null];
   
   // Act
   const winner = calculateWinner(squares);
 
   // Assert
   expect(winner).toBe('O');
 });

 test('should return no winner if no lines have been made', () => {
   // Arrange the test
   const squares = ['X', null, 'X', 'O', null, 'O', null, null, null];
   
   // Act
   const winner = calculateWinner(squares);
 
   // Assert
   expect(winner).toBe(null); 
 });
import { removeDuplicates } from './removeDuplicates';
import { arraysMatch } from '@writetome51/arrays-match';


let arr: any[] = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];


// Test 1
removeDuplicates(arr);
if (arraysMatch(arr, [1, 2, 3, 4, 5, 6])) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2
arr = ['a', 'b', 'c', 'a', 'b', 'c'];
removeDuplicates(arr);
if (arraysMatch(arr, ['a', 'b', 'c'])) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3
arr = [true, false, true, false];
removeDuplicates(arr);
if (arraysMatch(arr, [true, false])) console.log('test 3 passed');
else console.log('test 3 FAILED');
import { removeDuplicates } from './index';
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


// Test 4
arr = [1, 2, ['a', 'b'], 9, 1, 2, 3, 4, ['a', 'b']];
let arrCopy = arr;
removeDuplicates(arr);
if (arraysMatch(arr, [1, 2, ['a', 'b'], 9, 3, 4])) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 4A: make sure memory reference isnt broken:
if (arraysMatch(arr, arrCopy)) console.log('test 4A passed');
else console.log('test 4A FAILED');


// Test 5: error should trigger if array contains object:
let errorTriggered = false;
arr = [1, 2, 3, {prop: 1}, 4];
try {
	removeDuplicates(arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 6: error should trigger if array is empty:
errorTriggered = false;
try {
	removeDuplicates([]);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');

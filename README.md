To include in your project:

import {removeDuplicates} from '@writetome51/array-remove-duplicates';

removeDuplicates(array): void

NOTICE:  The function will error if array contains an object.  
Examples:

let arr = [1, 2, 3, 4, 1, 2, 3, 4, 5];  
removeDuplicates(arr);  
// arr is now [1,2,3,4,5]

let arr = [1, 2, ['a','b'], 9, 1, 2, 3, 4, ['a','b']];  
removeDuplicates(arr);  
// arr is now [9,1,2,3,4,['a','b']]

// This will trigger error, because arr contains object:  
let arr = [1, 2, {prop:1}, 2, 3, 4];  
removeDuplicates(arr); 


# removeDuplicates(array): void

Removes any extra instances of unique items in `array`.  
NOTICE:  The function will error if `array` contains objects.  It can contain arrays. 
 
## Examples
```
let arr = [1, 2, 3, 4, 1, 2, 3, 4, 5];  
removeDuplicates(arr);  
// arr is now [1,2,3,4,5]

let arr = [1, 2, ['a','b'], 9, 1, 2, 3, 4, ['a','b']];  
removeDuplicates(arr);  
// arr is now [1, 2, ['a','b'], 9, 3, 4]

// This will trigger error, because arr contains object:  
let arr = [1, 2, {prop:1}, 2, 3, 4];  
removeDuplicates(arr); 
```
## Installation
`npm i  @writetome51/array-remove-duplicates`


## Loading
```
// if using TypeScript:
import {removeDuplicates} from '@writetome51/array-remove-duplicates';
// if using ES5 JavaScript:
var removeDuplicates = require('@writetome51/array-remove-duplicates').removeDuplicates;
```
# removeDuplicates(array): void

Removes any extra instances of each item in `array`.
 
## Examples
```js
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
```js
import {removeDuplicates} from '@writetome51/array-remove-duplicates';
```

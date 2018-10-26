"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeDuplicates_1 = require("./removeDuplicates");
var arrays_match_1 = require("@writetome51/arrays-match");
var arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
// Test 1
removeDuplicates_1.removeDuplicates(arr);
if (arrays_match_1.arraysMatch(arr, [1, 2, 3, 4, 5, 6]))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 2
arr = ['a', 'b', 'c', 'a', 'b', 'c'];
removeDuplicates_1.removeDuplicates(arr);
if (arrays_match_1.arraysMatch(arr, ['a', 'b', 'c']))
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 3
arr = [true, false, true, false];
removeDuplicates_1.removeDuplicates(arr);
if (arrays_match_1.arraysMatch(arr, [true, false]))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');

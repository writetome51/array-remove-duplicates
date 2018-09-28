"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAndRemoveDuplicates_1 = require("@writetome51/array-get-and-removers-filtered-results-duplicates/getAndRemoveDuplicates");
// Remaining items in array may be out of order.
function removeDuplicates(array) {
    getAndRemoveDuplicates_1.getAndRemoveDuplicates(array);
}
exports.removeDuplicates = removeDuplicates;

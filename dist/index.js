import { getUniqueItems } from '@writetome51/array-get-unique-items';
import { setArray } from '@writetome51/set-array';
export function removeDuplicates(array) {
    let uniqueItems = getUniqueItems(array);
    setArray(array, uniqueItems);
}

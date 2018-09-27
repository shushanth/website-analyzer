/**
 * @author:shushanth
 * @description: shared helpers
 */


/**
 * @param: array
 * @description: return boolean on whether passed array is empty or not
 * Array.isArray determines whether the passed value is Array and also check for the emptiness of array
 * Browser capibility is chrome-5 , ie-9, FF -4.0
 *return true is array is empty , return false if array is not empty
*/

export  function isEmptyArray(arr: Array<any>): boolean  {
  return !(Array.isArray(arr) && arr.length);
}

/**
 * @description: 
 * @param {any} [...]
 * @return {any} [...]
 */
export default function removeDuplicateByNewSet(arr:any[]){
  return [...new Set(arr)]
}
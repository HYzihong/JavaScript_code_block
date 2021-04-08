/**
 * @description: 
 * @param arr  [...]
 * @param arr  [...]
 * @return [...]
 */
export default function intersectionByNewSet(arr1:any[],arr2:any[]){
  return [...new Set(arr1)].filter(item => arr2.includes(item))
}
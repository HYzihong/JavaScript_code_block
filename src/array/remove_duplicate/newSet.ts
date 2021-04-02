/**
 * @description: [...new Set(arr)] 只可以去除数组string/number类型的重复成员，
 * @param arr  [...]
 * @return [...]
 */
export default function removeDuplicateByNewSet(arr:any[]){
  return [...new Set(arr)]
}
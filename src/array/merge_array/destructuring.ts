/**
 * @description: 数组解构赋值
 * @param {any} []
 * @param {any} []
 * @param {any} []
 * @return {any} [...]
 */
export default function mergeArrayBydDestructuring(arr1:any[],arr2:any[],arr3:any[]){
  return [...arr1, ...arr2, ...arr3]
}
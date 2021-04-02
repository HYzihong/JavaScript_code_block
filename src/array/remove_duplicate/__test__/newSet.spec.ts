// const arr = [1, 1, 2, 2, 3, 4, 5, 5]
// const newArr = [...new Set(arr)]
// console.log(newArr);
// const arr1 = ['1', 1, 2, 2, 3, 4, '5', 5,'5', 5]
// const newArr1 = [...new Set(arr1)]
// console.log(newArr1);
// const arr2 = ['1', 1,[ 2], [2] ,2,3, 4, '5', 5]
// const newArr2 = [...new Set(arr2)]
// console.log(newArr2);
// const arr3 = ['1', 1,{a:1},2 ,2,3, 4, '5', 5]
// const newArr3 = [...new Set(arr2)]
// console.log(newArr2);
import removeDuplicateByNewSet from '../newSet'
describe('remove duplicate', () => {
it('remove duplicate by newSet [1, 1, 2, 2, 3, 4, 5, 5] to equal [1,2,3,4,5] ', () => {
  const arr1 = [1, 1, 2, 2, 3, 4, 5, 5]
  expect(removeDuplicateByNewSet(arr1)).toEqual([1,2,3,4,5]);
});

it(`remove duplicate by newSet ['1', 1, 2, 2, 3, 4, '5', 5,'5', 5] to equal ['1',1,2,3,4,'5',5] `, () => {
  const arr2 = ['1', 1, 2, 2, 3, 4, '5', 5,'5', 5]
  expect(removeDuplicateByNewSet(arr2)).toEqual(['1',1,2,3,4,'5',5]);
});

})
import mergeArrayBydDestructuring from '../destructuring'
describe('merge array', () => {
  it('merge array by destructuring arr1 , arr2 , arr3 to equal [1,2,3,4,5]', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    const arr3 = [7, 8, 9]
    expect(mergeArrayBydDestructuring(arr1,arr2,arr3)).toEqual([1,2,3,4,5,6,7,8,9]);
  });
})
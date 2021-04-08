import intersectionByNewSet from '../newSet'
describe('intersection', () => {

  it('intersection by newSet arr1 [1, 1, 2, 5] and arr2 [1, 3, 2, 2, 3, 4, 5, 5] to equal [1,2,3,4,5] ', () => {
    const arr1 :number[] = [1, 1, 2, 5]
    const arr2 :number[] = [1, 3, 2, 2, 3, 4, 5, 5]
    expect(intersectionByNewSet(arr1,arr2)).toEqual([1,2,5]);
  });

  

})
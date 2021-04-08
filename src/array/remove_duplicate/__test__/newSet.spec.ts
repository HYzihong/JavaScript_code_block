import removeDuplicateByNewSet from '../newSet'
describe('remove duplicate', () => {

  it('remove duplicate by newSet [1, 1, 2, 2, 3, 4, 5, 5] to equal [1,2,3,4,5] ', () => {
    const arr :number[] = [1, 1, 2, 2, 3, 4, 5, 5]
    expect(removeDuplicateByNewSet(arr)).toEqual([1,2,3,4,5]);
  });

  it(`remove duplicate by newSet ['1', 1, 2, 2, 3, 4, '5', 5,'5', 5] to equal ['1',1,2,3,4,'5',5] `, () => {
    const arr :(number|string)[] = ['1', 1, 2, 2, 3, 4, '5', 5,'5', 5]
    expect(removeDuplicateByNewSet(arr)).toEqual(['1',1,2,3,4,'5',5]);
  });

  it(`remove duplicate by newSet [{a:1},{a:1}] to equal [{a:1}] `, () => {
    const arr :object[] = [{a:1},{a:1}]
    // expect(removeDuplicateByNewSet(arr)).toEqual([{a:1}]);
    expect(removeDuplicateByNewSet(arr)).toEqual(arr);
  });

  it(`remove duplicate by newSet [[12,3],[12,3]] to equal [[12,3],[12,3]] `, () => {
    const arr :object[] = [[12,3],[12,3]]
    expect(removeDuplicateByNewSet(arr)).toEqual(arr);
  });

})
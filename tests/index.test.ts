import { merge } from "../index";

test("merge three cpllection",() => {
    const collection_1 = [1,2,3];
    const collection_2 = [4,5,6];
    const collection_3 = [7,8,9];

    const result = merge(collection_1,collection_2,collection_3);
    expect(result).toEqual([1,2,3,4,5,6,7,8,9]);
})

test("empty collection",() => {
    const collection_1:number[]= [];
    const collection_2:number[] = [];
    const collection_3:number[]= [];

    const result = merge(collection_1,collection_2,collection_3);
    expect(result).toEqual([]);
})

export function merge(collection_1: number[], collection_2: number[], collection_3: number[]) {
    let i: number = 0;
    let j: number = 0;
    let k: number = 0;
    let result: number[] = [];
    while (i < collection_1.length && j < collection_2.length && k < collection_3.length) {
        const min = Math.min(collection_1[i], collection_2[j], collection_3[k]);
        result.push(min);
        if (min === collection_1[i]) {
            i++;
        } if (min === collection_2[j]) {
            j++;
        } if(min === collection_3[k]) {
            k++;
        }
    }
    while (i < collection_1.length) {
        result.push(collection_1[i]);
        i++;
    }

    while (j < collection_2.length) {
        result.push(collection_2[j]);
        j++;
    }

    while (k < collection_3.length) {
        result.push(collection_3[k]);
        k++;
    }

    return result;
}

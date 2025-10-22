export function sum(arr) {
    if (!Array.isArray(arr)) return NaN;
    return arr.reduce((acc, val) => acc + val, 0);
}

export function product(arr) {
    if (!Array.isArray(arr)) return NaN;
    return arr.reduce((acc, val) => acc * val, 1);
}

export function sumOdds(arr) {
    if (!Array.isArray(arr)) return NaN;
    return arr
        .filter(val => typeof val === 'number' && val % 2 !== 0)
        .reduce((acc, val) => acc + val, 0);
}
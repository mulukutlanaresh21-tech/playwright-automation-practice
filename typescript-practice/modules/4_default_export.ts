// we can export only one function/varible as default.

export const PI: number = 3.14;

export function add(x: number, y: number): number {
    return x + y;
}

export function subtract(x: number, y: number): number {
    return x - y;
}

export function multiply(x: number, y: number): number {
    return x * y;
}

export default function division(x: number, y: number): number {
    return x / y;
}
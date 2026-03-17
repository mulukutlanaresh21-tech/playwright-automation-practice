//Named exports : exporting the data and functions with its name separately. 
// Add export for all functions or variables

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

// types.ts
export interface User {
    name: string;
    age: number;
}
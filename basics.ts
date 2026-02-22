// =====================================================
// Utility Functions
// =====================================================

function greet(name: string): void {
    console.log(`Hello, ${name}`);
}

function isLegal(age: number): boolean {
    return age >= 18;
}

function executeAfterDelay(callback: () => void): void {
    setTimeout(callback, 1000);
}

function demoFunction(): void {
    console.log("Demo function executed");
}

// Example Usage
greet("Rust");
console.log(isLegal(17));
executeAfterDelay(demoFunction);

// =====================================================
// Interface Example
// =====================================================

interface User {
    firstName: string;
    lastName: string;
    age: number;
    email?: string;
}

function displayUserInfo(user: User): void {
    const status =
        user.age > 18
            ? "You are above 18"
            : "You are under 18";

    console.log(`${status} : ${user.age}`);

    if (user.email) {
        console.log(`Email: ${user.email}`);
    }
}

displayUserInfo({
    firstName: "Rust",
    lastName: "Singh",
    age: 19,
    email: "example@gmail.com"
});

// =====================================================
// Class + Interface Implementation
// =====================================================

interface Person {
    name: string;
    age: number;
    greet(message: string): void;
}

class Employee implements Person {

    constructor(
        public name: string,
        public age: number
    ) {}

    greet(message: string): void {
        console.log(
            `Hello ${this.name}, age ${this.age}. Message: ${message}`
        );
    }
}

const employee = new Employee("Rust", 20);
employee.greet("I love graphs");

// =====================================================
// Type Alias Examples
// =====================================================

type UserProfile = {
    name: string;
    age: number;
    height: number;
};

type UserSpeed = {
    maxSpeed: number;
    minSpeed: number;
};

type UserIntersection = UserProfile & UserSpeed;
type UserUnion = UserProfile | UserSpeed;

// Dummy structural typing demo
interface EmptyA {}
interface EmptyB {}

class Dummy implements EmptyA, EmptyB {}

// =====================================================
// Enum and Literal Type Example
// =====================================================

enum Direction {
    Up,
    Down,
    Left,
    Right
}

function handleDirection(direction: Direction): void {

    switch (direction) {
        case Direction.Up:
            console.log("Up is pressed");
            break;

        case Direction.Down:
            console.log("Down is pressed");
            break;

        case Direction.Left:
            console.log("Left is pressed");
            break;

        case Direction.Right:
            console.log("Right is pressed");
            break;
    }
}

handleDirection(Direction.Up);

// =====================================================
// Generic Example
// =====================================================

function randomStuff<T>(items: T[]): T {
    if (items.length === 0) {
        throw new Error("Array cannot be empty");
    }

    return items.at(0)!;
}

const textData = randomStuff(["hehe"]);
console.log(textData.toUpperCase());

const numberData = randomStuff([1, 23, 4]);
console.log(numberData);

// =====================================================
// tsconfig Notes
// =====================================================

/*
Compilation Settings:

rootDir:
- Source TypeScript directory.

outDir:
- Compiled JavaScript output directory.

Strict Mode Benefits:
- Prevents implicit any types.
- Enables strong null safety.

Example:
const num = 1;
// TypeScript automatically infers number type.
*/

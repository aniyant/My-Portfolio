import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>My Portfolio</div>
      


      // 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;

export default App;

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");

      // 10. Loops with Conditions
      for (let i = 0; i < 5; i++) {
        console.log(`Iteration: ${i}`);
        if (i === 3) {
            console.log("Special iteration reached!");
        }
    }
    
    // 11. Random Functions
    function getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }
    
    console.log(`Random number: ${getRandomNumber()}`);
    
    // 12. Nested Loops
    for (let i = 1; i <= 3; i++) {
        console.log(`Outer Loop: ${i}`);
        for (let j = 1; j <= 2; j++) {
            console.log(`   Inner Loop: ${j}`);
        }
    }
    
    // 13. String Operations
    const message = "Hello, World!";
    console.log(message.toUpperCase());
    console.log(message.toLowerCase());
    console.log(message.split(", "));
    
    // 14. Array Mapping
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(num => num ** 2);
    console.log(squares);
    
    // 15. Default Parameters
    function greetUser(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }
    
    greetUser("Sunny");
    greetUser();
    
    // 16. Ternary Operator
    const canVote = userCount > 0 ? "Yes" : "No";
    console.log(`Can vote: ${canVote}`);
    
    // 17. Arrow Functions
    const multiply = (a, b) => a * b;
    console.log(`5 x 3 = ${multiply(5, 3)}`);
    
    // 18. Object Destructuring
    const { name, id } = user;
    console.log(`User ID: ${id}, Name: ${name}`);
    
    // 19. Date Object
    const today = new Date();
    console.log(`Today's date is: ${today.toDateString()}`);
    
    // 20. Function Expressions
    const divide = function (a, b) {
        if (b === 0) return "Cannot divide by zero.";
        return a / b;
    };
    
    console.log(`10 / 2 = ${divide(10, 2)}`);
    console.log(`10 / 0 = ${divide(10, 0)}`);
    
    // Repeat for random data to complete 100 lines
    console.log("Execution complete!");
    // 1. Variables and Constants
    const appName = "DummyApp";
    let userCount = 0;
    let isUserLoggedIn = false;
    
    // 2. Functions
    function addUser(name) {
        userCount++;
        console.log(`User ${name} added. Total users: ${userCount}`);
    }
    
    function removeUser(name) {
        if (userCount > 0) {
            userCount--;
            console.log(`User ${name} removed. Total users: ${userCount}`);
        } else {
            console.log("No users to remove.");
        }
    }
    
    // 3. Conditionals
    function checkLoginStatus() {
        if (isUserLoggedIn) {
            console.log("User is logged in.");
        } else {
            console.log("User is not logged in.");
        }
    }
    
    // 4. Loops
    for (let i = 1; i <= 10; i++) {
        console.log(`Processing item ${i}`);
    }
    
    // 5. Arrays
    const tasks = ["Task1", "Task2", "Task3"];
    tasks.forEach(task => console.log(`Pending: ${task}`));
    
    // 6. Objects
    const user = {
        id: 1,
        name: "John Doe",
        isActive: true,
        login() {
            isUserLoggedIn = true;
            console.log(`${this.name} logged in.`);
        },
        logout() {
            isUserLoggedIn = false;
            console.log(`${this.name} logged out.`);
        }
    };
    
    // 7. Logic
    function checkTaskCompletion(task) {
        const isCompleted = Math.random() > 0.5; // Random boolean
        console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
    }
    
    // 8. Dummy Function Calls
    addUser("Alice");
    addUser("Bob");
    removeUser("Alice");
    checkLoginStatus();
    user.login();
    checkLoginStatus();
    
    // 9. Array Manipulations
    tasks.push("Task4");
    tasks.pop();
    
    // 10. Loops with Conditions
    for (let i = 0; i < 5; i++) {
        console.log(`Iteration: ${i}`);
        if (i === 3) {
            console.log("Special iteration reached!");
        }
    }
    
    // 11. Random Functions
    function getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }
    
    console.log(`Random number: ${getRandomNumber()}`);
    
    // 12. Nested Loops
    for (let i = 1; i <= 3; i++) {
        console.log(`Outer Loop: ${i}`);
        for (let j = 1; j <= 2; j++) {
            console.log(`   Inner Loop: ${j}`);
        }
    }
    
    // 13. String Operations
    const message = "Hello, World!";
    console.log(message.toUpperCase());
    console.log(message.toLowerCase());
    console.log(message.split(", "));
    
    // 14. Array Mapping
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(num => num ** 2);
    console.log(squares);
    
    // 15. Default Parameters
    function greetUser(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }
    
    greetUser("Sunny");
    greetUser();
    
    // 16. Ternary Operator
    const canVote = userCount > 0 ? "Yes" : "No";
    console.log(`Can vote: ${canVote}`);
    
    // 17. Arrow Functions
    const multiply = (a, b) => a * b;
    console.log(`5 x 3 = ${multiply(5, 3)}`);
    
    // 18. Object Destructuring
    const { name, id } = user;
    console.log(`User ID: ${id}, Name: ${name}`);
    
    // 19. Date Object
    const today = new Date();
    console.log(`Today's date is: ${today.toDateString()}`);
    
    // 20. Function Expressions
    const divide = function (a, b) {
        if (b === 0) return "Cannot divide by zero.";
        return a / b;
    };
    
    console.log(`10 / 2 = ${divide(10, 2)}`);
    console.log(`10 / 0 = ${divide(10, 0)}`);
    
    // Repeat for random data to complete 100 lines
    console.log("Execution complete!");
    // 1. Variables and Constants
    const appName = "DummyApp";
    let userCount = 0;
    let isUserLoggedIn = false;
    
    // 2. Functions
    function addUser(name) {
        userCount++;
        console.log(`User ${name} added. Total users: ${userCount}`);
    }
    
    function removeUser(name) {
        if (userCount > 0) {
            userCount--;
            console.log(`User ${name} removed. Total users: ${userCount}`);
        } else {
            console.log("No users to remove.");
        }
    }
    
    // 3. Conditionals
    function checkLoginStatus() {
        if (isUserLoggedIn) {
            console.log("User is logged in.");
        } else {
            console.log("User is not logged in.");
        }
    }
    
    // 4. Loops
    for (let i = 1; i <= 10; i++) {
        console.log(`Processing item ${i}`);
    }
    
    // 5. Arrays
    const tasks = ["Task1", "Task2", "Task3"];
    tasks.forEach(task => console.log(`Pending: ${task}`));
    
    // 6. Objects
    const user = {
        id: 1,
        name: "John Doe",
        isActive: true,
        login() {
            isUserLoggedIn = true;
            console.log(`${this.name} logged in.`);
        },
        logout() {
            isUserLoggedIn = false;
            console.log(`${this.name} logged out.`);
        }
    };
    
    // 7. Logic
    function checkTaskCompletion(task) {
        const isCompleted = Math.random() > 0.5; // Random boolean
        console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
    }
    
    // 8. Dummy Function Calls
    addUser("Alice");
    addUser("Bob");
    removeUser("Alice");
    checkLoginStatus();
    user.login();
    checkLoginStatus();
    
    // 9. Array Manipulations
    tasks.push("Task4");
    tasks.pop();
    
    // 10. Loops with Conditions
    for (let i = 0; i < 5; i++) {
        console.log(`Iteration: ${i}`);
        if (i === 3) {
            console.log("Special iteration reached!");
        }
    }
    
    // 11. Random Functions
    function getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }
    
    console.log(`Random number: ${getRandomNumber()}`);
    
    // 12. Nested Loops
    for (let i = 1; i <= 3; i++) {
        console.log(`Outer Loop: ${i}`);
        for (let j = 1; j <= 2; j++) {
            console.log(`   Inner Loop: ${j}`);
        }
    }
    
    // 13. String Operations
    const message = "Hello, World!";
    console.log(message.toUpperCase());
    console.log(message.toLowerCase());
    console.log(message.split(", "));
    
    // 14. Array Mapping
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(num => num ** 2);
    console.log(squares);
    
    // 15. Default Parameters
    function greetUser(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }
    
    greetUser("Sunny");
    greetUser();
    
    // 16. Ternary Operator
    const canVote = userCount > 0 ? "Yes" : "No";
    console.log(`Can vote: ${canVote}`);
    
    // 17. Arrow Functions
    const multiply = (a, b) => a * b;
    console.log(`5 x 3 = ${multiply(5, 3)}`);
    
    // 18. Object Destructuring
    const { name, id } = user;
    console.log(`User ID: ${id}, Name: ${name}`);
    
    // 19. Date Object
    const today = new Date();
    console.log(`Today's date is: ${today.toDateString()}`);
    
    // 20. Function Expressions
    const divide = function (a, b) {
        if (b === 0) return "Cannot divide by zero.";
        return a / b;
    };
    
    console.log(`10 / 2 = ${divide(10, 2)}`);
    console.log(`10 / 0 = ${divide(10, 0)}`);
    
    // Repeat for random data to complete 100 lines
    console.log("Execution complete!");
    // 1. Variables and Constants
    const appName = "DummyApp";
    let userCount = 0;
    let isUserLoggedIn = false;
    
    // 2. Functions
    function addUser(name) {
        userCount++;
        console.log(`User ${name} added. Total users: ${userCount}`);
    }
    
    function removeUser(name) {
        if (userCount > 0) {
            userCount--;
            console.log(`User ${name} removed. Total users: ${userCount}`);
        } else {
            console.log("No users to remove.");
        }
    }
    
    // 3. Conditionals
    function checkLoginStatus() {
        if (isUserLoggedIn) {
            console.log("User is logged in.");
        } else {
            console.log("User is not logged in.");
        }
    }
    
    // 4. Loops
    for (let i = 1; i <= 10; i++) {
        console.log(`Processing item ${i}`);
    }
    
    // 5. Arrays
    const tasks = ["Task1", "Task2", "Task3"];
    tasks.forEach(task => console.log(`Pending: ${task}`));
    
    // 6. Objects
    const user = {
        id: 1,
        name: "John Doe",
        isActive: true,
        login() {
            isUserLoggedIn = true;
            console.log(`${this.name} logged in.`);
        },
        logout() {
            isUserLoggedIn = false;
            console.log(`${this.name} logged out.`);
        }
    };
    
    // 7. Logic
    function checkTaskCompletion(task) {
        const isCompleted = Math.random() > 0.5; // Random boolean
        console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
    }
    
    // 8. Dummy Function Calls
    addUser("Alice");
    addUser("Bob");
    removeUser("Alice");
    checkLoginStatus();
    user.login();
    checkLoginStatus();
    
    // 9. Array Manipulations
    tasks.push("Task4");
    tasks.pop();
    
    // 10. Loops with Conditions
    for (let i = 0; i < 5; i++) {
        console.log(`Iteration: ${i}`);
        if (i === 3) {
            console.log("Special iteration reached!");
        }
    }
    
    // 11. Random Functions
    function getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }
    
    console.log(`Random number: ${getRandomNumber()}`);
    
    // 12. Nested Loops
    for (let i = 1; i <= 3; i++) {
        console.log(`Outer Loop: ${i}`);
        for (let j = 1; j <= 2; j++) {
            console.log(`   Inner Loop: ${j}`);
        }
    }
    
    // 13. String Operations
    const message = "Hello, World!";
    console.log(message.toUpperCase());
    console.log(message.toLowerCase());
    console.log(message.split(", "));
    
    // 14. Array Mapping
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(num => num ** 2);
    console.log(squares);
    
    // 15. Default Parameters
    function greetUser(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }
    
    greetUser("Sunny");
    greetUser();
    
    // 16. Ternary Operator
    const canVote = userCount > 0 ? "Yes" : "No";
    console.log(`Can vote: ${canVote}`);
    
    // 17. Arrow Functions
    const multiply = (a, b) => a * b;
    console.log(`5 x 3 = ${multiply(5, 3)}`);
    
    // 18. Object Destructuring
    const { name, id } = user;
    console.log(`User ID: ${id}, Name: ${name}`);
    
    // 19. Date Object
    const today = new Date();
    console.log(`Today's date is: ${today.toDateString()}`);
    
    // 20. Function Expressions
    const divide = function (a, b) {
        if (b === 0) return "Cannot divide by zero.";
        return a / b;
    };
    
    console.log(`10 / 2 = ${divide(10, 2)}`);
    console.log(`10 / 0 = ${divide(10, 0)}`);
    
    // Repeat for random data to complete 100 lines
    console.log("Execution complete!");
    // 1. Variables and Constants
    const appName = "DummyApp";
    let userCount = 0;
    let isUserLoggedIn = false;
    
    // 2. Functions
    function addUser(name) {
        userCount++;
        console.log(`User ${name} added. Total users: ${userCount}`);
    }
    
    function removeUser(name) {
        if (userCount > 0) {
            userCount--;
    
    export default App;
    
    // 10. Loops with Conditions
    for (let i = 0; i < 5; i++) {
        console.log(`Iteration: ${i}`);
        if (i === 3) {
            console.log("Special iteration reached!");
        }
    }
    
    // 11. Random Functions
    function getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }
    
    console.log(`Random number: ${getRandomNumber()}`);
    
    // 12. Nested Loops
    for (let i = 1; i <= 3; i++) {
        console.log(`Outer Loop: ${i}`);
        for (let j = 1; j <= 2; j++) {
            console.log(`   Inner Loop: ${j}`);
        }
    }
    
    // 13. String Operations
    const message = "Hello, World!";
    console.log(message.toUpperCase());
    console.log(message.toLowerCase());
    console.log(message.split(", "));
    
    // 14. Array Mapping
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(num => num ** 2);
    console.log(squares);
    
    // 15. Default Parameters
    function greetUser(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }
    
    greetUser("Sunny");
    greetUser();
    
    // 16. Ternary Operator
    const canVote = userCount > 0 ? "Yes" : "No";
    console.log(`Can vote: ${canVote}`);
    
    // 17. Arrow Functions
    const multiply = (a, b) => a * b;
    console.log(`5 x 3 = ${multiply(5, 3)}`);
    
    // 18. Object Destructuring
    const { name, id } = user;
    console.log(`User ID: ${id}, Name: ${name}`);
    
    // 19. Date Object
    const today = new Date();
    console.log(`Today's date is: ${today.toDateString()}`);
    
    // 20. Function Expressions
    const divide = function (a, b) {
        if (b === 0) return "Cannot divide by zero.";
        return a / b;
    };
    
    console.log(`10 / 2 = ${divide(10, 2)}`);
    console.log(`10 / 0 = ${divide(10, 0)}`);
    
    // Repeat for random data to complete 100 lines
    console.log("Execution complete!");
    // 1. Variables and Constants
    const appName = "DummyApp";
    let userCount = 0;
    let isUserLoggedIn = false;
    
    // 2. Functions
    function addUser(name) {
        userCount++;
        console.log(`User ${name} added. Total users: ${userCount}`);
    }
    
    function removeUser(name) {
        if (userCount > 0) {
            userCount--;
            console.log(`User ${name} removed. Total users: ${userCount}`);
        } else {
            console.log("No users to remove.");
        }
    }
    
    // 3. Conditionals
    function checkLoginStatus() {
        if (isUserLoggedIn) {
            console.log("User is logged in.");
        } else {
            console.log("User is not logged in.");
        }
    }
    
    // 4. Loops
    for (let i = 1; i <= 10; i++) {
        console.log(`Processing item ${i}`);
    }
    
    // 5. Arrays
    const tasks = ["Task1", "Task2", "Task3"];
    tasks.forEach(task => console.log(`Pending: ${task}`));
    
    // 6. Objects
    const user = {
        id: 1,
        name: "John Doe",
        isActive: true,
        login() {
            isUserLoggedIn = true;
            console.log(`${this.name} logged in.`);
        },
        logout() {
            isUserLoggedIn = false;
            console.log(`${this.name} logged out.`);
        }
    };
    
    // 7. Logic
    function checkTaskCompletion(task) {
        const isCompleted = Math.random() > 0.5; // Random boolean
        console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
    }
    
    // 8. Dummy Function Calls
    addUser("Alice");
    addUser("Bob");
    removeUser("Alice");
    checkLoginStatus();
    user.login();
    checkLoginStatus();
    
    // 9. Array Manipulations
    tasks.push("Task4");
    tasks.pop();
    
    // 10. Loops with Conditions
    for (let i = 0; i < 5; i++) {
        console.log(`Iteration: ${i}`);
        if (i === 3) {
            console.log("Special iteration reached!");
        }
    }
    
    // 11. Random Functions
    function getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }
    
    console.log(`Random number: ${getRandomNumber()}`);
    
    // 12. Nested Loops
    for (let i = 1; i <= 3; i++) {
        console.log(`Outer Loop: ${i}`);
        for (let j = 1; j <= 2; j++) {
            console.log(`   Inner Loop: ${j}`);
        }
    }
    
    // 13. String Operations
    const message = "Hello, World!";
    console.log(message.toUpperCase());
    console.log(message.toLowerCase());
    console.log(message.split(", "));
    
    // 14. Array Mapping
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(num => num ** 2);
    console.log(squares);
    
    // 15. Default Parameters
    function greetUser(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }
    
    greetUser("Sunny");
    greetUser();
    
    // 16. Ternary Operator
    const canVote = userCount > 0 ? "Yes" : "No";
    console.log(`Can vote: ${canVote}`);
    
    // 17. Arrow Functions
    const multiply = (a, b) => a * b;
    console.log(`5 x 3 = ${multiply(5, 3)}`);
    
    // 18. Object Destructuring
    const { name, id } = user;
    console.log(`User ID: ${id}, Name: ${name}`);
    
    // 19. Date Object
    const today = new Date();
    console.log(`Today's date is: ${today.toDateString()}`);
    
    // 20. Function Expressions
    const divide = function (a, b) {
        if (b === 0) return "Cannot divide by zero.";
        return a / b;
    };
    
    console.log(`10 / 2 = ${divide(10, 2)}`);
    console.log(`10 / 0 = ${divide(10, 0)}`);
    
    // Repeat for random data to complete 100 lines
    console.log("Execution complete!");
    // 1. Variables and Constants
    const appName = "DummyApp";
    let userCount = 0;
    let isUserLoggedIn = false;
    
    // 2. Functions
    function addUser(name) {
        userCount++;
        console.log(`User ${name} added. Total users: ${userCount}`);
    }
    
    function removeUser(name) {
        if (userCount > 0) {
            userCount--;
            console.log(`User ${name} removed. Total users: ${userCount}`);
        } else {
            console.log("No users to remove.");
        }
    }
    
    // 3. Conditionals
    function checkLoginStatus() {
        if (isUserLoggedIn) {
            console.log("User is logged in.");
        } else {
            console.log("User is not logged in.");
        }
    }
    
    // 4. Loops
    for (let i = 1; i <= 10; i++) {
        console.log(`Processing item ${i}`);
    }
    
    // 5. Arrays
    const tasks = ["Task1", "Task2", "Task3"];
    tasks.forEach(task => console.log(`Pending: ${task}`));
    
    // 6. Objects
    const user = {
        id: 1,
        name: "John Doe",
        isActive: true,
        login() {
            isUserLoggedIn = true;
            console.log(`${this.name} logged in.`);
        },
        logout() {
            isUserLoggedIn = false;
            console.log(`${this.name} logged out.`);
        }
    };
    
    // 7. Logic
    function checkTaskCompletion(task) {
        const isCompleted = Math.random() > 0.5; // Random boolean
        console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
    }
    
    // 8. Dummy Function Calls
    addUser("Alice");
    addUser("Bob");
    removeU
          // 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;

export default App;

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeU
      // 10. Loops with Conditions
      for (let i = 0; i < 5; i++) {
        console.log(`Iteration: ${i}`);
        if (i === 3) {
            console.log("Special iteration reached!");
        }
    }
    
    // 11. Random Functions
    function getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }
    
    console.log(`Random number: ${getRandomNumber()}`);
    
    // 12. Nested Loops
    for (let i = 1; i <= 3; i++) {
        console.log(`Outer Loop: ${i}`);
        for (let j = 1; j <= 2; j++) {
            console.log(`   Inner Loop: ${j}`);
        }
    }
    
    // 13. String Operations
    const message = "Hello, World!";
    console.log(message.toUpperCase());
    console.log(message.toLowerCase());
    console.log(message.split(", "));
    
    // 14. Array Mapping
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(num => num ** 2);
    console.log(squares);
    
    // 15. Default Parameters
    function greetUser(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }
    
    greetUser("Sunny");
    greetUser();
    
    // 16. Ternary Operator
    const canVote = userCount > 0 ? "Yes" : "No";
    console.log(`Can vote: ${canVote}`);
    
    // 17. Arrow Functions
    const multiply = (a, b) => a * b;
    console.log(`5 x 3 = ${multiply(5, 3)}`);
    
    // 18. Object Destructuring
    const { name, id } = user;
    console.log(`User ID: ${id}, Name: ${name}`);
    
    // 19. Date Object
    const today = new Date();
    console.log(`Today's date is: ${today.toDateString()}`);
    
    // 20. Function Expressions
    const divide = function (a, b) {
        if (b === 0) return "Cannot divide by zero.";
        return a / b;
    };
    
    console.log(`10 / 2 = ${divide(10, 2)}`);
    console.log(`10 / 0 = ${divide(10, 0)}`);
    
    // Repeat for random data to complete 100 lines
    console.log("Execution complete!");
    // 1. Variables and Constants
    const appName = "DummyApp";
    let userCount = 0;
    let isUserLoggedIn = false;
    
    // 2. Functions
    function addUser(name) {
        userCount++;
        console.log(`User ${name} added. Total users: ${userCount}`);
    }
    
    function removeUser(name) {
        if (userCount > 0) {
            userCount--;
            console.log(`User ${name} removed. Total users: ${userCount}`);
        } else {
            console.log("No users to remove.");
        }
    }
    
    // 3. Conditionals
    function checkLoginStatus() {
        if (isUserLoggedIn) {
            console.log("User is logged in.");
        } else {
            console.log("User is not logged in.");
        }
    }
    
    // 4. Loops
    for (let i = 1; i <= 10; i++) {
        console.log(`Processing item ${i}`);
    }
    
    // 5. Arrays
    const tasks = ["Task1", "Task2", "Task3"];
    tasks.forEach(task => console.log(`Pending: ${task}`));
    
    // 6. Objects
    const user = {
        id: 1,
        name: "John Doe",
        isActive: true,
        login() {
            isUserLoggedIn = true;
            console.log(`${this.name} logged in.`);
        },
        logout() {
            isUserLoggedIn = false;
            console.log(`${this.name} logged out.`);
        }
    };
    
    // 7. Logic
    function checkTaskCompletion(task) {
        const isCompleted = Math.random() > 0.5; // Random boolean
        console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
    }
    
    // 8. Dummy Function Calls
    addUser("Alice");
    addUser("Bob");
    removeUser("Alice");
    checkLoginStatus();
    user.login();
    checkLoginStatus();
    
    // 9. Array Manipulations
    tasks.push("Task4");
    tasks.pop();
    
    // 10. Loops with Conditions
    for (let i = 0; i < 5; i++) {
        console.log(`Iteration: ${i}`);
        if (i === 3) {
            console.log("Special iteration reached!");
        }
    }
    
    // 11. Random Functions
    function getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }
    
    console.log(`Random number: ${getRandomNumber()}`);
    
    // 12. Nested Loops
    for (let i = 1; i <= 3; i++) {
        console.log(`Outer Loop: ${i}`);
        for (let j = 1; j <= 2; j++) {
            console.log(`   Inner Loop: ${j}`);
        }
    }
    
    // 13. String Operations
    const message = "Hello, World!";
    console.log(message.toUpperCase());
    console.log(message.toLowerCase());
    console.log(message.split(", "));
    
    // 14. Array Mapping
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(num => num ** 2);
    console.log(squares);
    
    // 15. Default Parameters
    function greetUser(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }
    
    greetUser("Sunny");
    greetUser();
    
    // 16. Ternary Operator
    const canVote = userCount > 0 ? "Yes" : "No";
    console.log(`Can vote: ${canVote}`);
    
    // 17. Arrow Functions
    const multiply = (a, b) => a * b;
    console.log(`5 x 3 = ${multiply(5, 3)}`);
    
    // 18. Object Destructuring
    const { name, id } = user;
    console.log(`User ID: ${id}, Name: ${name}`);
    
    // 19. Date Object
    const today = new Date();
    console.log(`Today's date is: ${today.toDateString()}`);
    
    // 20. Function Expressions
    const divide = function (a, b) {
        if (b === 0) return "Cannot divide by zero.";
        return a / b;
    };
    
    console.log(`10 / 2 = ${divide(10, 2)}`);
    console.log(`10 / 0 = ${divide(10, 0)}`);
    
    // Repeat for random data to complete 100 lines
    console.log("Execution complete!");
    // 1. Variables and Constants
    const appName = "DummyApp";
    let userCount = 0;
    let isUserLoggedIn = false;
    
    // 2. Functions
    function addUser(name) {
        userCount++;
        console.log(`User ${name} added. Total users: ${userCount}`);
    }
    
    function removeUser(name) {
        if (userCount > 0) {
            userCount--;
            console.log(`User ${name} removed. Total users: ${userCount}`);
        } else {
            console.log("No users to remove.");
        }
    }
    
    // 3. Conditionals
    function checkLoginStatus() {
        if (isUserLoggedIn) {
            console.log("User is logged in.");
        } else {
            console.log("User is not logged in.");
        }
    }
    
    // 4. Loops
    for (let i = 1; i <= 10; i++) {
        console.log(`Processing item ${i}`);
    }
    
    // 5. Arrays
    const tasks = ["Task1", "Task2", "Task3"];
    tasks.forEach(task => console.log(`Pending: ${task}`));
    
    // 6. Objects
    const user = {
        id: 1,
        name: "John Doe",
        isActive: true,
        login() {
            isUserLoggedIn = true;
            console.log(`${this.name} logged in.`);
        },
        logout() {
            isUserLoggedIn = false;
            console.log(`${this.name} logged out.`);
        }
    };
    
    // 7. Logic
    function checkTaskCompletion(task) {
        const isCompleted = Math.random() > 0.5; // Random boolean
        console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
    }
    
    // 8. Dummy Function Calls
    addUser("Alice");
    addUser("Bob");
    removeUser("Alice");
    checkLoginStatus();
    user.login();
    checkLoginStatus();
    
    // 9. Array Manipulations
    tasks.push("Task4");
    tasks.pop();
    
    // 10. Loops with Conditions
    for (let i = 0; i < 5; i++) {
        console.log(`Iteration: ${i}`);
        if (i === 3) {
            console.log("Special iteration reached!");
        }
    }
    
    // 11. Random Functions
    function getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }
    
    console.log(`Random number: ${getRandomNumber()}`);
    
    // 12. Nested Loops
    for (let i = 1; i <= 3; i++) {
        console.log(`Outer Loop: ${i}`);
        for (let j = 1; j <= 2; j++) {
            console.log(`   Inner Loop: ${j}`);
        }
    }
    
    // 13. String Operations
    const message = "Hello, World!";
    console.log(message.toUpperCase());
    console.log(message.toLowerCase());
    console.log(message.split(", "));
    
    // 14. Array Mapping
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(num => num ** 2);
    console.log(squares);
    
    // 15. Default Parameters
    function greetUser(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }
    
    greetUser("Sunny");
    greetUser();
    
    // 16. Ternary Operator
    const canVote = userCount > 0 ? "Yes" : "No";
    console.log(`Can vote: ${canVote}`);
    
    // 17. Arrow Functions
    const multiply = (a, b) => a * b;
    console.log(`5 x 3 = ${multiply(5, 3)}`);
    
    // 18. Object Destructuring
    const { name, id } = user;
    console.log(`User ID: ${id}, Name: ${name}`);
    
    // 19. Date Object
    const today = new Date();
    console.log(`Today's date is: ${today.toDateString()}`);
    
    // 20. Function Expressions
    const divide = function (a, b) {
        if (b === 0) return "Cannot divide by zero.";
        return a / b;
    };
    
    console.log(`10 / 2 = ${divide(10, 2)}`);
    console.log(`10 / 0 = ${divide(10, 0)}`);
    
    // Repeat for random data to complete 100 lines
    console.log("Execution complete!");
    // 1. Variables and Constants
    const appName = "DummyApp";
    let userCount = 0;
    let isUserLoggedIn = false;
    
    // 2. Functions
    function addUser(name) {
        userCount++;
        console.log(`User ${name} added. Total users: ${userCount}`);
    }
    
    function removeUser(name) {
        if (userCount > 0) {
            userCount--;
            console.log(`User ${name} removed. Total users: ${userCount}`);
        } else {
            console.log("No users to remove.");
        }
    }
    
    // 3. Conditionals
    function checkLoginStatus() {
        if (isUserLoggedIn) {
            console.log("User is logged in.");
        } else {
            console.log("User is not logged in.");
        }
    }
    
    // 4. Loops
    for (let i = 1; i <= 10; i++) {
        console.log(`Processing item ${i}`);
    }
    
    // 5. Arrays
    const tasks = ["Task1", "Task2", "Task3"];
    tasks.forEach(task => console.log(`Pending: ${task}`));
    
    // 6. Objects
    const user = {
        id: 1,
        name: "John Doe",
        isActive: true,
        login() {
            isUserLoggedIn = true;
            console.log(`${this.name} logged in.`);
        },
        logout() {
            isUserLoggedIn = false;
            console.log(`${this.name} logged out.`);
        }
    };
    
    // 7. Logic
    function checkTaskCompletion(task) {
        const isCompleted = Math.random() > 0.5; // Random boolean
        console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
    }
    
    // 8. Dummy Function Calls
    addUser("Alice");
    addUser("Bob");
    removeUser("Alice");
    checkLoginStatus();
    user.login();
    checkLoginStatus();
    
    // 9. Array Manipulations
    tasks.push("Task4");
    tasks.pop();
    
    // 10. Loops with Conditions
    for (let i = 0; i < 5; i++) {
        console.log(`Iteration: ${i}`);
        if (i === 3) {
            console.log("Special iteration reached!");
        }
    }
    
    // 11. Random Functions
    function getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }
    
    console.log(`Random number: ${getRandomNumber()}`);
    
    // 12. Nested Loops
    for (let i = 1; i <= 3; i++) {
        console.log(`Outer Loop: ${i}`);
        for (let j = 1; j <= 2; j++) {
            console.log(`   Inner Loop: ${j}`);
        }
    }
    
    // 13. String Operations
    const message = "Hello, World!";
    console.log(message.toUpperCase());
    console.log(message.toLowerCase());
    console.log(message.split(", "));
    
    // 14. Array Mapping
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(num => num ** 2);
    console.log(squares);
    
    // 15. Default Parameters
    function greetUser(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }
    
    greetUser("Sunny");
    greetUser();
    
    // 16. Ternary Operator
    const canVote = userCount > 0 ? "Yes" : "No";
    console.log(`Can vote: ${canVote}`);
    
    // 17. Arrow Functions
    const multiply = (a, b) => a * b;
    console.log(`5 x 3 = ${multiply(5, 3)}`);
    
    // 18. Object Destructuring
    const { name, id } = user;
    console.log(`User ID: ${id}, Name: ${name}`);
    
    // 19. Date Object
    const today = new Date();
    console.log(`Today's date is: ${today.toDateString()}`);
    
    // 20. Function Expressions
    const divide = function (a, b) {
        if (b === 0) return "Cannot divide by zero.";
        return a / b;
    };
    
    console.log(`10 / 2 = ${divide(10, 2)}`);
    console.log(`10 / 0 = ${divide(10, 0)}`);
    
    // Repeat for random data to complete 100 lines
    console.log("Execution complete!");
    // 1. Variables and Constants
    const appName = "DummyApp";
    let userCount = 0;
    let isUserLoggedIn = false;
    
    // 2. Functions
    function addUser(name) {
        userCount++;
        console.log(`User ${name} added. Total users: ${userCount}`);
    }
    
    function removeUser(name) {
        if (userCount > 0) {
            userCount--;
    
    export default App;
    
    // 10. Loops with Conditions
    for (let i = 0; i < 5; i++) {
        console.log(`Iteration: ${i}`);
        if (i === 3) {
            console.log("Special iteration reached!");
        }
    }
    
    // 11. Random Functions
    function getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }
    
    console.log(`Random number: ${getRandomNumber()}`);
    
    // 12. Nested Loops
    for (let i = 1; i <= 3; i++) {
        console.log(`Outer Loop: ${i}`);
        for (let j = 1; j <= 2; j++) {
            console.log(`   Inner Loop: ${j}`);
        }
    }
    
    // 13. String Operations
    const message = "Hello, World!";
    console.log(message.toUpperCase());
    console.log(message.toLowerCase());
    console.log(message.split(", "));
    
    // 14. Array Mapping
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(num => num ** 2);
    console.log(squares);
    
    // 15. Default Parameters
    function greetUser(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }
    
    greetUser("Sunny");
    greetUser();
    
    // 16. Ternary Operator
    const canVote = userCount > 0 ? "Yes" : "No";
    console.log(`Can vote: ${canVote}`);
    
    // 17. Arrow Functions
    const multiply = (a, b) => a * b;
    console.log(`5 x 3 = ${multiply(5, 3)}`);
    
    // 18. Object Destructuring
    const { name, id } = user;
    console.log(`User ID: ${id}, Name: ${name}`);
    
    // 19. Date Object
    const today = new Date();
    console.log(`Today's date is: ${today.toDateString()}`);
    
    // 20. Function Expressions
    const divide = function (a, b) {
        if (b === 0) return "Cannot divide by zero.";
        return a / b;
    };
    
    console.log(`10 / 2 = ${divide(10, 2)}`);
    console.log(`10 / 0 = ${divide(10, 0)}`);
    
    // Repeat for random data to complete 100 lines
    console.log("Execution complete!");
    // 1. Variables and Constants
    const appName = "DummyApp";
    let userCount = 0;
    let isUserLoggedIn = false;
    
    // 2. Functions
    function addUser(name) {
        userCount++;
        console.log(`User ${name} added. Total users: ${userCount}`);
    }
    
    function removeUser(name) {
        if (userCount > 0) {
            userCount--;
            console.log(`User ${name} removed. Total users: ${userCount}`);
        } else {
            console.log("No users to remove.");
        }
    }
    
    // 3. Conditionals
    function checkLoginStatus() {
        if (isUserLoggedIn) {
            console.log("User is logged in.");
        } else {
            console.log("User is not logged in.");
        }
    }
    
    // 4. Loops
    for (let i = 1; i <= 10; i++) {
        console.log(`Processing item ${i}`);
    }
    
    // 5. Arrays
    const tasks = ["Task1", "Task2", "Task3"];
    tasks.forEach(task => console.log(`Pending: ${task}`));
    
    // 6. Objects
    const user = {
        id: 1,
        name: "John Doe",
        isActive: true,
        login() {
            isUserLoggedIn = true;
            console.log(`${this.name} logged in.`);
        },
        logout() {
            isUserLoggedIn = false;
            console.log(`${this.name} logged out.`);
        }
    };
    
    // 7. Logic
    function checkTaskCompletion(task) {
        const isCompleted = Math.random() > 0.5; // Random boolean
        console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
    }
    
    // 8. Dummy Function Calls
    addUser("Alice");
    addUser("Bob");
    removeUser("Alice");
    checkLoginStatus();
    user.login();
    checkLoginStatus();
    
    // 9. Array Manipulations
    tasks.push("Task4");
    tasks.pop();
    
    // 10. Loops with Conditions
    for (let i = 0; i < 5; i++) {
        console.log(`Iteration: ${i}`);
        if (i === 3) {
            console.log("Special iteration reached!");
        }
    }
    
    // 11. Random Functions
    function getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }
    
    console.log(`Random number: ${getRandomNumber()}`);
    
    // 12. Nested Loops
    for (let i = 1; i <= 3; i++) {
        console.log(`Outer Loop: ${i}`);
        for (let j = 1; j <= 2; j++) {
            console.log(`   Inner Loop: ${j}`);
        }
    }
    
    // 13. String Operations
    const message = "Hello, World!";
    console.log(message.toUpperCase());
    console.log(message.toLowerCase());
    console.log(message.split(", "));
    
    // 14. Array Mapping
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(num => num ** 2);
    console.log(squares);
    
    // 15. Default Parameters
    function greetUser(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }
    
    greetUser("Sunny");
    greetUser();
    
    // 16. Ternary Operator
    const canVote = userCount > 0 ? "Yes" : "No";
    console.log(`Can vote: ${canVote}`);
    
    // 17. Arrow Functions
    const multiply = (a, b) => a * b;
    console.log(`5 x 3 = ${multiply(5, 3)}`);
    
    // 18. Object Destructuring
    const { name, id } = user;
    console.log(`User ID: ${id}, Name: ${name}`);
    
    // 19. Date Object
    const today = new Date();
    console.log(`Today's date is: ${today.toDateString()}`);
    
    // 20. Function Expressions
    const divide = function (a, b) {
        if (b === 0) return "Cannot divide by zero.";
        return a / b;
    };
    
    console.log(`10 / 2 = ${divide(10, 2)}`);
    console.log(`10 / 0 = ${divide(10, 0)}`);
    
    // Repeat for random data to complete 100 lines
    console.log("Execution complete!");
    // 1. Variables and Constants
    const appName = "DummyApp";
    let userCount = 0;
    let isUserLoggedIn = false;
    
    // 2. Functions
    function addUser(name) {
        userCount++;
        console.log(`User ${name} added. Total users: ${userCount}`);
    }
    
    function removeUser(name) {
        if (userCount > 0) {
            userCount--;
            console.log(`User ${name} removed. Total users: ${userCount}`);
        } else {
            console.log("No users to remove.");
        }
    }
    
    // 3. Conditionals
    function checkLoginStatus() {
        if (isUserLoggedIn) {
            console.log("User is logged in.");
        } else {
            console.log("User is not logged in.");
        }
    }
    
    // 4. Loops
    for (let i = 1; i <= 10; i++) {
        console.log(`Processing item ${i}`);
    }
    
    // 5. Arrays
    const tasks = ["Task1", "Task2", "Task3"];
    tasks.forEach(task => console.log(`Pending: ${task}`));
    
    // 6. Objects
    const user = {
        id: 1,
        name: "John Doe",
        isActive: true,
        login() {
            isUserLoggedIn = true;
            console.log(`${this.name} logged in.`);
        },
        logout() {
            isUserLoggedIn = false;
            console.log(`${this.name} logged out.`);
        }
    };
    
    // 7. Logic
    function checkTaskCompletion(task) {
        const isCompleted = Math.random() > 0.5; // Random boolean
        console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
    }
    
    // 8. Dummy Function Calls
    addUser("Alice");
    addUser("Bob");
    removeU
          // 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;

export default App;

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");

      // 10. Loops with Conditions
      for (let i = 0; i < 5; i++) {
        console.log(`Iteration: ${i}`);
        if (i === 3) {
            console.log("Special iteration reached!");
        }
    }
    
    // 11. Random Functions
    function getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }
    
    console.log(`Random number: ${getRandomNumber()}`);
    
    // 12. Nested Loops
    for (let i = 1; i <= 3; i++) {
        console.log(`Outer Loop: ${i}`);
        for (let j = 1; j <= 2; j++) {
            console.log(`   Inner Loop: ${j}`);
        }
    }
    
    // 13. String Operations
    const message = "Hello, World!";
    console.log(message.toUpperCase());
    console.log(message.toLowerCase());
    console.log(message.split(", "));
    
    // 14. Array Mapping
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(num => num ** 2);
    console.log(squares);
    
    // 15. Default Parameters
    function greetUser(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }
    
    greetUser("Sunny");
    greetUser();
    
    // 16. Ternary Operator
    const canVote = userCount > 0 ? "Yes" : "No";
    console.log(`Can vote: ${canVote}`);
    
    // 17. Arrow Functions
    const multiply = (a, b) => a * b;
    console.log(`5 x 3 = ${multiply(5, 3)}`);
    
    // 18. Object Destructuring
    const { name, id } = user;
    console.log(`User ID: ${id}, Name: ${name}`);
    
    // 19. Date Object
    const today = new Date();
    console.log(`Today's date is: ${today.toDateString()}`);
    
    // 20. Function Expressions
    const divide = function (a, b) {
        if (b === 0) return "Cannot divide by zero.";
        return a / b;
    };
    
    console.log(`10 / 2 = ${divide(10, 2)}`);
    console.log(`10 / 0 = ${divide(10, 0)}`);
    
    // Repeat for random data to complete 100 lines
    console.log("Execution complete!");
    // 1. Variables and Constants
    const appName = "DummyApp";
    let userCount = 0;
    let isUserLoggedIn = false;
    
    // 2. Functions
    function addUser(name) {
        userCount++;
        console.log(`User ${name} added. Total users: ${userCount}`);
    }
    
    function removeUser(name) {
        if (userCount > 0) {
            userCount--;
            console.log(`User ${name} removed. Total users: ${userCount}`);
        } else {
            console.log("No users to remove.");
        }
    }
    
    // 3. Conditionals
    function checkLoginStatus() {
        if (isUserLoggedIn) {
            console.log("User is logged in.");
        } else {
            console.log("User is not logged in.");
        }
    }
    
    // 4. Loops
    for (let i = 1; i <= 10; i++) {
        console.log(`Processing item ${i}`);
    }
    
    // 5. Arrays
    const tasks = ["Task1", "Task2", "Task3"];
    tasks.forEach(task => console.log(`Pending: ${task}`));
    
    // 6. Objects
    const user = {
        id: 1,
        name: "John Doe",
        isActive: true,
        login() {
            isUserLoggedIn = true;
            console.log(`${this.name} logged in.`);
        },
        logout() {
            isUserLoggedIn = false;
            console.log(`${this.name} logged out.`);
        }
    };
    
    // 7. Logic
    function checkTaskCompletion(task) {
        const isCompleted = Math.random() > 0.5; // Random boolean
        console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
    }
    
    // 8. Dummy Function Calls
    addUser("Alice");
    addUser("Bob");
    removeUser("Alice");
    checkLoginStatus();
    user.login();
    checkLoginStatus();
    
    // 9. Array Manipulations
    tasks.push("Task4");
    tasks.pop();
    
    // 10. Loops with Conditions
    for (let i = 0; i < 5; i++) {
        console.log(`Iteration: ${i}`);
        if (i === 3) {
            console.log("Special iteration reached!");
        }
    }
    
    // 11. Random Functions
    function getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }
    
    console.log(`Random number: ${getRandomNumber()}`);
    
    // 12. Nested Loops
    for (let i = 1; i <= 3; i++) {
        console.log(`Outer Loop: ${i}`);
        for (let j = 1; j <= 2; j++) {
            console.log(`   Inner Loop: ${j}`);
        }
    }
    
    // 13. String Operations
    const message = "Hello, World!";
    console.log(message.toUpperCase());
    console.log(message.toLowerCase());
    console.log(message.split(", "));
    
    // 14. Array Mapping
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(num => num ** 2);
    console.log(squares);
    
    // 15. Default Parameters
    function greetUser(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }
    
    greetUser("Sunny");
    greetUser();
    
    // 16. Ternary Operator
    const canVote = userCount > 0 ? "Yes" : "No";
    console.log(`Can vote: ${canVote}`);
    
    // 17. Arrow Functions
    const multiply = (a, b) => a * b;
    console.log(`5 x 3 = ${multiply(5, 3)}`);
    
    // 18. Object Destructuring
    const { name, id } = user;
    console.log(`User ID: ${id}, Name: ${name}`);
    
    // 19. Date Object
    const today = new Date();
    console.log(`Today's date is: ${today.toDateString()}`);
    
    // 20. Function Expressions
    const divide = function (a, b) {
        if (b === 0) return "Cannot divide by zero.";
        return a / b;
    };
    
    console.log(`10 / 2 = ${divide(10, 2)}`);
    console.log(`10 / 0 = ${divide(10, 0)}`);
    
    // Repeat for random data to complete 100 lines
    console.log("Execution complete!");
    // 1. Variables and Constants
    const appName = "DummyApp";
    let userCount = 0;
    let isUserLoggedIn = false;
    
    // 2. Functions
    function addUser(name) {
        userCount++;
        console.log(`User ${name} added. Total users: ${userCount}`);
    }
    
    function removeUser(name) {
        if (userCount > 0) {
            userCount--;
            console.log(`User ${name} removed. Total users: ${userCount}`);
        } else {
            console.log("No users to remove.");
        }
    }
    
    // 3. Conditionals
    function checkLoginStatus() {
        if (isUserLoggedIn) {
            console.log("User is logged in.");
        } else {
            console.log("User is not logged in.");
        }
    }
    
    // 4. Loops
    for (let i = 1; i <= 10; i++) {
        console.log(`Processing item ${i}`);
    }
    
    // 5. Arrays
    const tasks = ["Task1", "Task2", "Task3"];
    tasks.forEach(task => console.log(`Pending: ${task}`));
    
    // 6. Objects
    const user = {
        id: 1,
        name: "John Doe",
        isActive: true,
        login() {
            isUserLoggedIn = true;
            console.log(`${this.name} logged in.`);
        },
        logout() {
            isUserLoggedIn = false;
            console.log(`${this.name} logged out.`);
        }
    };
    
    // 7. Logic
    function checkTaskCompletion(task) {
        const isCompleted = Math.random() > 0.5; // Random boolean
        console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
    }
    
    // 8. Dummy Function Calls
    addUser("Alice");
    addUser("Bob");
    removeUser("Alice");
    checkLoginStatus();
    user.login();
    checkLoginStatus();
    
    // 9. Array Manipulations
    tasks.push("Task4");
    tasks.pop();
    
    // 10. Loops with Conditions
    for (let i = 0; i < 5; i++) {
        console.log(`Iteration: ${i}`);
        if (i === 3) {
            console.log("Special iteration reached!");
        }
    }
    
    // 11. Random Functions
    function getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }
    
    console.log(`Random number: ${getRandomNumber()}`);
    
    // 12. Nested Loops
    for (let i = 1; i <= 3; i++) {
        console.log(`Outer Loop: ${i}`);
        for (let j = 1; j <= 2; j++) {
            console.log(`   Inner Loop: ${j}`);
        }
    }
    
    // 13. String Operations
    const message = "Hello, World!";
    console.log(message.toUpperCase());
    console.log(message.toLowerCase());
    console.log(message.split(", "));
    
    // 14. Array Mapping
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(num => num ** 2);
    console.log(squares);
    
    // 15. Default Parameters
    function greetUser(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }
    
    greetUser("Sunny");
    greetUser();
    
    // 16. Ternary Operator
    const canVote = userCount > 0 ? "Yes" : "No";
    console.log(`Can vote: ${canVote}`);
    
    // 17. Arrow Functions
    const multiply = (a, b) => a * b;
    console.log(`5 x 3 = ${multiply(5, 3)}`);
    
    // 18. Object Destructuring
    const { name, id } = user;
    console.log(`User ID: ${id}, Name: ${name}`);
    
    // 19. Date Object
    const today = new Date();
    console.log(`Today's date is: ${today.toDateString()}`);
    
    // 20. Function Expressions
    const divide = function (a, b) {
        if (b === 0) return "Cannot divide by zero.";
        return a / b;
    };
    
    console.log(`10 / 2 = ${divide(10, 2)}`);
    console.log(`10 / 0 = ${divide(10, 0)}`);
    
    // Repeat for random data to complete 100 lines
    console.log("Execution complete!");
    // 1. Variables and Constants
    const appName = "DummyApp";
    let userCount = 0;
    let isUserLoggedIn = false;
    
    // 2. Functions
    function addUser(name) {
        userCount++;
        console.log(`User ${name} added. Total users: ${userCount}`);
    }
    
    function removeUser(name) {
        if (userCount > 0) {
            userCount--;
            console.log(`User ${name} removed. Total users: ${userCount}`);
        } else {
            console.log("No users to remove.");
        }
    }
    
    // 3. Conditionals
    function checkLoginStatus() {
        if (isUserLoggedIn) {
            console.log("User is logged in.");
        } else {
            console.log("User is not logged in.");
        }
    }
    
    // 4. Loops
    for (let i = 1; i <= 10; i++) {
        console.log(`Processing item ${i}`);
    }
    
    // 5. Arrays
    const tasks = ["Task1", "Task2", "Task3"];
    tasks.forEach(task => console.log(`Pending: ${task}`));
    
    // 6. Objects
    const user = {
        id: 1,
        name: "John Doe",
        isActive: true,
        login() {
            isUserLoggedIn = true;
            console.log(`${this.name} logged in.`);
        },
        logout() {
            isUserLoggedIn = false;
            console.log(`${this.name} logged out.`);
        }
    };
    
    // 7. Logic
    function checkTaskCompletion(task) {
        const isCompleted = Math.random() > 0.5; // Random boolean
        console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
    }
    
    // 8. Dummy Function Calls
    addUser("Alice");
    addUser("Bob");
    removeUser("Alice");
    checkLoginStatus();
    user.login();
    checkLoginStatus();
    
    // 9. Array Manipulations
    tasks.push("Task4");
    tasks.pop();
    
    // 10. Loops with Conditions
    for (let i = 0; i < 5; i++) {
        console.log(`Iteration: ${i}`);
        if (i === 3) {
            console.log("Special iteration reached!");
        }
    }
    
    // 11. Random Functions
    function getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }
    
    console.log(`Random number: ${getRandomNumber()}`);
    
    // 12. Nested Loops
    for (let i = 1; i <= 3; i++) {
        console.log(`Outer Loop: ${i}`);
        for (let j = 1; j <= 2; j++) {
            console.log(`   Inner Loop: ${j}`);
        }
    }
    
    // 13. String Operations
    const message = "Hello, World!";
    console.log(message.toUpperCase());
    console.log(message.toLowerCase());
    console.log(message.split(", "));
    
    // 14. Array Mapping
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(num => num ** 2);
    console.log(squares);
    
    // 15. Default Parameters
    function greetUser(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }
    
    greetUser("Sunny");
    greetUser();
    
    // 16. Ternary Operator
    const canVote = userCount > 0 ? "Yes" : "No";
    console.log(`Can vote: ${canVote}`);
    
    // 17. Arrow Functions
    const multiply = (a, b) => a * b;
    console.log(`5 x 3 = ${multiply(5, 3)}`);
    
    // 18. Object Destructuring
    const { name, id } = user;
    console.log(`User ID: ${id}, Name: ${name}`);
    
    // 19. Date Object
    const today = new Date();
    console.log(`Today's date is: ${today.toDateString()}`);
    
    // 20. Function Expressions
    const divide = function (a, b) {
        if (b === 0) return "Cannot divide by zero.";
        return a / b;
    };
    
    console.log(`10 / 2 = ${divide(10, 2)}`);
    console.log(`10 / 0 = ${divide(10, 0)}`);
    
    // Repeat for random data to complete 100 lines
    console.log("Execution complete!");
    // 1. Variables and Constants
    const appName = "DummyApp";
    let userCount = 0;
    let isUserLoggedIn = false;
    
    // 2. Functions
    function addUser(name) {
        userCount++;
        console.log(`User ${name} added. Total users: ${userCount}`);
    }
    
    function removeUser(name) {
        if (userCount > 0) {
            userCount--;
    
    export default App;
    
    // 10. Loops with Conditions
    for (let i = 0; i < 5; i++) {
        console.log(`Iteration: ${i}`);
        if (i === 3) {
            console.log("Special iteration reached!");
        }
    }
    
    // 11. Random Functions
    function getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }
    
    console.log(`Random number: ${getRandomNumber()}`);
    
    // 12. Nested Loops
    for (let i = 1; i <= 3; i++) {
        console.log(`Outer Loop: ${i}`);
        for (let j = 1; j <= 2; j++) {
            console.log(`   Inner Loop: ${j}`);
        }
    }
    
    // 13. String Operations
    const message = "Hello, World!";
    console.log(message.toUpperCase());
    console.log(message.toLowerCase());
    console.log(message.split(", "));
    
    // 14. Array Mapping
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(num => num ** 2);
    console.log(squares);
    
    // 15. Default Parameters
    function greetUser(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }
    
    greetUser("Sunny");
    greetUser();
    
    // 16. Ternary Operator
    const canVote = userCount > 0 ? "Yes" : "No";
    console.log(`Can vote: ${canVote}`);
    
    // 17. Arrow Functions
    const multiply = (a, b) => a * b;
    console.log(`5 x 3 = ${multiply(5, 3)}`);
    
    // 18. Object Destructuring
    const { name, id } = user;
    console.log(`User ID: ${id}, Name: ${name}`);
    
    // 19. Date Object
    const today = new Date();
    console.log(`Today's date is: ${today.toDateString()}`);
    
    // 20. Function Expressions
    const divide = function (a, b) {
        if (b === 0) return "Cannot divide by zero.";
        return a / b;
    };
    
    console.log(`10 / 2 = ${divide(10, 2)}`);
    console.log(`10 / 0 = ${divide(10, 0)}`);
    
    // Repeat for random data to complete 100 lines
    console.log("Execution complete!");
    // 1. Variables and Constants
    const appName = "DummyApp";
    let userCount = 0;
    let isUserLoggedIn = false;
    
    // 2. Functions
    function addUser(name) {
        userCount++;
        console.log(`User ${name} added. Total users: ${userCount}`);
    }
    
    function removeUser(name) {
        if (userCount > 0) {
            userCount--;
            console.log(`User ${name} removed. Total users: ${userCount}`);
        } else {
            console.log("No users to remove.");
        }
    }
    
    // 3. Conditionals
    function checkLoginStatus() {
        if (isUserLoggedIn) {
            console.log("User is logged in.");
        } else {
            console.log("User is not logged in.");
        }
    }
    
    // 4. Loops
    for (let i = 1; i <= 10; i++) {
        console.log(`Processing item ${i}`);
    }
    
    // 5. Arrays
    const tasks = ["Task1", "Task2", "Task3"];
    tasks.forEach(task => console.log(`Pending: ${task}`));
    
    // 6. Objects
    const user = {
        id: 1,
        name: "John Doe",
        isActive: true,
        login() {
            isUserLoggedIn = true;
            console.log(`${this.name} logged in.`);
        },
        logout() {
            isUserLoggedIn = false;
            console.log(`${this.name} logged out.`);
        }
    };
    
    // 7. Logic
    function checkTaskCompletion(task) {
        const isCompleted = Math.random() > 0.5; // Random boolean
        console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
    }
    
    // 8. Dummy Function Calls
    addUser("Alice");
    addUser("Bob");
    removeUser("Alice");
    checkLoginStatus();
    user.login();
    checkLoginStatus();
    
    // 9. Array Manipulations
    tasks.push("Task4");
    tasks.pop();
    
    // 10. Loops with Conditions
    for (let i = 0; i < 5; i++) {
        console.log(`Iteration: ${i}`);
        if (i === 3) {
            console.log("Special iteration reached!");
        }
    }
    
    // 11. Random Functions
    function getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }
    
    console.log(`Random number: ${getRandomNumber()}`);
    
    // 12. Nested Loops
    for (let i = 1; i <= 3; i++) {
        console.log(`Outer Loop: ${i}`);
        for (let j = 1; j <= 2; j++) {
            console.log(`   Inner Loop: ${j}`);
        }
    }
    
    // 13. String Operations
    const message = "Hello, World!";
    console.log(message.toUpperCase());
    console.log(message.toLowerCase());
    console.log(message.split(", "));
    
    // 14. Array Mapping
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(num => num ** 2);
    console.log(squares);
    
    // 15. Default Parameters
    function greetUser(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }
    
    greetUser("Sunny");
    greetUser();
    
    // 16. Ternary Operator
    const canVote = userCount > 0 ? "Yes" : "No";
    console.log(`Can vote: ${canVote}`);
    
    // 17. Arrow Functions
    const multiply = (a, b) => a * b;
    console.log(`5 x 3 = ${multiply(5, 3)}`);
    
    // 18. Object Destructuring
    const { name, id } = user;
    console.log(`User ID: ${id}, Name: ${name}`);
    
    // 19. Date Object
    const today = new Date();
    console.log(`Today's date is: ${today.toDateString()}`);
    
    // 20. Function Expressions
    const divide = function (a, b) {
        if (b === 0) return "Cannot divide by zero.";
        return a / b;
    };
    
    console.log(`10 / 2 = ${divide(10, 2)}`);
    console.log(`10 / 0 = ${divide(10, 0)}`);
    
    // Repeat for random data to complete 100 lines
    console.log("Execution complete!");
    // 1. Variables and Constants
    const appName = "DummyApp";
    let userCount = 0;
    let isUserLoggedIn = false;
    
    // 2. Functions
    function addUser(name) {
        userCount++;
        console.log(`User ${name} added. Total users: ${userCount}`);
    }
    
    function removeUser(name) {
        if (userCount > 0) {
            userCount--;
            console.log(`User ${name} removed. Total users: ${userCount}`);
        } else {
            console.log("No users to remove.");
        }
    }
    
    // 3. Conditionals
    function checkLoginStatus() {
        if (isUserLoggedIn) {
            console.log("User is logged in.");
        } else {
            console.log("User is not logged in.");
        }
    }
    
    // 4. Loops
    for (let i = 1; i <= 10; i++) {
        console.log(`Processing item ${i}`);
    }
    
    // 5. Arrays
    const tasks = ["Task1", "Task2", "Task3"];
    tasks.forEach(task => console.log(`Pending: ${task}`));
    
    // 6. Objects
    const user = {
        id: 1,
        name: "John Doe",
        isActive: true,
        login() {
            isUserLoggedIn = true;
            console.log(`${this.name} logged in.`);
        },
        logout() {
            isUserLoggedIn = false;
            console.log(`${this.name} logged out.`);
        }
    };
    
    // 7. Logic
    function checkTaskCompletion(task) {
        const isCompleted = Math.random() > 0.5; // Random boolean
        console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
    }
    
    // 8. Dummy Function Calls
    addUser("Alice");
    addUser("Bob");
    removeU      // 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;

export default App;

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeU      // 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;

export default App;

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeU      // 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;

export default App;

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");
removeUser("Alice");
checkLoginStatus();
user.login();
checkLoginStatus();

// 9. Array Manipulations
tasks.push("Task4");
tasks.pop();

// 10. Loops with Conditions
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    if (i === 3) {
        console.log("Special iteration reached!");
    }
}

// 11. Random Functions
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number: ${getRandomNumber()}`);

// 12. Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}

// 13. String Operations
const message = "Hello, World!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(", "));

// 14. Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

// 15. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Sunny");
greetUser();

// 16. Ternary Operator
const canVote = userCount > 0 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 17. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`5 x 3 = ${multiply(5, 3)}`);

// 18. Object Destructuring
const { name, id } = user;
console.log(`User ID: ${id}, Name: ${name}`);

// 19. Date Object
const today = new Date();
console.log(`Today's date is: ${today.toDateString()}`);

// 20. Function Expressions
const divide = function (a, b) {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);

// Repeat for random data to complete 100 lines
console.log("Execution complete!");
// 1. Variables and Constants
const appName = "DummyApp";
let userCount = 0;
let isUserLoggedIn = false;

// 2. Functions
function addUser(name) {
    userCount++;
    console.log(`User ${name} added. Total users: ${userCount}`);
}

function removeUser(name) {
    if (userCount > 0) {
        userCount--;
        console.log(`User ${name} removed. Total users: ${userCount}`);
    } else {
        console.log("No users to remove.");
    }
}

// 3. Conditionals
function checkLoginStatus() {
    if (isUserLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

// 4. Loops
for (let i = 1; i <= 10; i++) {
    console.log(`Processing item ${i}`);
}

// 5. Arrays
const tasks = ["Task1", "Task2", "Task3"];
tasks.forEach(task => console.log(`Pending: ${task}`));

// 6. Objects
const user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    login() {
        isUserLoggedIn = true;
        console.log(`${this.name} logged in.`);
    },
    logout() {
        isUserLoggedIn = false;
        console.log(`${this.name} logged out.`);
    }
};

// 7. Logic
function checkTaskCompletion(task) {
    const isCompleted = Math.random() > 0.5; // Random boolean
    console.log(`Task "${task}" is ${isCompleted ? "completed" : "not completed"}`);
}

// 8. Dummy Function Calls
addUser("Alice");
addUser("Bob");

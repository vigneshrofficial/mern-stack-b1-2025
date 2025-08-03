// Types of functions

// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function (ES6 Syntax)
// 4. Anonymous Function
// 5. Immediately Invoked Function Expression (IIFE)
// 6. Async Function
// 7. Generator Function
// 8. Higher-Order Function

// Function Declaration (Named Function)
function addNumbers(){
  return 5 + 10;
}

// Function Expression 
const subtractNumbers = function(){
  return 10 - 5;
}

// Arrow Function (ES6 Syntax)
const addThreeNumbers = () => {
  return 5 + 10 + 15;
}

// Anonymous Function
setTimeout(function(){
  console.log("This is an anonymous function executed after 2 seconds");
}, 2000);

// Immediately Invoked Function Expression (IIFE)
(function(){
  console.log("This is an IIFE that runs immediately");
})();
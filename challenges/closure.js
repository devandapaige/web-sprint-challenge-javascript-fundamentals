// ==== Closures ====
console.log(`***CLOSURES***`);
/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation:
/* The nested function can access const internal becuse the nested function has access to all of it's parent function(myFunction)'s information. Creating a constant in a function to use in a nested function like this is called "closure".



/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  if (num === 1) {
    return 1;
  } else {
    return sum;
  }
}
console.log(summation(4));

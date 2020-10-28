"use strict";

// Complete this algo
const minJumps = (arr) => {
  let firstJump = arr[0];
  if (firstJump >= arr.length - 1) return 1;

  let choices = [];

  for (let i = 1; i <= firstJump; i++) {
    //getting all of the next possible jumps
    // i is 1 to not check firstJump
    choices.push(arr[i]); // adds all possibilities to choices array
  }
  let nextJump = arr.indexOf(Math.max(...choices)); //gets max jump from choices
  return minJumps(arr.slice(nextJump)) + 1; //recursive loop that pushes the new array after jump and a count variable (' return... + 1')
};

module.exports = minJumps;

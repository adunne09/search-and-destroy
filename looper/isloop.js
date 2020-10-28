"use strict";

//Complete this algo
const isLoop = (linkedlist) => {
  let arr = [];
  let temp = linkedlist.head;
  while (temp) {
    console.log(arr, temp);
    if (arr.includes(temp)) return true;
    arr.push(temp);
    temp = temp.next;
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;

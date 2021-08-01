"use strict";

const auth = {};
const users = [];
users.push({name: "faysal", age: 27, isAlive: true});

const getLastPop = users.pop();
const getLastPush = users.push();

const output = [getLastPop, getLastPush];

const component = output.push(output);

console.log("great software");

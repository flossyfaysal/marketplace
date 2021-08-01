"use strict";

const auth = {};
const users = [];
users.push({name: "faysal", age: 27, isAlive: true});

const getLastPop = users.pop();
const getLastPush = users.push();

const output = [getLastPop, getLastPush, "Now Master Ahed and confliced"];

const component = output.push(output);

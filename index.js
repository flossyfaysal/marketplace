"use strict";

const auth = {};
const users = [];
users.push({name: "faysal", age: 27, isAlive: true});

const getLastPop = users.pop();
const getLastPush = users.push();

const result = [getLastPop, getLastPush];

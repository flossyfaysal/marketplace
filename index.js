"use strict";
import { marketplace } from "./huge.js";

const auth = {};
const users = [];
users.push({name: "faysal", age: 27, isAlive: true});

const getLastPop = users.pop();
const getLastPush = users.push();

const output = [getLastPop, getLastPush, "master", "conflict", "osthir", "osthir origin", "great", "great origin"];

const component = output.push(output);


const getJson = JSON.stringify(marketplace);

console.log(getJson[0].users.names);
console.log(getJson[0].users.names.fullname);

import {Queue, Stack} from "./modules/ds.js";
import { makeChange } from "./modules/buttons.js";

let call_stack = new Stack();
console.log("call stack is empty: " + call_stack.isEmpty()); // Uncaught TypeError: Cannot read properties of undefined (reading 'isEmpty')

let val = makeChange();
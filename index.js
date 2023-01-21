import {Queue, Stack} from "./ds";


call_stack = new Stack()
console.log("call stack is empty: " + call_stack.isEmpty()); // Uncaught TypeError: Cannot read properties of undefined (reading 'isEmpty')

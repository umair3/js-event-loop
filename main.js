
// Prototypal Inheritance
function Stack()
{
    this.items = []; //[1, 2, 3, 4]
}
Stack.prototype.push = function (v) {
    // add an item
}
Stack.prototype.pop = function () {
    // returns top value and remove it
    return 0
}
Stack.prototype.peek = function () {
    // read top value
}
Stack.prototype.isEmpty = function () {
    // true if stack is empty
    // false if stack is not empty
    if(this.items.length == 0)
        return true;
    return false;
}
call_stack = new Stack()
//call_stack.isEmpty is not a function
console.log("call stack is empty: " + call_stack.isEmpty()); // Uncaught TypeError: Cannot read properties of undefined (reading 'isEmpty')
// [1], [1, 2, 3]
// for queue
function Queue()
{
    this.items = []; //[1, 2, 3, 4]
}
Queue.prototype.enqueue = function (v) {
    // add an item
}
Queue.prototype.dequeue = function () {
    // returns last value and remove it
    return 0
}
Queue.prototype.rear = function () {
    // read last value
}
Queue.prototype.front = function () {
    // read first value
}
Queue.prototype.isEmpty = function () {
    // true if queue is empty
    // false if queue is not empty
    if(this.items.length == 0)
        return true;
    return false;
}
callback_queue = new Queue()
console.log("callback_queue is empty: " + callback_queue.isEmpty()); 

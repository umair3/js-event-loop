/*
Queue data structure FIFO/LILO
Supports enqueue, dequeue, rear, front and isEmpty operations
*/
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
/*
Stack data structure FILO/LIFO
Supports push, pop, peek and isEmpty operations
*/
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
export {Queue, Stack};
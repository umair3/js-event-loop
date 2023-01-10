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
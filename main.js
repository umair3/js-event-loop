
//Adding number line 

let textarea = document.querySelector('textarea')
let lineNumbers = document.querySelector('.line-numbers')

textarea.addEventListener('keyup', event => {
    let numberOfLines = event.target.value.split('\n').length

    lineNumbers.innerHTML = Array(numberOfLines)
        .fill('<span></span>')
        .join('')
})
textarea.addEventListener('keydown', event => {
    if (event.key === 'Tab') {
        let start = textarea.selectionStart
        let end = textarea.selectionEnd

        textarea.value = textarea.value.substring(0, start) + '\t' + textarea.value.substring(end)

        event.preventDefault()
    }
})

// Prototypal Inheritance
let i = 0;
function Stack()
{
    this.items = []; //[1, 2, 3, 4]
    
}

Stack.prototype.push = function (v) {
    // add an item
    this.items[i] = v;
    i++;
    return v;
}
Stack.prototype.pop = function () {
    // returns top value and remove it
    return this.items[i-1];
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
console.log("call stack is pushed: " + call_stack.push("7"));
console.log("call stack is poped: " + call_stack.pop());

// [1], [1, 2, 3]

function Queue()
{
    this.items = []; //[1, 2, 3, 4]
}

Queue.prototype.enqueue = function (v) {
    // add an item
}
Queue.prototype.dequeue = function () {
    // returns top value and remove it
    return 0
}
Queue.prototype.rear = function () {
    // read last value
}
Queue.prototype.front = function () {
    // read first value
}
Queue.prototype.isEmpty = function () {
    // true if stack is empty
    // false if stack is not empty
    if(this.items.length == 0)
        return true;
    return false;
}


callback_queue = new Queue()

console.log("callback_queue is empty: " + callback_queue.isEmpty()); 

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
function Stack()
{
    this.items = []; //[1, 2, 3, 4]
    this.i = 0;
    
}

Stack.prototype.push = function (v) {
    // add an item
    this.items[this.i] = v;
    this.i++;
    return v;
}
Stack.prototype.pop = function () {
    // returns top value and remove it
    return this.items[this.i-1];
}
Stack.prototype.peek = function () {
    // read top value
    if (this.items === 0) {
        return "nothing in stack"
      }
      //return this[this.items - 1];
      return this.items[this.i-1];
}
Stack.prototype.isEmpty = function () {
    // true if stack is empty
    // false if stack is not empty
    if(this.items.length == 0)
        return true;
    return false;
}


call_stack = new Stack()
console.log("call stack is empty: " + call_stack.isEmpty()); // Uncaught TypeError: Cannot read properties of undefined (reading 'isEmpty')
console.log("call stack is pushed: " + call_stack.push("stack"));
console.log("call stack is pushed: " + call_stack.push(6));
console.log("call stack is pushed: " + call_stack.push(64));
console.log("call stack is poped: " + call_stack.pop());
console.log("call stack is peeked: " + call_stack.peek());
console.log("call stack is pushed: " + call_stack.push(9));
// [1], [1, 2, 3]


function Queue()
{
    this.items = []; //[1, 2, 3, 4]
    this.size = 10;
    this.i = 0;
}

Queue.prototype.enqueue = function (v) {
    // add an item 
        if(this.i < this.size ) {  
               this.items[this.i] = v;  
               this.i = this.i + 1;  
          } 
        return v;   
}
Queue.prototype.dequeue = function () {
    // returns top value and remove it
    return this.items[this.i - 1];
}
Queue.prototype.rear = function () {
    // read last value
   return this.items[this.i - 1];
}
Queue.prototype.front = function () {
    // read first value
     return this.items[this.i + 1];
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
console.log("callback_queue is enqueued: " + callback_queue.enqueue("queue"));
console.log("callback_queue is dequeued: " + callback_queue.dequeue());
console.log("callback_queue is enqueued: " + callback_queue.enqueue(5));
console.log("callback_queue is enqueued: " + callback_queue.enqueue(8));
console.log("callback_queue is enqueued: " + callback_queue.enqueue(6));
console.log("read first value of callback_queue : " + callback_queue.front());
console.log("read last value of callback_queue : " + callback_queue.rear());


# js-event-loop
js-event-loop is a concept impelementation. In JavaScript, the event loop, call stack, event queue, and job queue all work together to handle the execution of code. A way to visualize the event loop, call stack, event queue, and job queue in JavaScript is to think of them as four separate, but interconnected, parts of a system.

## What is call stack?
The call stack is a data structure that keeps track of the current execution context, and it's where JavaScript stores the function calls that are currently being executed. When a function is called, its execution context is pushed onto the call stack, and when the function returns, its execution context is popped off the stack.

The call stack can be thought of as a stack of plates, where each plate represents a function call that is currently being executed. When a new function is called, its execution context is added to the top of the stack, and when the function returns, its execution context is removed from the top of the stack.

## What is Event Loop?
The event loop is responsible for taking messages or tasks (like a function to be called) from the message queue and pushing them onto the call stack for execution. It does this by constantly checking the message queue and the call stack. Once the call stack is empty, the event loop will take the first message from the queue and push it onto the call stack to be executed.

The event loop is like a gatekeeper that controls the flow of execution, ensuring that only one task is executed at a time. It does this by constantly checking the message queue and the call stack, moving tasks between them as necessary, and scheduling and handling the execution of code in a non-blocking manner.

## What are task queues?
Javascript has two types of task queue that are "Event Queue" & "Job Queue"

### Event Queue
Event queue is specifically for browser-related tasks such as click, hover, scroll etc. It also includes callbacks for setTimeout, setInterval, and addEventListener. The event queue can be thought of as a line of people waiting in line to be served. Each person in the line represents an event (like a button click or a network request) that is waiting to be processed. The event loop is like a server that is constantly checking the queue and the call stack, and when the call stack is empty, it takes the next person in line and serves them by adding their event to the call stack for execution.

### Job Queue
Job Queue is specifically for some non-browser-related tasks like Promises and MutationObserver callbacks. Job queue, similarly can be imagined as a separate line of people waiting in the queue, but these are waiting for some non-browser related tasks, like promise and MutationObserver callbacks.

## Conclusion
In short, the Call Stack keeps track of the function calls that are currently being executed, the Event Loop is responsible for taking messages or tasks from the message queue and pushing them onto the call stack for execution, Event Queue is specifically for browser-related tasks and Job Queue is specifically for non-browser-related tasks.

This process continues indefinitely, allowing for the execution of multiple tasks in a non-blocking manner. This is why JavaScript is often referred to as a single-threaded, non-blocking language.

For example, when a function such as setTimeout() or addEventListener() is called, it does not block the execution of the rest of the code, instead it schedule the task and put it on the message queue and continue to execute the rest of the code, The task on the message queue will be executed on the next round of the event loop.


## Authors

- Umair Anwar <umair.anwr@gmail.com>
- Alina Ijaz <alinaijaz073@gmail.com>
- Mamoona Ijaz <moonijaz006@gmail.com>
- Khushbakht Tahir <khush.bakht334@gmail.com>
- Sadia Sehar <sadia.layyah@gmail.com>
- Rizwan Ahmed <Rizwanahmedg2020@gmail.com>

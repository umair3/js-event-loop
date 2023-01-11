# js-event-loop
js-event-loop is a concept impelementation. In JavaScript, the event loop, call stack, event queue, and job queue all work together to handle the execution of code.

## What is call stack?
The call stack is a data structure that keeps track of the current execution context, and it's where JavaScript stores the function calls that are currently being executed. When a function is called, its execution context is pushed onto the call stack, and when the function returns, its execution context is popped off the stack.

## What is Event Loop?
The event loop is responsible for taking messages or tasks (like a function to be called) from the message queue and pushing them onto the call stack for execution. It does this by constantly checking the message queue and the call stack. Once the call stack is empty, the event loop will take the first message from the queue and push it onto the call stack to be executed.

## What are task queues?
Javascript has two types of task queue that are "Event Queue" & "Job Queue"
Event queue is specifically for browser-related tasks such as click, hover, scroll etc. It also includes callbacks for setTimeout, setInterval, and addEventListener.
Job Queue is specifically for some non-browser-related tasks like Promises and MutationObserver callbacks.


In summary, the event loop is responsible for scheduling and handling the execution of code asynchronously by constantly checking the message queue and the call stack, moving tasks between them, and ensuring that only one task is executed at a time.

The JavaScript event loop is a mechanism that allows the execution of code to be scheduled and handled asynchronously. It is what enables JavaScript to perform non-blocking operations and handle multiple tasks at the same time.

In JavaScript, the event loop works by constantly checking the message queue, which is a list of messages or tasks to be processed. When the call stack (the current execution context) is empty, the event loop will take the first message from the queue and push it onto the call stack to be executed. Once that message or task has completed and been removed from the call stack, the next message in the queue will be pushed onto the call stack, and so on.

This process continues indefinitely, allowing for the execution of multiple tasks in a non-blocking manner. This is why JavaScript is often referred to as a single-threaded, non-blocking language.

For example, when a function such as setTimeout() or addEventListener() is called, it does not block the execution of the rest of the code, instead it schedule the task and put it on the message queue and continue to execute the rest of the code, The task on the message queue will be executed on the next round of the event loop.


## Authors

- Umair Anwar <umair.anwr@gmail.com>
- Alina Ijaz <alinaijaz073@gmail.com>
- Mamoona Ijaz <moonijaz006@gmail.com>
- Khushbakht Tahir <khush.bakht334@gmail.com>
- Sadia Sehar <sadia.layyah@gmail.com>
- Rizwan Ahmed <Rizwanahmedg2020@gmail.com>

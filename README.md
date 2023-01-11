# js-event-loop
JavaScript Event Loop is a concept impelementation.


## Authors

- Umair Anwar <umair.anwr@gmail.com>
- Alina Ijaz <alinaijaz073@gmail.com>
- Mamoona Ijaz <moonijaz006@gmail.com>
- Khushbakht Tahir <khush.bakht334@gmail.com>
- Sadia Sehar <sadia.layyah@gmail.com>
- Rizwan Ahmed <Rizwanahmedg2020@gmail.com>

## What is Event Loop?
The JavaScript event loop is a mechanism that allows the execution of code to be scheduled and handled asynchronously. It is what enables JavaScript to perform non-blocking operations and handle multiple tasks at the same time.

In JavaScript, the event loop works by constantly checking the message queue, which is a list of messages or tasks to be processed. When the call stack (the current execution context) is empty, the event loop will take the first message from the queue and push it onto the call stack to be executed. Once that message or task has completed and been removed from the call stack, the next message in the queue will be pushed onto the call stack, and so on.

This process continues indefinitely, allowing for the execution of multiple tasks in a non-blocking manner. This is why JavaScript is often referred to as a single-threaded, non-blocking language.

For example, when a function such as setTimeout() or addEventListener() is called, it does not block the execution of the rest of the code, instead it schedule the task and put it on the message queue and continue to execute the rest of the code, The task on the message queue will be executed on the next round of the event loop.

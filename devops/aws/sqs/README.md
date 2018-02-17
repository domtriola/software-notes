# Simple Queue Service

A Publisher sends data to a Queue and a Subscriber consumes that data.

When fetching from SQS, once the data is successfully processed send a delete request back, so the Queue knows it doesn't need to retain the data any longer. A good rule of thumb is to set the sent data to be hidden (pending a delete request) at the top of the queue for 10x longer than it generally takes to process.

Queues are sharded, so if you want strict FIFO behavior you have to specify and pay more.

Storage in queues is not permanent, so you must consume data within a certain time frame.

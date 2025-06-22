export default function Page() {
  return (
    <article>
<h1>Standardize and Unify Message Queues in GOLANG</h1>
<p><img src="https://cdn-images-1.medium.com/max/800/1*a3_1glo06Fgh-pkqIATyng.png" alt="Message Queue"/></p>
<p>In distributed systems, message queues like Kafka, RabbitMQ, Active MQ, IBM MQ, NATS, Google Pub/Sub and Amazon SQS are crucial. They help to decouple services, ensure reliability, and enable asynchronous communication.</p>
<p>In Java, they have JMS (Java Message Service), which provides a standard API for messaging that can be used across different message-oriented middleware (MOM) systems, such as IBM MQ, ActiveMQ, and others.</p>
<p>However, in GOLANG, each of these message brokers has its own APIs and patterns for publishing and consuming messages, leading to code that’s tightly coupled to a specific technology, presenting a challenge: how do you maintain flexibility and simplicity when integrating these diverse systems?</p>
<h2>The Problems</h2>
<h4>Diverse APIs and Increased Complexity</h4>
<p>Each message queue comes with its own set of complexities:</p>
<ul>
<li>Kafka: Requires handling partitions, consumer groups, and offset management.</li>
<li>RabbitMQ: Involves exchanges, bindings, and manual message acknowledgments.</li>
<li>Google Pub/Sub: Offers a simpler interface but still has its own quirks and configurations.</li>
</ul>
<p>As a result, codebases that rely heavily on message queues often become entangled with the specifics of the chosen technology. If you decide to migrate from RabbitMQ to Kafka, for example, you’ll likely need to rewrite large portions of your codebase. Moreover, developers must spend time learning the intricacies of each new message queue, which can slow down development.</p>
<h4>Handling pure-technical MQ parameters</h4>
<p>Another challenge is dealing with pure-technical parameters like delay-seconds, count-threshold, and byte-threshold. These parameters are essential for configuring the message queue but don’t belong to the business logic layer. To keep the business logic clean and focused, we should wrap the message queue library to move these technical details to the infrastructure layer.</p>
<h2>The Solution: Standardizing Message Queues</h2>
<p>To mitigate these issues, you can create a standardized interface for message publishing and consuming in GOLANG. This involves developing an abstraction layer that hides the complexities of individual message queues behind a unified API. By standardizing the way your application interacts with message queues, you can decouple your business logic from the specifics of the underlying message broker.</p>
<h4>Key Features of a Standardized Interface:</h4>
<ul>
<li><b>Unified Publishing and Consuming</b>: A single set of functions for publishing and consuming messages, regardless of the underlying message queue.</li>
<li><b>Plug-and-Play Support</b>: Easily switch between different message queues by changing configurations, with minimal code changes.</li>
<li><b>Consistent Error Handling and Retries</b>: Implement standardized error handling, retries, and logging across all message queues.</li>
<li><b>Configuration Abstraction</b>: Standardize configuration options so that switching message queues doesn’t require reconfiguring the entire system.</li>
<li><b>Separate MQ technical parameters out of business logic</b>: We should move MQ technical parameters like delay-seconds, count-threshold, and byte-threshold to the infrastructure layer, to keep the business logic clean and focused.</li>
<li><b>Advanced Features</b>: In the wrapper library, we allow to use GO libraries at native level, to let developers access to advanced features of specific message queues through optional extensions, preserving flexibility without sacrificing simplicity.</li>
</ul>
<h4>The Pros and Cons of Standardization</h4>
<p><b>Pros</b>:</p>
<ul>
<li><b>Faster Learning Curve</b>: New developers joining your team don’t need to learn the intricacies of multiple message queues. Instead, they can focus on the standardized interface, getting up to speed faster and contributing more effectively.</li>
<li><b>Simplified Codebase</b>: A standardized interface reduces the complexity of your codebase by decoupling it from specific message queue implementations.</li>
<li><b>Ease of Switching</b>: You can switch message queues with minimal effort, reducing the risk and cost of migrations.</li>
<li><b>Access to Advanced Features</b>: We allow to use GO libraries at native level, to allow developers to access to advanced features of a specific message queue like Kafka, IBM MQ.</li>
</ul>
<p><b>Cons</b>:</p>
<ul>
<li><b>Potential Performance Overhead</b>: The abstraction layer might introduce slight performance penalties if not optimized for each message queue.</li>
</ul>
<h3>Proposed Standardized Interface</h3>
<h4>Publishing A Message</h4>
<pre className="line-numbers"><code className="language-go">{`type Publisher interface {
  PublishData(ctx context.Context, data []byte) error
  Publish(ctx context.Context, data []byte, attributes map[string]string) error
  PublishMessage(ctx context.Context, message pubsub.Message) (string, error)
}`}</code></pre><p>In most of message queues, I see they use Message struct as parameter, which has some disadvantages:</p>
<ul>
<li>In Message struct, there are some fields, which are used to consume message only. For example, in Google Pub/Sub, these fields &#39;PublishTime&#39;, &#39;DeliveryAttempt&#39; are read-only, and used to consume message only.</li>
<li>When most of the message queues use the full Message struct, they put more parameters, which are never used for publishing</li>
</ul>
<p><b>Solution</b></p>
<ul>
<li>Move all MQ technical parameters like delay-seconds, count-threshold, and byte-threshold to the infrastructure layer, to keep the business logic clean.</li>
<li>Remove all unused parameters, such as PublishTime, DeliveryAttempt when publishing the message</li>
<li>Just keep the meaningful parameters. In the above interace, you see 2 clean methods, which can serve 95% the cases:<pre className="line-numbers"><code className="language-go">{`PublishData(ctx context.Context, data []byte) error
Publish(ctx context.Context, data []byte, attributes map[string]string) error`}</code></pre></li>
<li><b>To allow developers to access to advanced features</b>, we keep the native method:<pre className="line-numbers"><code className="language-go">{`PublishMessage(ctx context.Context, message pubsub.Message) (string, error)`}</code></pre></li>
</ul>
<h4>Subscribe A Message</h4>
<p>I observe these 9 libraries of 7 message queues below:</p>
<ul>
<li><a href="https://github.com/segmentio/kafka-go">https://github.com/segmentio/kafka-go</a> (Kafka)</li>
<li><a href="https://github.com/IBM/sarama">https://github.com/IBM/sarama</a> (Kafka)</li>
<li><a href="https://github.com/confluentinc/confluent-kafka-go">https://github.com/confluentinc/confluent-kafka-go</a> (Kafka)</li>
<li><a href="https://github.com/rabbitmq/amqp091-go">https://github.com/rabbitmq/amqp091-go</a> (Rabbit MQ)</li>
<li><a href="https://pkg.go.dev/cloud.google.com/go/pubsub">https://pkg.go.dev/cloud.google.com/go/pubsub</a> (Google Pub/Sub)</li>
<li><a href="https://github.com/aws/aws-sdk-go/tree/main/service/sqs">https://github.com/aws/aws-sdk-go/tree/main/service/sqs</a> (Amazon SQS)</li>
<li><a href="https://github.com/ibm-messaging/mq-golang">https://github.com/ibm-messaging/mq-golang</a> (IBM MQ)</li>
<li><a href="https://github.com/go-stomp/stomp">https://github.com/go-stomp/stomp</a> (Active MQ)</li>
<li><a href="https://github.com/nats-io/nats.go">https://github.com/nats-io/nats.go</a> (NATS)</li>
</ul>
<p>After analyzed 9 libraries of 7 message queues, I see interface of Google Pub/Sub is simple, easy to use. So, I propose this interface:</p>
<pre className="line-numbers"><code className="language-go">{`type Subscriber interface {
  SubscribeData(context.Context, func(context.Context, []byte))
  Subscribe(context.Context, func(context.Context, []byte, map[string]string))
  SubscribeMessage(context.Context, func(context.Context, *pubsub.Message))
}`}</code></pre><ul>
<li>To keep the meaningful input parameters, I keep 2 clean methods, which can serve 95% the cases:<pre className="line-numbers"><code className="language-go">{`SubscribeData(context.Context, func(context.Context, []byte))
Subscribe(context.Context, func(context.Context, []byte, map[string]string))`}</code></pre></li>
<li>To allow developers to access to advanced features, we keep the native method:<pre className="line-numbers"><code className="language-go">{`SubscribeMessage(context.Context, func(context.Context, *pubsub.Message))`}</code></pre></li>
</ul>
<p><b>Summary</b>
With the above 2 interfaces, I can standardize the message queues, with clean business:</p>
<ul>
<li>You do not see the MQ configured parameters, because these parameters are put into the infrastructure layer.</li>
<li>Most of the cases, we do not use the header. So, we keep 1 method to send/consume the body only.</li>
<li>For some cases, we need to use the header. So, we keep 1 method to send/consume the body with header map[string]string. &#39;map[string]string&#39; allow the interfaces not to depend any 3rd party library.</li>
<li>Keep 1 method to handle the native library, to Access to Advanced Features.</li>
</ul>
<p>If you do not like the above method names: SubscribeData, Subscribe, SubscribeMessage, in GOLANG, we have a solution for it. GOLANG allows higher-order functions, like Javascript, where you can pass one function to another, use it as a callback. You can create a new instance, and pass the method/function as the parameter. Inside the business layer, you can use the method name you want.</p>
<h3>Available Examples:</h3>
<p>I and my team, we standardize 9 GO libraries, of 7 message queues, and created these 9 samples. You can refer to these examples and see how easy to use:</p>
<h4>RabbitMQ</h4>
<ul>
<li>An open-source message broker that supports multiple messaging protocols. It provides features like message routing, persistence, and acknowledgment.</li>
<li>RabbitMQ GO library is at <a href="https://github.com/core-go/rabbitmq">rabbitmq</a>, to wrap and simplify <a href="https://github.com/rabbitmq/amqp091-go">rabbitmq/amqp091-go</a>. The sample is at <a href="https://github.com/project-samples/go-rabbit-mq-sample">go-rabbit-mq-sample</a></li>
<li>RabbitMQ nodejs library is at <a href="https://www.npmjs.com/package/rabbitmq-ext">rabbitmq-ext</a>, to wrap and simplify <a href="https://www.npmjs.com/package/amqplib">amqplib</a>. The sample is at <a href="https://github.com/typescript-tutorial/rabbitmq-sample">rabbitmq-sample</a></li>
</ul>
<h4>Apache Kafka</h4>
<ul>
<li>A distributed streaming platform that handles high-throughput, low-latency message processing. It is often used for building real-time data pipelines and streaming applications.</li>
<li>Kafka GO library is at <a href="https://github.com/core-go/kafka">kafka</a>, to wrap and simplify 3 Kafka GO libraries: <a href="https://github.com/segmentio/kafka-go">segmentio/kafka-go</a>, <a href="https://github.com/IBM/sarama">IBM/sarama</a> and <a href="https://github.com/confluentinc/confluent-kafka-go">confluent</a>. The sample is at <a href="https://github.com/project-samples/go-kafka-sample">go-kafka-sample</a></li>
<li>Kafka nodejs library is at <a href="https://www.npmjs.com/package/kafka-plus">kafka-plus</a>, to wrap and simplify <a href="https://www.npmjs.com/package/kafkajs">kafkajs</a>. The sample is at <a href="https://github.com/typescript-tutorial/kafka-sample">kafka-sample</a></li>
</ul>
<h4>Amazon SQS (Simple Queue Service)</h4>
<ul>
<li>A fully managed message queue service offered by AWS. It provides a reliable, scalable, and cost-effective way to decouple and coordinate distributed software systems and microservices.</li>
<li>SQS GO library is at <a href="https://github.com/core-go/sqs">sqs</a>, to wrap and simplify <a href="https://github.com/aws/aws-sdk-go/tree/main/service/sqs">aws-sdk-go/service/sqs</a>. The sample is at <a href="https://github.com/project-samples/go-amazon-sqs-sample">go-amazon-sqs-sample</a></li>
</ul>
<h4>Google Cloud Pub/Sub</h4>
<ul>
<li>A fully managed messaging service that allows for event-driven systems and real-time analytics on Google Cloud Platform.</li>
<li>Pub/Sub GO library is at <a href="https://github.com/core-go/pubsub">core-go/pubsub</a>, to wrap and simplify <a href="https://pkg.go.dev/cloud.google.com/go/pubsub">go/pubsub</a>. The sample is at <a href="https://github.com/project-samples/go-pubsub-sample">go-pubsub-sample</a></li>
<li>Pub/Sub nodejs library is at <a href="https://www.npmjs.com/package/google-pubsub">google-pubsub</a>, to wrap and simplify <a href="https://www.npmjs.com/package/@google-cloud/pubsub">@google-cloud/pubsub</a>. The sample is at <a href="https://github.com/typescript-tutorial/pubsub-sample">pubsub-sample</a></li>
</ul>
<h4>IBM MQ</h4>
<ul>
<li>IBM MQ at <a href="https://github.com/core-go/ibmmq">ibmmq</a>, to wrap and simplify <a href="https://github.com/ibm-messaging/mq-golang">ibmmq</a>. The sample is at <a href="https://github.com/project-samples/go-ibm-mq-sample">go-ibm-mq-sample</a></li>
<li>IBM MQ nodejs library is at <a href="https://www.npmjs.com/package/ibmmq-plus">ibmmq-plus</a>, to wrap and simplify <a href="https://www.npmjs.com/package/ibmmq">ibmmq</a>. The sample is at <a href="https://github.com/typescript-tutorial/ibmmq-sample">ibmmq-sample</a></li>
</ul>
<h4>Active MQ</h4>
<ul>
<li>Active MQ at <a href="https://github.com/core-go/activemq">activemq</a>, to wrap and simplify <a href="https://github.com/go-stomp/stomp">go-stomp</a>. The sample is at <a href="https://github.com/project-samples/go-active-mq-sample">go-active-mq-sample</a></li>
<li>Active MQ nodejs library is at <a href="https://www.npmjs.com/package/activemq">activemq</a>, to wrap and simplify <a href="https://www.npmjs.com/package/amqplib">amqplib</a>. The sample is at <a href="https://github.com/typescript-tutorial/activemq-sample">activemq-sample</a></li>
</ul>
<h4>NATS</h4>
<ul>
<li>NATS at <a href="https://github.com/core-go/nats">nats</a>, to wrap and simplify <a href="https://github.com/nats-io/nats.go">nats.go</a>. The sample is at <a href="https://github.com/project-samples/go-nats-sample">go-nats-sample</a></li>
<li>NATS nodejs library is at <a href="https://www.npmjs.com/package/nats-plus">nats-plus</a>, to wrap and simplify <a href="https://www.npmjs.com/package/nats">nats</a>. The sample is at <a href="https://github.com/typescript-tutorial/nats-sample">nats-sample</a></li>
</ul>
<h3>Conclusion: Balancing Simplicity and Flexibility</h3>
<p>Standardizing message publishing and consuming in Golang can significantly streamline your development process, especially in complex, distributed systems. It simplifies your code, makes it more maintainable, and makes it easier to switch between different message queues as your needs change. By adopting a standardized approach, you create a more resilient and adaptable system that can easily evolve as your project grows.</p>
<p>By also isolating technical parameters, you keep your business logic clean and focused, leading to better-structured and more maintainable code.</p>
<p>You might lose some advanced features, but the trade-off is worth it for the flexibility and simplicity you gain.</p>
</article>
  )
}
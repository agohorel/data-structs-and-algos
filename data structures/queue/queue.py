class Queue:
    def __init__(self):
        self.storage = []

    def __len__(self):
        return len(self.storage)

    def enqueue(self, value):
        self.storage.insert(0, value)

    def dequeue(self):
        if len(self.storage) > 0:
            return self.storage.pop()
        else:
            print("Cannot dequeue from empty queue!")
            return None

q = Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

print("length of queue:", len(q))
print("items in queue:", q.storage)

print("dequeued value:", q.dequeue())
print("dequeued value:", q.dequeue())
print("dequeued value:", q.dequeue())
print("dequeued value:", q.dequeue())

print("length of queue:", len(q))
print("items in queue:", q.storage)

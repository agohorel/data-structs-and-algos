class Stack:
    def __init__(self):
        self.storage = []

    def __len__(self):
        return len(self.storage)

    def push(self, value):
        self.storage.append(value)

    def pop(self):
        if len(self.storage) > 0:
            return self.storage.pop()
        else:
            print("Cannot pop from empty stack!")
            return None


s = Stack()

s.push(1)
s.push(2)
s.push(3)

print("length of stack:", len(s))
print("items in stack:", s.storage)

print("popped value:", s.pop())
print("popped value:", s.pop())
print("popped value:", s.pop())
print("popped value:", s.pop())

print("items in stack:", s.storage)

class Node:
    def __init__(self, value=None, next_node=None):
        self.value = value
        self.next_node = next_node

    def __str__(self):
        return f"{self.value}"


class LinkedList:
    def __init__(self):
        self.head = None

    def prn(self):
        if self.head is None:
            print(None)
        else:
            cur = self.head
            print(f"{cur}<--head")

            while cur.next_node:
                cur = cur.next_node
                if cur.next_node is not None:
                    print(cur)
                else:
                    print(f"{cur}<--tail")

    def __len__(self):
        length = 0

        if self.head is None:
            return length
        else:
            cur = self.head
            length += 1

            while cur.next_node:
                cur = cur.next_node
                length += 1
            
            return length


    def add_to_head(self, value):
        node = Node(value)

        if self.head is None:
            self.head = node
        else:
            prev_head = self.head
            node.next_node = prev_head
            self.head = node
            

    def add_to_tail(self, value):
        node = Node(value)

        if self.head is None:
            self.head = node
        else:
            cur = self.head

            while cur.next_node != None:
                cur = cur.next_node
            
            cur.next_node = node

    def remove_from_head(self):
        if self.head is None:
            return
        else:
            prev_head = self.head
            self.head = prev_head.next_node
            

    def remove_from_tail(self):
        if self.head is None:
            return
        else:
            cur = self.head

            while cur.next_node:
                prev = cur
                cur = cur.next_node
            
            prev.next_node = None


    def reverse(self):
        if self.head is None:
            return
        else:
            cur = self.head
            prev = None

            while cur:
                nxt = cur.next_node
                cur.next_node = prev

                prev = cur
                cur = nxt
            
            self.head = prev
                

    
ll = LinkedList()

print("test adding to tail:")
ll.add_to_tail(1)
ll.add_to_tail(2)
ll.add_to_tail(3)
ll.prn()
print()

print("test adding to head:")
ll.add_to_head(4)
ll.prn()
print()

print("test reversing linked list:")
ll.reverse()
ll.prn()
print()

print("test removing from head:")
ll.remove_from_head()
ll.prn()
print()

print("test removing from tail:")
ll.remove_from_tail()
ll.prn()
print()
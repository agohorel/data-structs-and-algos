class Node:
    def __init__(self, index, value):
        self.data = {"index": index, "value": value}
        self.next = None

    def __str__(self):
        return f"{self.data}"


class LinkedList:
    def __init__(self, head=None):
        self.head = head

    def __str__(self):
        if self.head is None:
            print(None)
        else:
            cur = self.head
            print(f"{cur}<--head")

            while cur.next:
                cur = cur.next
                if cur.next is not None:
                    print(cur)
                else:
                    print(f"{cur}<--tail")

    def add(self, node):
        if self.head is None:
            self.head = node
        else:
            cur = self.head

            while cur.next:
                cur = cur.next

            cur.next = node


def dot_product(l1, l2):
    # edge case if either list is empty
    if l1 == None or l2 == None:
        return -1

    total = 0
    node1 = l1
    node2 = l2

    while node1.next and node2.next:

        if node1.data["index"] == node2.data["index"]:
            total += node1.data["value"] * node2.data["value"]
            node1 = node1.next
            node2 = node2.next

        elif node1.data["index"] < node2.data["index"]:
            node1 = node1.next

        else:
            node2 = node2.next

    return total


def rebuild_sparse_vector(list_head, length_of_vector):
    rebuilt_vector = []
    cur = list_head

    # populate entire vector w/ zeros
    for _ in range(length_of_vector):
        rebuilt_vector.append(0)

    rebuilt_vector[cur.data["index"]] = cur.data["value"]

    # traverse linked list and replace indexes w/ non-zero values
    while cur.next:
        cur = cur.next
        rebuilt_vector[cur.data["index"]] = cur.data["value"]

    return rebuilt_vector


def check_rebuilt_vector(vector, rebuilt_vector):
    for i in range(len(vector)):
        if vector[i] != rebuilt_vector[i]:
            print("Vectors are not equal!")
            return

    print("Vectors are equal!")


v1 = [0, 1, 0, 0, 0, 3, 0, 0, 0, 7, 0, 2, 0,
      0, 8, 0, 0, 0, 9, 0, 0, 0, 0, 0, 10, 0, 0]

v2 = [3, 1, 0, 0, 4, 0, 0, 1, 2, 3, 0, 0, 0, 0,
      9, 0, 0, 1, 3, 0, 4, 0, 2, 0, 1, 7, 0, 0, 0]

# expected dot product: 1 + 21 + 72 + 27 + 10 = 131

# instantiate linked lists
l1 = LinkedList()
l2 = LinkedList()

# build linked lists
for idx, val in enumerate(v1):
    l1.add(Node(idx, val))

for idx, val in enumerate(v2):
    l2.add(Node(idx, val))

# display dot product
print(dot_product(l1.head, l2.head))

# rebuild vectors from linked list representation
rebuilt_v1 = rebuild_sparse_vector(l1.head, len(v1))
rebuilt_v2 = rebuild_sparse_vector(l2.head, len(v2))

# confirm the rebuilt vectors match the originals
check_rebuilt_vector(v1, rebuilt_v1)
check_rebuilt_vector(v2, rebuilt_v2)

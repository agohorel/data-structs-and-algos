from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity: int):
        self.cache = OrderedDict()
        self.capacity = capacity

    def __repr__(self):
        return f"{self.cache}"

    def get(self, key: int) -> int:
        """
        Return the value of the key. If not present, return None
        then move the accessed key to the end of the cache.
        """
        if key in self.cache:
            self.cache.move_to_end(key)
            return self.cache[key]
        else:
            return None


    def put(self, key: int, value: int) -> None:
        """
        Add an item to the cache, keeping track of capacity.
        If the size of the cache exceeds the capacity, 
        evict the least recently used item
        """
        self.cache[key] = value
        self.cache.move_to_end(key)
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)


def run_test_suite():
    lru = LRUCache(3)

    lru.put(1, 1)
    lru.put(2, 2)
    lru.put(3, 3)

    assert lru.get(2) == 2
    lru.put(4, 4)
    assert lru.get(1) == None
    assert lru.get(2) == 2
    lru.put(5,5)
    assert lru.get(2) == 2
    lru.put(6,6)
    assert lru.get(2) == 2
    lru.put(7,7)
    lru.put(8,8)
    lru.put(9,9)
    assert lru.get(2) == None

    print("All tests have passed!")


run_test_suite()


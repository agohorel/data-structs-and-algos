data = open("values.txt", "r")
values = [int(v) for v in data.read().split(",")]

class LinearSearch:
    def __init__(self):
        self.values = values
        self.target = 73

    def search(self):
        for i in self.values:
            if i == self.target:
                print(i)
                return i


linear_search = LinearSearch()
linear_search.search()
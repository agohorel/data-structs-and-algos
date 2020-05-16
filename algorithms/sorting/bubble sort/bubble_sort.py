data = open("values.txt", "r")
values = [int(v) for v in data.read().split(",")]


class BubbleSort:
    def __init__(self):
        self.values = values


    def sort(self):
        for i in range(len(self.values)):
            for j in range(len(self.values) - i - 1):
                if self.values[j] > self.values[j+1]:
                    self.values[j], self.values[j+1] = self.values[j+1], self.values[j]
        print(self.values)


bubble_sort = BubbleSort()
bubble_sort.sort()
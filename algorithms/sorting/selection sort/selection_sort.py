data = open("values.txt", "r")
values = [int(v) for v in data.read().split(",")]

class SelectionSort:
    def __init__(self):
        self.values = values
        self.low_idx = self.values[0]
        self.cur_idx = 0

    def sort(self):
        for i in range(len(self.values)):
            self.low_idx = i
            self.cur_idx = i
            for j in range(i+1, len(self.values)):
                if self.values[j] < self.values[self.low_idx]:
                    self.low_idx = j
            self.values[self.cur_idx], self.values[self.low_idx] = self.values[self.low_idx], self.values[self.cur_idx]

        print(self.values)
            

selectionSort = SelectionSort()
selectionSort.sort()
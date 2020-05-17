data = open("values.txt", "r")
values = [int(v) for v in data.read().split(",")]

def selection_sort(values):
    for i in range(len(values)):
        lowest = i
        for j in range(i+1, len(values)):
            if values[j] < values[lowest]:
                lowest = j
        values[i], values[lowest] = values[lowest], values[i]
    print(values)

selection_sort(values)
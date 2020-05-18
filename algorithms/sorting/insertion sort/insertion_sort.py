data = open("values.txt", "r")
values = [int(v) for v in data.read().split(",")]


def insertionSort(values):
    for i in range(len(values)):
        current = values[i]
        j = i - 1
        while j >= 0 and values[j] > current:
            values[j + 1] = values[j]
            j -= 1
        values[j+1] = current
    return values


result = insertionSort(values)
print(result)

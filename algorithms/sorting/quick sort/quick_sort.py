def quick_sort(arr):
    if len(arr) <= 1:
        return arr

    # pick a pivot point
    pivot = arr[0]
    # separate all values smaller or larger than pivot into separate lists
    smaller = []
    larger = []

    for i in range(1, len(arr)):
        if arr[i] <= pivot:
            smaller.append(arr[i])
        else:
            larger.append(arr[i])

    # sort smaller and larger
    smaller = quick_sort(smaller)
    larger = quick_sort(larger)
    # concat smaller + pivot + larger
    return smaller + [pivot] + larger


values = [9, 8, 7, 6, 5, 4, 3, 2, 1]
result = quick_sort(values)
print(result)

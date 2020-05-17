data = open("values.txt", "r")
values = [int(v) for v in data.read().split(",")]

def binary_search(values, target):
    low = 0;
    mid = len(values)//2
    high = len(values)-1

    while low <= high:
        mid = (low + high)//2
        guess = values[mid]

        if guess == target:
            print(f"Found {target} at index {mid}!")
            return guess
        elif guess < target:
            low = mid + 1
        elif guess > target:
            high = mid - 1
    print("Value not found!")
    return None


binary_search(values, 1)
binary_search(values, 99)
binary_search(values, 1110)
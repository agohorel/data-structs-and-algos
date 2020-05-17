data = open("values.txt", "r")
values = [int(v) for v in data.read().split(",")]

def linear_search(values, target):
    for idx,val in enumerate(values):
        if val == target:
            print(f"Found {target} at index {idx}!")
            return idx
    print("Value not found!")
    return False

linear_search(values, 1)
linear_search(values, 99)
linear_search(values, 1110)
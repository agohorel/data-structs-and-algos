def iterative_factorial(n):
    factorial = 1
    for x in range(n, 0, -1):
        factorial *= i
    return factorial

def recursive_factorial(n):
    if n == 0:
        return 1
    return n * recursive_factorial(n-1)


f1 = iterative_factorial(3)
f2 = recursive_factorial(3)

print(f1, f2)
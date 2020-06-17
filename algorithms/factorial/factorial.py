"""
The first two solutions have very poor runtimes due to repeating the same calculations 
over and over. The third example utilizes 'memoization' by using a cache that 
stores previously calculated values so each calculation only has to be performed once.
"""


def iterative_factorial(n):
    factorial = 1
    for x in range(n, 0, -1):
        factorial *= x
    return factorial


def recursive_factorial(n):
    if n == 0:
        return 1
    return n * recursive_factorial(n-1)


def memoized_factorial(n, cache):
    factorial = 1

    for x in range(n, 0, -1):
        if x not in cache:
            factorial *= x
            cache[x] = factorial
        else:
            factorial = cache[x]

    return factorial



f1 = iterative_factorial(3)
f2 = recursive_factorial(3)

cache = {}
f3 = memoized_factorial(100, cache)

print(f1, f2, f3)

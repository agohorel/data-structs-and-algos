def iterative_fibonacci(n):
    fibonacci = 1
    prev = 0
    prev_prev = None
    for x in range(1, n):
        prev_prev = prev
        prev = fibonacci
        fibonacci = prev + prev_prev

    return fibonacci


def recursive_fibonacci(n):
    if n <= 1:
        return n
    else:
        return recursive_fibonacci(n-1) + recursive_fibonacci(n-2)


f1 = iterative_fibonacci(16) 
f2 = recursive_fibonacci(16)
print(f1, f2)

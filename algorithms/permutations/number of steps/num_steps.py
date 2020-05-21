""" 
You are climbing a staircase. It takes n steps to reach the top.
Each time, you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
Note: Given n will be a positive integer.
"""
import time

def num_steps(current, destination):
    if current == destination:
        return 1
    elif current > destination:
        return 0

    return num_steps(current + 1, destination) + num_steps(current + 2, destination)

start = time.time()
permutations = num_steps(0, 20)
stop = time.time()
duration = stop - start
print(
    f"There are {permutations} permutations of 1 and/or 2 steps to reach destination. Computed in {duration} seconds")



def num_steps_memoized(current, destination, cache={}):
    if current == destination:
        return 1
    elif current > destination:
        return 0
    elif current not in cache:
        cache[current] = num_steps_memoized(current + 1, destination, cache) + num_steps_memoized(current + 2, destination, cache)

    return cache[current]

start2 = time.time()
permutations2 = num_steps_memoized(0, 200) # note input is 10x larger!
stop2 = time.time()
duration2 = stop2 - start2
print(
    f"There are {permutations2} permutations of 1 and/or 2 steps to reach destination. Computed in {duration2} seconds")

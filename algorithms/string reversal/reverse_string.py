def iterative_reverse_string(str):
    result = ""
    for i in range(len(str)-1, -1, -1):
        result += str[i]
    return result


def recursive_reverse_string(str):
    if len(str) == 0:
        return str
    else:
        return recursive_reverse_string(str[1:]) + str[0]



reverse_string1 = iterative_reverse_string("reverse")
palindrome1 = iterative_reverse_string("racecar")
print(reverse_string1, palindrome1)

reverse_string2 = recursive_reverse_string("reverse")
palindrome2 = recursive_reverse_string("racecar")
print(reverse_string2, palindrome2)
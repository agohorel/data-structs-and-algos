def iterative_palindrome(str):
    for i in range(len(str)):
        if str[i] != str[len(str) - 1 - i]:
            return False
        else: return True

def recursive_palindrome(str):
    if len(str) <= 1:
        return True
    else:
        if str[0] == str[len(str)-1]:
            str = str[1:-1]
            return recursive_palindrome(str)
    return False


result1 = iterative_palindrome("racecar")
result2 = iterative_palindrome("notapalindrome")
print(result1, result2)

result3 = recursive_palindrome("racecar")
result4 = recursive_palindrome("notapalindrome")
print(result3, result4)
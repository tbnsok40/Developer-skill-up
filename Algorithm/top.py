def solution(n):
    result = []
    for i in range(n):
        result.append([1 if j == 0 or i == j else result[i-1][j-1] + result[i-1][j] for j in range(i + 1)])
    return result

n = 4
print(solution(n))
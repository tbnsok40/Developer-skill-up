def solution(n):
    result = []
    for i in range(0, n):
        temp = []
        for j in range(i + 1):
            if j == 0 or i == j:
                temp.append(1)
            else:
                temp.append(result[i-1][j-1] + result[i-1][j])
        result.append(temp)
    return result

n = 5
print(solution(n))

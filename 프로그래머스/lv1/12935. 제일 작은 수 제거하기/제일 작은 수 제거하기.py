def solution(arr):
    answer = 0
    if len(arr) == 1: 
        answer.append(-1)
    else:
        answer = arr
        answer.remove(min(arr))
    return answer
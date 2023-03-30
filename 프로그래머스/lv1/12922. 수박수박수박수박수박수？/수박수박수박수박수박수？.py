def solution(n):
    a = "수박"
    answer = ""
    for i in range(n//2):
        answer += a
    if n%2 ==1:
        answer +="수"
    return answer
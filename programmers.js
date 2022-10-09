// 짝수와 홀수
function solution(num) {
    if(num%2 === 0){return "Even"}
    else{return "Odd"}
}

// 평균 구하기
function solution(arr) {
    let a = 0;
    for(let i in arr){
        a = a + arr[i]
    }
    a = a/arr.length
    return a
}

//약수 구하기 
function solution(n) {
    let result =0
    let yaksu = [];
    for(let i = 1; i<=n; i++){
        if(n % i ===0){
        yaksu.push(i)
        }
    }
    for(let i in yaksu){
    result = result + yaksu[i]
    }return result 
}
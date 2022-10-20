function solution(a, b) {
    let x;
    if(a > b){
        x = a
        a = b
        b = x
    }
    let result = 0
    for(let i = a;i<=b;i++){
        result = i + result}
    return result
}
function solution(seoul) {
    let result;
    for(let i in seoul){
        if(seoul[i] === "Kim"){
            result = i
        }
    }
    return `김서방은 ${result}에 있다`
}
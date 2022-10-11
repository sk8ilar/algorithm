function solution(n) {
    let result = []
    let array = String(n).split("").reverse()
    for(let i in array){
      result.push(Number(array[i]))
    }
    return result
}
function solution(s) {
    let x = s.split(" ")
    let max = Number(x[0])
    let min = Number(x[0])
    for(let i in x){
      if(max<Number(x[i])){
        max = Number(x[i])
      }
    }
    for(let i in x){
      if(min>Number(x[i])){
        min = Number(x[i])
      }
    }
  let y = [min, max].join(" ")
  return y
}

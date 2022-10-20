function solution(s) {
  let result = []
   let x = s.split(" ")
   for(let i in x){
    result[i] = x[i].slice(0,1).toUpperCase() + x[i].slice(1).toLowerCase()
   }
  return result.join(" ")
}
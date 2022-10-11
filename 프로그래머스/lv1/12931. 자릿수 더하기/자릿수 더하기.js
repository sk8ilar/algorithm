function solution(n)
{
   let string = String(n)
   let result = 0;
   for(let i in string){
       result = result + Number(string[i])
   }
  return result
}
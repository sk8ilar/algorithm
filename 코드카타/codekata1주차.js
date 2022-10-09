//1주차 1일 (30분안에 클리어)
const twoSum = (nums, target) => {
    let result = []
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          result = [i, j]
        }
      }
    } return result
    // 아래 코드를 작성해주세요.
  }

//1주차 2일 (35분 클리어)
const reverse = x => {
  let a = String(x).split('')
  if (x < 0) { a.shift() }
  let result = []
  for (let i in a) {
    result.push(a[a.length - i - 1])
  }
  if (result[0] === "0") { result.shift() }
  let result2 = Number(result.join(""))
  if (x < 0) { result2 = -result2 }
  return result2
}
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
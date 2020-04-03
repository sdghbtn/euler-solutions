const buildArray = l => Array.from(Array(l), (x, i) => i + 1)
const areMultiples = a => c => a.every(n => c % n === 0)

const TEST_NUMBER = 2520
const TEST_LIST = buildArray(10)


areMultiples(TEST_LIST)(TEST_NUMBER) //?




const FINAL_LIST = buildArray(20);

const isMultipleOfFinalList = areMultiples(FINAL_LIST)

let done = false
let curNum = 1
let foundNum

while (!done) {
  if (isMultipleOfFinalList(curNum)) {
    foundNum = curNum
    done = true
  }
  curNum++
}

foundNum //?
/*
 100 개의 랜덤 해시값 중 끝자리가 0인 해시값의 개수의 평균값 구하기
*/
const web3 = require("web3");
const randomstring = require("randomstring");

// 10자리 랜덤 문자열을 seed값으로 넣어서 keccak256 해시 함수가 잘 작동하는지 테스트
console.log(web3.utils.keccak256(randomstring.generate(10)));

// seed값 하나로 100개의 해시값을 반복적으로 생성하여 그 중 끝자리가 0이 나오는 것의 개수 반환
recHash = (seed, cnt) => {
  let result = 0;
  let temp = seed;
  while (cnt--) {
    temp = web3.utils.keccak256(temp);
    result += parseInt(temp.slice(-1), 16) == 0 ? 1 : 0;
  }
  return result;
};

avgCount = cnt => {
  let sum = 0;
  let num = cnt;
  while (cnt--) {
    sum += recHash(randomstring.generate(10), 100);
  }
  return sum / num;
};

console.log(avgCount(1000));

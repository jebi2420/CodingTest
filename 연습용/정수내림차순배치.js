// [문자 풀이]
function solution_string(n){
  const numbers = n.toString().split('');
  return parseInt(numbers.sort((a,b)=> b-a).join(''));
}
let n = 118372;
console.log(solution_string(n)) // 873211
// 작업 시간
console.time('solution_string'); // 0.087ms
solution_string(n);
console.timeEnd('solution_string'); // 0.09ms

// [숫자 풀이]
function solution_num(n) {
  var nums =[];
  do{
      nums.push(n%10); // n의 마지막 자릿수 반환
      n=Math.floor(n/10); // 마지막 자릿수를 소수값을 이용해 버림
  } while(n>0)

  return nums.sort((a,b)=>b-a).join('')*1;
}
console.log(solution_num(n))

 // 작업 시간
console.time('solution_num');
solution_num(n);
console.timeEnd('solution_num');

// [숫자 풀이2 : parseInt 사용]
function solution_num2(n) {
  var nums =[];
  do{
      nums.push(n%10); // n의 마지막 자릿수 반환
      n=Math.floor(n/10); // 마지막 자릿수를 소수값을 이용해 버림
  } while(n>0)

   // 배열을 내림차순으로 정렬 후 문자열로 변환하고 정수로 변환
  return parseInt(nums.sort((a, b) => b - a).join(''));
}
console.log(solution_num2(n))

// 작업 시간
console.time('solution_num2');
solution_num2(n);
console.timeEnd('solution_num2');


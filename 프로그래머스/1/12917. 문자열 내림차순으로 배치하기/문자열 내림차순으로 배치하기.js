function solution(s){
  const arr = s.split('');
  const upperArr = arr.map((i) => i.toUpperCase());
  const answer = [];
  const sortedUpperArr = [];

  // 기존 배열과 대문자 배열을 비교해서 대문자를 추려낸다.
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== upperArr[i]){
      answer.push(arr[i]);
    }else{
      sortedUpperArr.push(arr[i]);
    }
  }
  answer.sort((a, b) => {
    if(a > b) return -1;
    if(a < b) return 1;
    return 0;
  });
  sortedUpperArr.sort((a, b) => {
    if(a > b) return -1;
    if(a < b) return 1;
    return 0;
  });

  for(let i = 0; i < sortedUpperArr.length; i++){
    answer.push(sortedUpperArr[i]);
  }
  
  return answer.join('');
}

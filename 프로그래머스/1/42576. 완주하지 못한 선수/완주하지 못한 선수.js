function solution(participant, completion) {
  // 참가자 배열과 완주자 배열 정렬
  participant.sort();
  completion.sort();

  // 참가자 배열과 완주자 배열을 비교하면서 완주하지 못한 선수 찾기
  for(let i = 0; i < completion.length; i++){
    if(participant [i] !== completion[i]){
      return participant[i];
    }
  }

  // 만약 끝까지 비교했는데 차이가 없다면, 마지막 참가자가 완주하지 못한 선수
  return participant[participant.length-1];
}

let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];
console.log(solution(participant, completion));


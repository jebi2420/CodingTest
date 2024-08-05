function solution(answer){
  let student_1 = new Array(answer.length);
  let student_2 = new Array(answer.length);
  let student_3 = new Array(answer.length);
  let i = 0;
  let j = 1;

  // [ 수포자 1 답 생성 ]
  while(i < answer.length){
    // j가 6면 1로 초기화
    if(j === 6){
      j = 1;
    }

    student_1[i] = j
    j++;
    i++;
  }

  // [ 수포자 2 답 생성 ]
  i = 0;  
  j = 1;
  while(i < answer.length){
    // j가 6면 1로 초기화
    if(j === 6){
      j = 1;
    }

    // 홀수 인덱스에 2를 넣기
    if(i % 2 === 0){
      student_2[i] = 2;
    }else{
      // j가 2면 3으로 초기화
      if(j === 2){
        j = 3;
      }
      student_2[i] = j;
      j++;
    }   
    i++;
  }

  // [ 수포자 3 답 생성 ]
  i = 0;  
  j = 0;
  while(i < answer.length){
    // j가 6면 1로 초기화
    if(j === 5){
      j = 0;
    }
    const arr = [3, 1, 2, 4, 5];

    student_3[i] = arr[j];
    if (i + 1 < answer.length) {
      student_3[i + 1] = arr[j];
    }

    i += 2;  
    j++;
  }

  // [ 정답 비교 ]
  function match (stu, answer){
    let result = [];
    for(let i = 0; i < answer.length; i++){
      if(stu[i] === answer[i]){
        result.push(stu[i]);
      }
    }
    return result;
  }
  
  // [ 최대 점수 가진 학생들 찾기 ]
  function findTopScorers(student_1, student_2, student_3, answer){
    // 각 학생의 점수 계산
    let stu1 = match(student_1, answer).length;
    let stu2 = match(student_2, answer).length;
    let stu3 = match(student_3, answer).length;

    // 점수와 학생 번호를 배열로 저장
    const scores = [
      { student: 1, score: stu1 },
      { student: 2, score: stu2 },
      { student: 3, score: stu3 },
    ];

    // 최대 점수 찾기
    const maxScore = Math.max(stu1, stu2, stu3);

    // 최대 점수를 가진 학생들 찾기
    const topScorers = scores
      .filter(({ score }) => score === maxScore)
      .map(({ student }) => student)
      .sort((a, b) => a - b);

    return topScorers;
  }

  const result = findTopScorers(student_1, student_2, student_3, answer);

  return result;

}



const answer = [[1,3,2,4,2]];
console.log(solution(answer));
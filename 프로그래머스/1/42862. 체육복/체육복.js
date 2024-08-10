function solution(n, lost, reserve) {
  // 중복 제거
  const newReserve = reserve.filter(res => !lost.includes(res)).sort((a, b) => a - b);
  const newLost = lost.filter(los => !reserve.includes(los)).sort((a, b) => a - b);

  newReserve.forEach(res => {
    const front = newLost.indexOf(res - 1);
    const back = newLost.indexOf(res + 1);

    // 앞 번호 학생에게 먼저 빌려줌
    if (front !== -1) {
      newLost.splice(front, 1);
    } else if (back !== -1) {
      newLost.splice(back, 1);
    }
  });

  return n - newLost.length;
}

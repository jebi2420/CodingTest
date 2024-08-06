function solution(sizes) {
  let w = [];
  let h = [];
  let maxW = 0;
  let maxH = 0;

  // 요소를 비교해서 큰 값이 가로, 작은 값이 세로
  sizes.forEach(size => {
    size.sort((a, b) => b - a);
    w.push(size[0]);
    h.push(size[1]);
  })

  const maxNum = (w, h) => {
    maxW = Math.max(...w);
    maxH = Math.max(...h);

    return maxW * maxH;
  }

  return maxNum(w,h);
}

const sizes = [[60, 50], [30, 70], [60, 30], [80, 40]]
console.log(solution(sizes));
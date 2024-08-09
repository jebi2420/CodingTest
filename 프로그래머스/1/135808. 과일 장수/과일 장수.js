function solution(k, m, score) {
    // score 내림차순 정렬
    score.sort((a, b) => b - a);

    // 최대 이익을 계산하는 변수
    let maxProfit = 0;

    // 최대 이익 계산
    for (let i = 0; i <= score.length - m; i += m) {
        // m개의 사과로 상자 만들기
        const box = score.slice(i, i + m);
        const minScore = box[m - 1]; // 상자의 최저 점수
        maxProfit += minScore * m;   // 상자 가격 추가
    }

    return maxProfit;
}

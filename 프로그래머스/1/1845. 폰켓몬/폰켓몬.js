function solution(nums) {
    const ableNum = nums.length / 2; // 가져갈 수 있는 폰켓몬 수
    const uniqueTypes = new Set(nums); // 중복 제거를 위해 set 사용

    // 최대한 다양한 종류의 폰켓몬을 선택하려면, ableNum과 uniqueTypes.size 중 작은 값을 선택
    return Math.min(ableNum, uniqueTypes.size);
}

const nums = [3, 3, 3, 2, 2, 2];
console.log(solution(nums));

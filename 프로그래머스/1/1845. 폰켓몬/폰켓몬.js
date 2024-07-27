function solution(nums) {
    let ableNum = nums.length/2; // 가져갈 수 있는 폰켓몬 수
    let set = new Set(nums); // 중복 제거를 위해 set 사용
    
    if(ableNum < set.size){
        return ableNum;
    }
    return set.size;
}

let nums = [3,3,3,2,2,2];
console.log(solution(nums));
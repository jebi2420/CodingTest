function solution(arr) {
    let answer = 0;
    let i = 0;
    
    for(let i = 0; i < arr.length; i++){
        answer += arr[i]
    }
    
    return answer /= arr.length;
}

let arr = [1,2,3,4];
console.log(solution(arr));
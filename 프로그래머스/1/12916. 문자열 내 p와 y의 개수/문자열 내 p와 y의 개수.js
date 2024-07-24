function solution(s){
    let answer = false
    let lowerString = s.toLowerCase();
    let countP = 0;
    let countY = 0;
    
    for(let i = 0; i < lowerString.length; i++){
        if (lowerString[i] === 'p'){
            countP++;
        } else if (lowerString[i] === 'y'){
            countY++;
        }
    }
    
    if(countP === countY){
        answer = true;
    }
    
    return answer;
}

let s = "pPoooyY";
console.log(solution(s));
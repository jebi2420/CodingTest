function solution(s) {
    let stack = [];

    for (let char of s) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                return false; // 짝이 맞지 않는 닫는 괄호가 있을 경우
            }
            stack.pop(); // 짝이 맞는 괄호를 제거
        }
    }

    return stack.length === 0; // 모든 괄호가 짝이 맞으면 스택이 비어 있어야 함
}

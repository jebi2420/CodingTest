function solution(priorities, location) {
    let queue = priorities.map((priority, index) => ({ priority, index }));
    let executedOrder = 0;

    while (queue.length > 0) {
        // 큐에서 첫 번째 프로세스를 꺼냅니다.
        let current = queue.shift();

        // 현재 프로세스보다 우선순위가 높은 프로세스가 있는지 확인합니다.
        if (queue.some(process => process.priority > current.priority)) {
            // 우선순위가 높은 프로세스가 있다면 현재 프로세스를 다시 큐의 뒤에 넣습니다.
            queue.push(current);
        } else {
            // 그렇지 않다면 현재 프로세스를 실행합니다.
            executedOrder += 1;
            if (current.index === location) {
                // 현재 프로세스가 우리가 찾고 있는 프로세스라면 실행 순서를 반환합니다.
                return executedOrder;
            }
        }
    }
}

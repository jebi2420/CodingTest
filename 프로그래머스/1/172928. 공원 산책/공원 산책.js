function solution(park, routes) {
    // 공원의 크기 설정
    const height = park.length;
    const width = park[0].length;
    
    // 초기 시작 위치 찾기
    let startX = 0, startY = 0;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (park[i][j] === 'S') {
                startX = i;
                startY = j;
                break;
            }
        }
    }

    // 이동 방향에 따른 좌표 변화량
    const direction = {
        N: [-1, 0],
        S: [1, 0],
        W: [0, -1],
        E: [0, 1]
    };

    // 명령 수행
    let x = startX, y = startY;
    for (let route of routes) {
        let [dir, n] = route.split(" ");
        n = parseInt(n);

        let newX = x, newY = y;
        let isBlocked = false;

        for (let i = 1; i <= n; i++) {
            let nextX = x + direction[dir][0] * i;
            let nextY = y + direction[dir][1] * i;

            // 공원을 벗어나는 경우 체크
            if (nextX < 0 || nextX >= height || nextY < 0 || nextY >= width) {
                isBlocked = true;
                break;
            }

            // 장애물을 만나는 경우 체크
            if (park[nextX][nextY] === 'X') {
                isBlocked = true;
                break;
            }

            newX = nextX;
            newY = nextY;
        }

        // 장애물이나 경계에 막히지 않은 경우 위치 업데이트
        if (!isBlocked) {
            x = newX;
            y = newY;
        }
    }

    return [x, y];
}

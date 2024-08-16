function solution(wallpaper) {
    // 최소값을 최대로, 최대값을 최소로 초기화하여 탐색
    let lux = wallpaper.length;
    let luy = wallpaper[0].length;
    let rdx = 0;
    let rdy = 0;

    // 벽지 전체를 순회하며 파일이 있는 위치를 찾는다.
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if (wallpaper[i][j] === '#') {
                // 파일의 최소, 최대 좌표 갱신
                lux = Math.min(lux, i);
                luy = Math.min(luy, j);
                rdx = Math.max(rdx, i + 1); // 드래그 끝점이므로 +1
                rdy = Math.max(rdy, j + 1); // 드래그 끝점이므로 +1
            }
        }
    }

    return [lux, luy, rdx, rdy];
}

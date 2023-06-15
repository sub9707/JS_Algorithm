function solution(s) {
    // 배열 초기화 [변환횟수, 제거한 0의 개수]
    let answer = [0,0];
    
    // s 문자열 전체 탐색
    while(s.length > 1) {
        // 횟수 추가
        answer[0]++;
        // 제거된 0의 개수 추가
        answer[1] += (s.match(/0/g)||[]).length;
        s = s.replace(/0/g, '').length.toString(2);
    }
    return answer;
}

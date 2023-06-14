function solution(s){
    let cnt = 0;
    
    for(let i = 0 ; i< s.length; i++){
        // '('일 때만 cnt에 기록한다. 
        cnt += s[i] === '(' ? 1 : -1;
        if(cnt < 0) return false;
    }
    // cnt가 0이면 제대로 짝을 맞춘 것
    return cnt === 0 ? true : false;
}

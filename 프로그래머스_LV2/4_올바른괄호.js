// 효율성 체크에서 걸려 시간초과됨
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

// 새로운 풀이 방식
function solution(s){
    let stack = [];
    
    for(let i = 0; i < s.length; i++){
        // stack 배열에 여는 괄호가 있고, 주어진 배열에 해당 순서 요소가 ')'면 stack에서 여는 괄호를 제거함.
        if(stack[stack.legnth - 1] === '(' && s[i] === ')'){
            stack.pop();
        }else{
            // 그렇지 않으면 stack 배열에 해당 순서의 요소 괄호를 넣음
            stack.push(s[i])
        }
    }
    
    return !stack.length;
}

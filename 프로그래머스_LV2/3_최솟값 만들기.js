function solution(A,B){
  // A와 B를 각각 반대로 정렬함
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    // reduce로 같은 index 값끼리 곱하고 누적함
    answer = A.reduce((acc, n, index) => {return acc += n * B[index]}, 0);
    
    return answer;
}

function solution(s) {
    // console.log(s.split(' '))
    const arr = s.split(' ');
    return Math.min(...arr) + ' ' + Math.max(...arr);
}

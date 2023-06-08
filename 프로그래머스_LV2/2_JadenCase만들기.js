// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 
// 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다.

function solution(s) {
  // 입력 문자열을 소문자로 바꾼 뒤, 공백 기준으로 나눔
    let arr = s.toLowerCase().split(' ');
  // 나눈 문자열의 첫글자는 대문자로, 맨앞글자를 제외한 나머지 글자를 붙여주고 하나의 문자열로 다시 바꿈
    return arr.map(el => el.charAt(0).toUpperCase() + el.substring(1)).join(" ");
}

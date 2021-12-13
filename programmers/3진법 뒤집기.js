// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// n은 1 이상 100,000,000 이하인 자연수입니다.

// 선생님 풀이
function solution(n) {
    // 10진법 데이터를 3진법으로 변환
    n = n.toString( 3 );
    
    let reverse = "";
    for(let i= n.length -1; i>= 0; i-- ){
        reverse += n[i];
    }

    // 3진법을 10진법으로 변환
    return parseInt(reverse, 3)
}

// 메서드풀이
function solution(n) {
    n = n.toString(3)
         .split("")
         .reverse()
         .join("")
         
    return parseInt( n, 3)
}

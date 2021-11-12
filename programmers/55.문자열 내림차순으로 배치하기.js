function solution(s) {
    return s.split('').sort().reverse().join('');
   
}

//split으로 쪼개고 배열하고 뒤집고 합침

//선생님 풀이
// sort -> 배열에서만 쓸 수 있음, 정렬해주는 기능(디폴트로 오름차순해줌)
// -숫자-
[1, 4, 3, 2].sort()
[1, 2, 3, 4]
[1, 4, 14, 3, 2].sort()
[1, 14, 2, 3, 4]
[1, 4, 14, 3, 2].sort( (a, b) => {
console.log( a, b )
})
4 1
14 4
3 14
2 3
[1, 4, 14, 3, 2].sort((a, b) => {
    returtn a-b
})
["a", "c", "z", "f"].sort(
    ["Z", "a", "c", "f"]
)
["a", "C", "z", "f"].sort((a, b) => {
   console.log(a, b)
})
c a
Z c
f Z
["a", "c", "Z", "f"]

function solution(s) {
     const answer = [];
     for ( let i = 0; i<s.length; i++){
         answer.push(s[i])  
     }
     answer.sort((a, b) => {
         return a > b ? -1 : 1
     })
     return answer.join("");
 }
 

-메서드
function solution(s) {
    const answer = s.split("")
                    .sort((a,b) => {
                        return a > b ? -1 : 1
                    }).join("")
    return answer;
                }
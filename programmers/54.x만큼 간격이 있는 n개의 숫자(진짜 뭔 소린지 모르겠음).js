//선생님 풀이
//숫자방식
function solution(x, n) {
    const answer = [];
    

    for( let i = 1; i <= n; i++ ) {
        answer.push( i * x)
    }
    return answer; 
}

//메서드방식

function solution(x, n) {
    const answer = new Array(n)
                        .fill(1)
                        .map( (num, i) => {
                            return ( num + i ) * x//console.log(num, i)
                        })
    return answer //console.log(answer)
}
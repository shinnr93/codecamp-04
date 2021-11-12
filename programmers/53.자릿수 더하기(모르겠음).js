function solution(n)
{
    var sum = 0;

    do {
        sum+= n % 10;
        n = Math.floor(n/10);
    } while ( n > 0);
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript');

    return sum;
}


//선생님 풀이
//for문
function solution(n) {
    n = String(n);
    //숫자 타입의 n을 문자열 타입으로 변환
    var answer = 0;

    for ( let i = 0; i< n.length; i++) {
        answer += n[i]; // => answer += Number(n[i])
                        // 문자열 타입의 n 값을 숫자 타입으로 변환
    }
    return answer;
}

//메서드
function solution(n) {
    let answer = 0;

    String(n)
        .split("")
        .forEach( num => {
            answer += Number(num);
        })
        console.log(answer)
        return answer
}



//reduce은 아직 사용하기 어려워
//아직은 forEach로 풀어보기


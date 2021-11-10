// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.


function solution(n) {
    let answer = 0;
    for (let i = 0; i <= n; i++) {
        if( n % i === 0) { answer += i}
    }
    return answer
}


//선생님 풀이
function solution(n) {
    let answer = 0;
    for ( let i = 1; i <= n; i++ ) {
        console.log(i) // 1~12 사이의 모든 숫자 가져올 수 있음
        if ( n % i === 0 ) {
            console.log(i) // n의 값과 i의 값 찍어봤을때 안나누어 떨어지는 숫자들도 있음
            //n을 i로 나눴을 때 나머지 값이 0이라면 약수로 판단
            answer += i
        }
    }
    return answer;
}

//메서드를 이용한 다른 풀이
function solution(n) {
    let answer = 0;

    console.log( new Array(n)
                    .fill(1)
                    .forEach )((num, i) => {
                        // console.log(num + i)
                        if ( n % ( num + i ) === 0 ) {
                            answer += ( num + i)
                        }
                    })
                        //Array: 빈 값이 들어간 배열을 만들어줌
                        //Array(2) 하면 빈칸 2개의 배열  
                        //Array(2).length 하면 2 뜸. 언디파인드 데이터로 값은 없음
                        //fill(1): 배열의 전체 데이터를 다 1로 채워줌
                        //forEach vs map 의 차이 정확히 알아야 함
                        //map 은 데이터를 받아와서 새로운 값을 변환
                        //forEach 은 무조건 언디파인드한 값이 뜸(map이나 filter은 뭘 필터하고 추가하는
                        //그런 기능은 없고 단순히 반복문으로만 사용됨)
                        
                        // console.log(answer)
                        return answer;
}
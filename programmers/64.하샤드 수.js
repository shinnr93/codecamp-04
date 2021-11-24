// 문제 설명
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 1 이상, 10000 이하인 정수입니다.

//선생님 풀이 

function solution(x) {
    //자릿수의 합의 총 값을 저장하는 변수
    let sum = 0;

    //숫자 타입의 x값을 문자열 타입으로 변환
    x = String(x);
    
    for( let i = 0; i < x.length; i++ ) {
        sum += Number(x[i]);
    }

    //조건식을 리턴 : 나머지 값이 없다면 return, 있다면 false
    return x % sum === 0;
}


//forEach

function solution(x) {
    //자릿수의 합의 총 값을 저장하는 변수
    let sum = 0;
                //string(x) 동일하게 작동
    const temp = x.toString()
                  .split("")
                  .forEach( num => {
                      sum += Number(num);
                  })
    return x % sum === 0;
}

//메서드
function solution(x) {
    // 자릿수의 합의 값을 저장하는 변수
    const sum = x.toString()
                 .split("")
                 .reduce( ( a, b ) => {
                    return Number(a) + Numberb(b);
                 }, 0)
                 re
}
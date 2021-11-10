// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.

function solution(s) {
    return (s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s);
}

//선생님 풀이
function solution(s) {
    //예외처리 먼저 처리
    if( s.length !== 4 && s.length !== 6 ) {
        return false
        //항상 예외처리는 맨 위에서!!
    }

    let answer = true;
    for ( let i = 0; i < s.length; i++) {
        if ( isNaN( s[i] === true ))
        //Number 타입으로 문자열인 경우 true값을 반환
        //  : 숫자가 아니다!
        //Nan : 숫자데이터인지 문자데이터인지 확인해줌 - 문자면 true, 숫자면 false 도출,만약 문자열타입의
        //숫자가 들어와도 false ex."34221"  -> false,
        //ex. Number("a")->Nan(숫자로 변환 못함)
        answer = false;
        break;
        //반복문을 강제로 종료시킴. 반복을 더 진행시키지 않고 종료시킨다.
    }


    return answer;
}

    //필터로 푸는 방법
    function solution(s) {
        if( s.length !== 4 && s.length !== 6 ) {
            return false
        }

        const answer = s.split("")
                        .filter( num => {
                            return isNaN( num => {
                            // true인 것만 남김: 데이터가 숫자가 아닌 문자인 타입만 남기겠다
                            // Nan 값인 데이터만 남긴다.
                                return isNaN(num)
                            })
                        })
        return answer.length === 0
    }
// 문제 설명
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.


//선생님 풀이
function solution(numbers) {
    const answer = [];

    for( let i=0; i < numbers.length; i++ ) {
        for ( let l = i + 1; l < numbers.length; l++ ) {
            const sum = numbers[i] + numbers[l];

            if( answer.includes(sum) === false ) {
                answer.push(sum);
            }
        }
    }

    return answer.sort( (a, b) => a - b);
}


//set 중복되는 데이터 제거할땐 유용하지만 아직 실무에선 많이 안쓰여
//다른 풀이
function solution(numbers) {
    let answer = new Set([]);
    
    for( let i = 0; i < numbers.length; i++) {
        for( let l = i + 1; l < numbers.length; l++) {
            const sum = numbers[i] + numbers[l];

            answer.add(sum);
        }
    }

    answer = Array.from( answer );
    return answer.sort( (a, b) => a - b);

}



//메서드풀이

function solution(numbers) {
    const answer = [];

    numbers.forEach( (num1, i) => {
        numbers.slice( i + 1, numbers.length ).forEach( num2 => {
            const sum = num1 + num2;

            if( answer.includes(sum) === false ) {
                answer.push(sum);
            }
        })
    })

    return answer.sort( (a, b) => a - b)
}
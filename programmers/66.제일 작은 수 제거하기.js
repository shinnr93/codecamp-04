// 문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

function solution(arr) {
    const answer = [];

    // 배열 안에서 제일 작은 값을 저장
    const min = Math.min(...arr);
    // let min = arr[0];

    // for( let i = 1; i < arr.length; i++) {
    //     if(arr[i] < min ){
    //         min = arr[i]
    //     }
    // }

    for( let i = 0; i < arr.length; i++) {
        if(arr[i] !== min) {
            answer.push(arr[i])
        }
    }

    return answer.length === 0 ? [-1] : answer;
}

// 제일 작은 값을 저장하는 로직 줄여보기
// 메서드 중에 Math.min이라는게 있음 들어오는 인자중에 젤 작은 숫자 찾아옴
// Math.min(6, 4, 3, 2, 1)
// 1 내보냄
// ex. a = [1, 2, 3, 4, 5]
// 여기서 젤 작은 인자 뽑고 싶으면 스프레드 쓰면 됨
// Math.min(...a) 하면 젤 작은 수 뽑힘



//메서드 풀이
function solution(arr) {
    const min = Math.min(...arr);

    const answer = arr.filter( num => {
        return num !== min
    })

    return answer.length === 0
    ? [-1]
    : answer
}
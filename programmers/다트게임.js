// 카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다. 다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.
// 갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다. 다트 게임의 점수 계산 로직은 아래와 같다.

// 다트 게임은 총 3번의 기회로 구성된다.
// 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
// 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
// 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
// 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
// Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
// 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
// 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.

// 입력 형식
// "점수|보너스|[옵션]"으로 이루어진 문자열 3세트.
// 예) 1S2D*3T

// 점수는 0에서 10 사이의 정수이다.
// 보너스는 S, D, T 중 하나이다.
// 옵선은 *이나 # 중 하나이며, 없을 수도 있다.
// 출력 형식
// 3번의 기회에서 얻은 점수 합계에 해당하는 정수값을 출력한다.
// 예) 37

// 선생님 풀이
const bonus = ["S", "D", "T"]; // 보너스를 판단하기 위해서 배열에 저장

function solution(dartResult) {
  // 3차례 게임의 점수들을 각각 저장
  const answer = [];

  let score = ""; // 점수를 뽑아서 저장
  for (let i = 0; i < dartResult.length; i++) {
    // 숫자 타입의 데이터인지를 검증하고, 숫자가 맞다면 false 를 리턴한다.
    if (Number.isNaN(Number(dartResult[i])) === false) {
      score += dartResult[i];
    } else if (bonus.includes(dartResult[i])) {
      score = Number(score);
      if (dartResult[i] === "D") {
        score = Math.pow(score, 2); // 2제곱
      } else if (dartResult[i] === "T") {
        score = Math.pow(score, 3); // 3제곱
      }
      // 보너스를 연산한 시점에서 점수를 배열에 저장
      answer.push(score);
      // 다음 게임을 위해 점수를 초기화
      score = "";
    } else {
      if (dartResult[i] === "#") {
        // 아차상이라면 해당 점수 (배열의 마지막 데이터) 에 -1 을 곱함
        answer[answer.length - 1] *= -1;
      } else {
        // 스타상이라면 해당 점수 x2
        answer[answer.length - 1] *= 2;

        if (answer.length > 1) {
          // 처음이 아니라, 2번째부터라면
          answer[answer.length - 2] *= 2;
        }
      }
    }
  }

  let result = 0;
  for (let i = 0; i < answer.length; i++) {
    result += answer[i];
  }
  return result;
}

// 메서드 풀이
const bonus = ["S", "D", "T"]; // 보너스를 판단하기 위해서 배열에 저장

function solution(dartResult) {
  // 3차례 게임의 점수들을 각각 저장
  const answer = [];

  let score = "";
  dartResult.split("").forEach((el) => {
    if (!Number.isNaN(Number(el))) {
      score += el;
    } else if (bonus.includes(el)) {
      if (el === "D") {
        // 숫자 타입으로 변환하지 않아도 자동으로 숫자 타입으로 변환
        score = Math.pow(score, 2);
      } else if (el === "T") {
        score = Math.pow(score, 3);
      }
      answer.push(Number(score));
      score = "";
    } else {
      if (el === "#") {
        // 아차상
        answer[answer.length - 1] *= -1;
      } else {
        // 스타상
        answer[answer.length - 1] *= 2;

        if (answer.length >= 2) {
          answer[answer.length - 2] *= 2;
        }
      }
    }
  });
  return answer.reduce((acc, cur) => acc + cur);
}

export default function TypescriptPage(){

    //문자타입 - 타입추론
    let aaa = "안녕하세요"
    aaa = 3

    //문자타입
    let bbb: string;
    bbb = "반갑습니다"
    bbb = 123



    //숫자타입
    let ccc: any = 5 // =을 기준으로 왼쪽은 이름, 오른쪽은 타입, 구분하는건 :
    ccc = "fewf"

    // let ddd: [1, 2, 3, 4, 5, 6 ]


    //배열타입
    //명시하고 싶으면 
    let ddd : number[] = [1, 2, 3, 4, 5, 6 ]
    // ddd = ["fefwf", "ff32f", "2gg"] //숫자배열이라 문자열 들어가면 안돼

    let eee: string[] = ["a", "b", "c", "d"]
    let fff: number[] | string[] = [1,2,3,4,5] // ->유니온 타입(합집합 같은 느낌)
    fff = ["a", "b", "c"]
    let ggg: (number | string)[] = [1, "v", 2, "c"]//넘버 또는 스트링이 들어갈 수 있는 배열


    //객체타입
    interface IProfile {
        name: string
        age: number | string
        school: string
    }


    let profile: IProfile = {
        name: "철수",
        age: 8,
        school: "다람쥐초등학교" 
    }

        profile.age = "8살"
        profile.school = 3



    return <div>타입스크립트 연습</div>
}
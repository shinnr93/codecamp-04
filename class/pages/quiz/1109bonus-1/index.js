const classmates = [
    { name: "철수", age: 10, school: "토끼초등학교"},
    { name: "영희", age: 13, school: "다람쥐초등학교"},
    { name: "훈이", age: 11, school: "토끼초등학교"}
]

export default function FilterMapPage(){
   

    return(
        <div>
            
           {classmates.filter((el) => <div>({el.school === "토끼초등학교"})</div>)}
           {/* map((el) => ({name: el.name, age: el.age, school: el.school, candy: "10개"}))} */}
            {/* {FRUITS.map((el) => <div>{el.number} {el.title}</div>)} */}
        </div>
    )
}
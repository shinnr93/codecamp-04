//해당 목록에서 "의류"를 구매한 횟수와 총 금액을 나타내고, 
//"의류"를 구매한 횟수에 따라 등급을 나타내세요.
//등급표
//"0~2회 이상"  ⇒ Bronze
//"3~4회 이상" ⇒ Silver
//"5회"이상 ⇒ Gold

const myShopping = [
    { category: "과일", price: 12000　},
    { category: "의류", price:10000　 },
    { category: "의류", price: 20000　},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000　 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000　　},
    { category: "의류", price: 7000　　},
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000　 },
]


let count = 0;
let money = 0;
let tier = "";
for (let i = 0; i < myShopping.length; i++) {
	if (myShopping[i].category === "의류") {
		count++;
		money = money + myShopping[i].price;
	}
}

if (count >= 5) {
	tier = "Gold";
} else if (count >= 3) {
	tier = "Silver";
} else if (count >= 0) {
	tier = "Bronze";
}

console.log("의류를 구매한 횟수는 총 " + count + "회 금액은 " + money + "원이며 등급은 " + tier+"입니다.")





//선생님
for( let i = 0; i < myShopping.length; i = i +1) {
    console.log(i, myShopping[i])
}
2 0 {category: '과일', price: 12000}
2 1 {category: '의류', price: 10000}
2 2 {category: '의류', price: 20000}
2 3 {category: '장난감', price: 9000}
2 4 {category: '과일', price: 5000}
2 5 {category: '의류', price: 10000}
2 6 {category: '과일', price: 8000}
2 7 {category: '의류', price: 7000}
2 8 {category: '장난감', price: 5000}
2 9 {category: '의류', price: 10000}
undefined
for( let i = 0; i < myShopping.length; i = i +1) {
    console.log(i, myShopping[i].category)
}
2 0 '과일'
2 1 '의류'
2 2 '의류'
2 3 '장난감'
2 4 '과일'
2 5 '의류'
2 6 '과일'
2 7 '의류'
2 8 '장난감'
2 9 '의류'

let count = 0; // 구매한 총 갯수
let amount = 0; // 구매한 총 가격
let grade = "";

for( let i = 0; i < myShopping.length; i = i +1 ) {
    if ( myShopping[i].category === "의류") {
        count += 1; //count = count +1;
        amount += myShopping[i].price;

        if ( count >=0 && count <= 2) {
            grade = "Bronze"
        } else if (count >= 3 && count <= 4) {
            grade = "Silver"
        } else if ( count >= 5 ) {
            grade = "Gold"
        }
    }
}

console.log(`의류를 구매한 횟수는 총 ${count}회 금액은 ${amount}원이며 등급은 ${grade}입니다`)
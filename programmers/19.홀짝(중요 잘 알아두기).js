function evenOdd(num) {
	if (num === 0) {
		console.log("Zero"); //예외사항을 주어주면 예외를 먼저 처리해주는게 좋다
	} else if (num % 2 === 0) {
		console.log("Even");
	} else  {
		console.log("Odd");
	}
}

function makeNumber(num) {
	let str = "1";
	for (let i = 2; i <= num; i++) {
		str = str + "-" + i;
	}
	console.log(str);
}


//선생님
function makeNumber(num){
	let str = '';

	for( let i = 1; i <= num; i = i + 1) {
		str = str + i

		if(i !== num) {
			str = str + '-';
		}
	}
}

let str = '';
for( let i = 1; i<=num; i = i +1){
    str = str + i 

    console.log(i, num)
    if( i !== num ) {
        str = str + '-'
    }
    console.log(str)
}
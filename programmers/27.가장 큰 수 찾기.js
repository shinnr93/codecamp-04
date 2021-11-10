function bigNum(str) {
	let max = 0;
	for (let i = 0; i <= str.length; i++) {
		if (Number(str[i]) >= max) {
			max = Number(str[i])
		}
	}
	console.log(max)
	
}

//선생님
function bigNum(str){
let biggest = 0;

for(let i = 0; i < str.length; i = i + 1) {
    if( Number(str[i]) > biggest ) {
    biggest = Number(str[i])
    }
}

return String(biggest)
}
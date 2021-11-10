function sum(num) {
	let result = 0;
	for (let i = 0; i <= num; i ++) {
		result = result + i
	}
	console.log(result)
}

//알고리즘 선생님 풀이
let num = 5;

for ( let i = 1; i <= num; i= i + 1 ) {
    console.log(i)
}

VM91:2 1
VM91:2 2
VM91:2 3
VM91:2 4
VM91:2 5

let count = 0;
for ( i = 1; i<=5; i= i+1) {
count = count + i;
console.log(count, i)
}
VM373:4 1 1
VM373:4 3 2
VM373:4 6 3
VM373:4 10 4
VM373:4 15 5

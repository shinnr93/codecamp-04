function countLetter(str) {
  let count = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      count++;
    }
  }
  console.log(count);
}

//선생님
function countLetter(str) {
  let count = 0;
  str = str.toLowrCase();
  for (let i = 0; i < str.length; i = i + 1) {
    if (str[i] === "a" || str[i] === "A") {
      count = count + 1;
    }
    console.log(str[i], count);
  }
}

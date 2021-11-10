//알고리즘 수업
input1=true
true
input2=true
true
if(input1 === true || input2 === true) {
    console.log(true)
}
true

input1=false
false
if(input1 === true || input2 === true) {
    console.log(true)
}
true

input2=false
false
if(input1 === true || input2 === true) {
    console.log(true)
}

if(input1 === false && input2 === false) {
    console.log(false)
}
false

function boolean(input1, input2) {
    if(input1===false &&input2===false) {
            return false;
        } else if(
            input1 === true || input2 === true) {
                return true;
            }
}

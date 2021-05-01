// Only dual condition, you can use if-else 
var a = 2;
var b = 4;

if( a > b) {
    console.log( a + 'is greater than' + b)
} else {
    console.log( b + ' is greater than ' + a)
}

// For more than multiple condition, you can use else-if
var number = 0;

if(number == 0){
    console.log(number + ' is zero');
}else if (number % 2 == 0){
    console.log(number + 'is even number')
}else{
    console.log(number + 'is odd number')
}
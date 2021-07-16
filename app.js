// var firstName = prompt('enter your first name')
// var lastName = prompt('enter your last name')
// console.log(firstName +' '+lastName)

// var cellphone = prompt('enter name of your fav cellphone')
// document.write('name of cellphone: ' + cellphone + "<br>" +'the length of string is: ' +cellphone.length)

// var word = "pakistani"
// console.log('word: '+ word + 'index of n is: ' + word.indexOf('n'))

// var string = 'hello world'
// console.log('string: ' + string + '<br>' + 'last index of l is: '+ string.lastIndexOf('l'))

// var string = 'pakistani'
// console.log('string: '+ string + 'character at index 3: ' +string.charAt(3))

// var firstName = prompt('enter your first name')
// var lastName = prompt('enter your last name')
// console.log(firstName.concat(" ",lastName))

// var city = 'hyderabad'
// console.log('city: '+ city + 'After replacement: '+city.replace('hyder','islam') )

// var message = "Ali and Sami are best friends. They play cricket and football together"
// console.log(message.replaceAll('and', '&'))

// var value = '472'
// console.log(typeof(+'value'))

// var word = 'peanut'
// console.log(word.toUpperCase())

// var word = prompt('enter any word')
// console.log(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())


















// chapter 35 to 38

// function myFunction(){
//     var date = new Date()
//     console.log(date)
// }

// myFunction()


// function myFunction(){
//     var firstName = prompt('enter your first name')
// var lastName = prompt('enter your last name')
// console.log(firstName.concat(" ",lastName))
// }

// myFunction()

// function myFunction(num1,num2,operation){
//     var num1 = +prompt('enter 1st no')
//     var num2 = +prompt('enter 2nd no')
//     var sum = num1 + num2   
//     console.log(sum)
//     return sum
// }

// myFunction()

// function calculator(num1,num2,operation){
//     var num1 = +prompt('enter 1st no')
//     var num2 = +prompt('enter 2nd no')
//     var operation = +prompt('enter operation to be performed')
//     var result = eval('num1' + 'operation' +'num2')
//     console.log(result)
//     return result
// }

// calculator('num1','num2','operation')

// function square(a){
//     var a = prompt('enter no ')
//     var c= a*a
//     console.log(c)
//     return c

// }
// square('a')

// function checkPalindrome(str) {

//     const len = string.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }
// const string = prompt('Enter a string: ');


// const value = checkPalindrome(string);

// console.log(value);

// function uppercase(str)
// {
//     var str = prompt()
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("str"));

// function power(base, exponent) {
//     var base = prompt('enter number')
//     var exponent = prompt('enter power')
// 	var result = 1;
// 	if(exponent == undefined)
// 		exponent = 2;
// 	for(var i=1; i<=exponent; i++) {
// 		result = result * base;
// 	}
// 	return result;
// }

// console.log(power('base','exponent'))

// function checkLeapYear(year) {
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }
// const year = prompt('Enter a year:');

// checkLeapYear(year);

// function area(a,b,c){
//     function findS(){
//         var a= +prompt('enter 1st side')
//         var b = +prompt('enter 2nd side')
//         var c = +prompt('enter 3rd side')
//         var S = (a+b+c)/2
//         return S
//     }

//     var Area = Math.sqrt(S*(S-a)*(S-b)*(S-c))
//     return Area
// }
// console.log(area('a','b','c'))

// var num = prompt('enter a positive integer')
// console.log('number: ' + num)
// console.log('round off no: ' + Math.round(num))
// console.log('floor value: ' + Math.floor(num))
// console.log('ceil value: ' + Math.ceil(num))


// var num = prompt('enter a negative integer')
// console.log('number: ' + num)
// console.log('round off no: ' + Math.round(num))
// console.log('floor value: ' + Math.floor(num))
// console.log('ceil value: ' + Math.ceil(num))

// var a = prompt('enter number')
// console.log('absolute value: ' + Math.abs(a))

// var randomNum = Math.random()
// console.log(randomNum)
// console.log(randomNum.toString().slice(1,6))
// console.log(Math.ceil(randomNum * 6))

// var head = 2;
// var tail = 1;

// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     document.write("1 <br> Random Coin Value: tails")
// } else if(floor === 1)
// {
//     document.write("2 <br> Random Coin Value: head")
// }

// var randomnum = Math.random() *100
// randomnum.toString().slice(1,100)
// console.log(Math.floor(randomnum))

// var randomNum = Math.ceil(Math.random() *10)
// var num = prompt('enter a number between 1 to 10')
// var secnum = 5
// if(num == secnum){
//     alert('congratulations')
// }
// else{
//     alert('better luck next time')
// }

// var date = new Date()
// console.log(date)
// var month =['january','feburary','march','april','may','june','july','august','september','october','november','december']
// alert('current month: ' + month[date.getMonth()])
// var day = ['sun','mon','tues','wed','thurs','fri','sat']
//alert(day[date.getDay()])
// var a = date.getDay()
// if(a==0 || a==6){
//     alert('its fun day')
// }
// else{
//     alert('its not fun day')
// }


// console.log('elapsed milisec since jan 1,1970: '+ date.getTime())
// console.log('elapsed minutes since jan 1,1970: '+ date.getMinutes())

// var a = new Date();
// var b = a.toString();
// var c = b.slice(16,19);
// if (c === "12:"){
//     document.write("It's PM")
// }else if(c === "13:"){
//     document.write("It's PM")
// }else if(c === "14:"){
//     document.write("It's PM")
// }else if(c === "15:"){
//     document.write("It's PM")
// }else if(c === "16:"){
//     document.write("It's PM")
// }else if(c === "17:"){
//     document.write("It's PM")
// }else if(c === "18:"){
//     document.write("It's PM")
// }else if(c === "19:"){
//     document.write("It's PM")
// }else if(c === "20:"){
//     document.write("It's PM")
// }else if(c === "21:"){
//     document.write("It's PM")
// }else if(c === "22:"){
//     document.write("It's PM")
// }else if(c === "23:"){
//     document.write("It's PM")
// }else if(c === "24:"){
//     document.write("It's AM")
// }else if(c === "01:"){
//     document.write("It's AM")
// }else if(c === "02:"){
//     document.write("It's AM")
// }else if(c === "03:"){
//     document.write("It's AM")
// }else if(c === "04:"){
//     document.write("It's AM")
// }else if(c === "05:"){
//     document.write("It's AM")
// }else if(c === "06:"){
//     document.write("It's AM")
// }else if(c === "07:"){
//     document.write("It's AM")
// }else if(c === "08:"){
//     document.write("It's AM")
// }else if(c === "09:"){
//     document.write("It's AM")
// }else if(c === "10:"){
//     document.write("It's AM")
// }else if(c === "11:"){
//     document.write("It's AM")
// }

var heading = 'K-ELECTRIC BILL'
var customername = prompt('enter your name')
var month = prompt('enter current month')
var units = +prompt('enter your units')
var charges = 16
var netamount = units*charges
var late = 350
var GAP = netamount+late
console.log('Name: '+customername)
console.log('month: ' + month)
console.log('units: '+units.toFixed(2))
console.log('Net Amount Payable (within Due Date)'+netamount.toFixed(2))
console.log('Late Payment Surcharge: ' +late )
console.log('Gross Amount Payable (after Due Date)' + GAP.toFixed(2))






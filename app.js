//  JS Chp 26-42  by Qambar Ali


// Chp 26-30
// Math Methods



// Q1


// var num = +prompt("Enter a positive number:");
// if(num <= 0){
//     alert("Error! Enter Positive Number");
//     num = +prompt("Enter a positive number:");
// }
// document.write("Number : " + num +"<br>");
// document.write("Round off Value : " + Math.round(num) +"<br>");
// document.write("Floor Value : " + Math.floor(num) +"<br>");
// document.write("Ceil Value : " + Math.ceil(num) +"<br>");



// Q2


// var num = +prompt("Enter a negative number:");
// if(num >= 0){
//     alert("Error! Enter Negative Number");
//     num = +prompt("Enter a negative number:");
// }
// document.write("Number : " + num +"<br>");
// document.write("Round off Value : " + Math.round(num) +"<br>");
// document.write("Floor Value : " + Math.floor(num) +"<br>");
// document.write("Ceil Value : " + Math.ceil(num) +"<br>");



// Q3


// var num = +prompt("Enter a number:");
// var absValue = Math.abs(num);
// document.write("Absolute Value of " + num + " is " + absValue);



// Q4


// var num = Math.random();
// var dice = parseInt(num*6+1)
// document.write("Random Dice Value : " + dice);



// Q5



// var num = Math.random();
// var toss = parseInt(num*2+1)
// document.write(toss + "<br>");
// if(toss == 1){
//     document.write("Random Coin Value : Head");
// }
// else{
//     document.write("Random Coin Value : Tail");
// }



// Q6


// var num = Math.random();
// var ranNum = parseInt(num*100+1);
// document.write("Random Number between 1 and 100 : "+ranNum);



// Q7


// var weight = prompt("Enter your weight : ");
// alert("The weight of user is : " + weight);




// Q8


// var num = +prompt("Enter a number between 1 to 10");
// var ranNum = Math.random();
// var a = parseInt(ranNum*10+1);
// if(num == a){
//     alert("Congratulation !")
// }
// else{
//     alert("Try Again !")
// }







// Chp 30 - 34
// Date Methods


// Q1

// var currentDate = new Date();
// alert(currentDate);



// Q2


// var allMonths = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
// var currentDate = new Date();
// var month = currentDate.getMonth();
// alert("Current Month : " + allMonths[month]);



// Q3


// var allDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// alert("Day : " + allDays[currentDay]);



// Q4


// var allDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// if(currentDay == 0){
//     alert("It's Fun Day")
// }
// else if(currentDay == 6){
//     alert("It's Fun Day")
// }
// else{
//     alert("It's Working Day");
// }



// Q5


// var currentDate = new Date();
// var currentDay = currentDate.getDate();
// if(currentDay < 16){
//     alert("First fifteen Days of the Month");
// }
// else{
//     alert("Last Days of the Month");
// }



// Q6


// var currentDate = new Date();
// var Currentmins = currentDate.getMinutes();
// // alert(Currentmins);
// var msfrom1970 = currentDate.getTime();
// var minfrom1970 = msfrom1970/(1000*60);
// document.write("Current Date : " + currentDate + "<br>");
// document.write("Milliseconds Since Januray 1, 1970 : " + msfrom1970 + "<br>");
// document.write("Minutes Since Januray 1, 1970 : " + Math.floor(minfrom1970));



// Q7


// var currentDate = new Date();
// var getHours = currentDate.getHours();
// if(getHours <= 12){
//     alert("It's Before Noon");
// }
// else{
//     alert("It's After Noon");
// }



// Q8


// var lastDate = new Date("Dec 31 , 2020");
// document.write("Later Date : " + lastDate);



// Q9


// var RamzanStart = new Date("04/14/2021");
// var currentDate = new Date();
// var Difference_In_Time = currentDate.getTime() - RamzanStart.getTime();
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
// document.write(parseInt(Difference_In_Days) + " Days have been passed since 1st Ramzan , 2021");




// Q10


// var startDate = new Date("01/01/2021");
// var currentDate = new Date();
// var Difference_In_Time = currentDate.getTime() - startDate.getTime();
// var Difference_In_Days = Difference_In_Time / (1000 * 60);
// document.write(" On reference Date " + currentDate + "<br>" + parseInt(Difference_In_Days) + 
//                 " Seconds had passed since beginning of 2021");




// Q11


// var currentDate = new Date();
// document.write("Current Date : " + currentDate + "<br>");
// var hours = currentDate.getHours();
// var incHour = currentDate.setHours(hours-1)
// document.write("1 hour ago it was "+currentDate);



// Q12


// var currentDate = new Date();
// document.write("Current Date : " + new Date() + "<br>");
// var year = currentDate.getFullYear();
// var resetDate = currentDate.setFullYear(year-100);
// document.write("100 years back it was " + currentDate);



// Q13


// var age = +prompt("Enter Your Age : ");
// var currentDate = new Date();
// var currentYear = currentDate.getFullYear();
// var birthYear = currentYear - age;
// document.write("Your Age : " + age + "<br>");
// document.write("Your Birth Year is "+ birthYear);




// Q14


// var customerName = prompt("Enter Customer Name");
// var currentMonth = prompt("Enter Current Month");
// var noOfUnits = 400;
// var chargesPerUnit = 16;
// var netAmount = noOfUnits * chargesPerUnit;
// var latePaymentCharges = 300;
// var grossAmount = netAmount + latePaymentCharges;
// document.write("Customer Name : " + customerName + "<br>");
// document.write("Month : " + currentMonth +"<br>");
// document.write("Number of Units : " + noOfUnits + "<br>");
// document.write("Charges Per Unit : "+chargesPerUnit +"<br>");
// document.write("Net Amount Payable (Within due Date) : " + netAmount + "<br>");
// document.write("Late Payement Charges : " + latePaymentCharges + "<br>");
// document.write("Gross Amount (After Due Date) : " + grossAmount);







// Chp 35-38
// FUNCTIONS



// Q1


// function currentDate(){
//     var a = new Date();
//     document.write(a);
// }
// currentDate();



// Q2


// function greeting(){
//     var fname = prompt("Enter first name : ");
//     var lname = prompt("Enter last name : ");
//     alert("Hello ! " + fname + " " + lname);
// }
// greeting();



// Q3


// function add(){
//     var a = +prompt("Enter first number : ");
//     var b = +prompt("Enter second number : ");
//     var sum = a+b;
//     alert("Sum of "+ a + " and " + b + " is " + sum);
// }
// add();



// Q4


// function calculator (num1,num2,op){
//     if(op=="+"){
//         var sum = num1+num2;
//         alert("Sum : " +sum);;
//     }
//     else if(op=="-"){
//         var differnce = num1-num2;
//         alert("differnce : " +differnce);;
//     }
//     else if(op=="*"){
//         var product = num1*num2;
//         alert("product : " + product);;
//     }
//     else if(op=="/"){
//         var Ratio = num1/num2;
//         alert("Ratio : " +Ratio);;
//     }
// }
// calculator(5,4,"-");



// Q5


// function square(a){
//     alert("Square of " + a + " is " + a*a);
// }
// square(2);




// Q6


// function factorial(a){
//     for(var i = a-1 ; i >=1 ; i--){
//         a = a*i;
//     }
//     alert("Factorial : " + a);
// }
// factorial(6);



// Q7


// function counting(a,b){
//     for(i=a ; i <= b ; i++){
//         document.write(i + "<br>");
//     }
// }
// counting(2,10);




// Q8


// function hypotenuse (base,perp){
//     base = base*base;
//     perp = perp*perp;
//     var Hypotenuse = base + perp;
//     alert("Hypotenuse = " + Hypotenuse);
// }
// hypotenuse(2,3);



// Q9


// function area (width,height){
//     var Area = width * height;
//     alert("Area of Trainagle is " + Area +" square meter");
// }
// area(2,3);




// Q10


// function chkPalindrome(){
//     var a = prompt("Enter word to check : ")
//     for(var i = a.length-1 ; i >=0; i--){
//         var b =  a[i];
//     }
//     for(var j = 0 ; j < a.length; j++){
//         var c =  a[j];
//     }
//     if(b==c){
//         alert(a + " is a Palindrome")
//     }
//     else{
//         alert(a + " is not a Palindroime")
//     }
// }

// chkPalindrome();



// Q11


// function capFirLt(a){
//     var c = a.toLocaleUpperCase();
//     return c;
// }
// var f = capFirLt("hello world");
// alert(f);








// Q13


// function ocu_count(str1)
// {
//   var charToChk = prompt("Enter alphabet to check its occurance")
//   var ocCount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (charToChk.indexOf(str1[x]) !== -1)
//     {
//       ocCount += 1;
//     }
  
//   }
//   alert(charToChk + " occur "  +ocCount + " times in sentence. \n"  + str1)
// }
// ocu_count("web and mobile app development course")




// Q14


// function cirCircumference(r){
//     var circumference = 2*(21/7)*r;
//     alert("Circumference : " + circumference);
// }
// cirCircumference(7);


// function cirArea(r){
//     var area = (21/7)*(r*r);
//     alert("Area : " + area);
// } 
// cirArea(6)









// Chp 38-44
// FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOP



// Q1


// function power(a,b){
//     var ans = Math.pow(a,b);
//     alert(ans);
// }
// power(3,2);




// Q2


// function check_leapyear(){
//     var year = +prompt("Enter year to check")
//     if( (year % 4 == 0 ) && (year % 100 != 0 ) || (year % 400 == 0 ) )
//     {
//         alert(year+" is a leap year");  
//     }
//     else
//     {
//         alert(year+" is not a leap year");  
//     }
// }
// check_leapyear();




// Q3


// function area(a,b,c){
//     var s = (a+b+c)/2 ;
//     var tArea = s*(s-a)*(s-b)*(s-c);
//     alert("Area of traingle is : " + tArea +" square meter.");
// }
// area(5,4,3);




// Q4


// function avg(a,b,c){
//     var average = (a+b+c)/3;
//     alert("Average : " + average);
// }
// function perc(a,b,c){
//     // var total_marks = 300;
//     var percentage = ((a+b+c)/300)*100;
//     alert("Percentage : " + percentage);
// }

// function avgAndPerc(a,b,c){
//     avg(a,b,c);
//     perc(a,b,c);

// }

// avgAndPerc(70,80,90);




// Q5


// function findIndex() {
//     var a = prompt("Enter character to find index : ")
//     var text = "Hello world";
//     var t = true;
//     for (i = 0; i <= text.length; i++) {
//         if (text[i] == a) {
//             t = false;
//             alert("Index of " + a + " is " + [i]);
//         }
//     }
//     if (t == true) {
//         alert("Error! Character not found");
//     }
// }
// findIndex();





// Q6


// function dltVowels (){
//     var text = "Hello web developers"
//     var vowels = ["a","e","i","o","u"];
//     for(var i=0 ; i<=text.length ; i++){
//         for(j=0;j<=vowels.length;j++){
//             if(text[i]==vowels[j]){
//                 text = text.replace(text[i],"");

//             }
//         }
//     }
//     alert(text);
// }

// dltVowels();




// Q7


// function vowel_count(str1){
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowel_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// var a = vowel_count("Pleases read this application and give me gratuity");
// alert("No of vowels in this sentence is "+a);






// Q8


// function distInMeters(){
//     var distance = +prompt("Enter distance between cities in Kms");
//     var disInKm = distance*1000;
//     alert(distance + " km = " + disInKm + " m");
// }
// distInMeters();


// function distInFeet(){
//     var distance = +prompt("Enter distance between cities in Kms");
//     var disInFt = distance*3280.84;
//     alert(distance + " km = " + disInFt + " ft");
// }
// distInFeet();


// function distInInches(){
//     var distance = +prompt("Enter distance between cities in Kms");
//     var disInInches = distance*39370.1;
//     alert(distance + " km = " + disInInches + " inches");
// }
// distInInches();


// function distInCm(){
//     var distance = +prompt("Enter distance between cities in Kms");
//     var disInCm = distance*100000;
//     alert(distance + " km = " + disInCm + " cm");
// }
// distInCm();





// Q9


// function overtime() {
//     var workingHours = 40;
//     var overtimeHours = +prompt("Enter total over time hours :");
//     var overtimeRatePerHour = 12;
//     var totalOvertime = overtimeHours * overtimeRatePerHour;
//     alert("Total Overtime : " + totalOvertime + " RS ")
// }
// overtime();





// Q10



// var amount = +prompt("Enter amount to Withdraw :");
// var otherThanHun = amount%100;    
// var hundred = amount - otherThanHun;
// var noOfHuNotes = hundred /100;

// var note50 = otherThanHun%50;
// var fifty = otherThanHun - note50;
// var noOf50notes = fifty/50;

// var note10 = note50%10;
// var ten = note50-note10;
// var noOf10notes = ten/10;

// alert("You have " + noOfHuNotes + " hundred notes " + noOf50notes + " fifty notes " + noOf10notes +" ten notes")




// THE END //  JS Assighnment by QAMBAR ALI
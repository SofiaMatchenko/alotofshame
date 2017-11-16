/**
 * Created by СПС on 16.11.2017.
 */
//1
var a = '';
for (var i=4; i<401; i++){
    a += i+' '+'<br>';
    document.querySelector('.firstp').innerHTML = a;
};

//2
var b = '';
for (var i=4; i<14; i=i+3){
    b += i+' '+'<br>';
    document.querySelector('.secondp').innerHTML = b;
};
//3
var c = '';
for (var i=654; i>=0; i--){
    c += i+' '+'<br>';
    document.querySelector('.thirdp').innerHTML = c;
};
//4
var d = '';
for (var i=1983; i<2018; i++){
    d += i+' '+'<br>';
    document.querySelector('.fourthp').innerHTML = d;
};
//5
var e = '';
for (var i=-4; i<101; i=i+2){
    e += i+' '+'<br>';
    document.querySelector('.fifthp').innerHTML = e;
};
//1 arr
var arr = [3, 6, 1, 13, 88, 43];

console.log(arr[0]+' '+arr[3]);
//2 arr
var newArr = ['Hi', "hello", 34, "prima"];

console.log(newArr[0]+' '+newArr[newArr.length-1]);
//3 arr
var newSarr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
 console.log(newSarr.length);
 //4 arr
 newSarr[3]= 'new element';
 console.log(newSarr);
 //5 arr
 newSarr[2]=22;
 newSarr[4]=44;
console.log(newSarr);
//6 arr
newSarr.push(100);
console.log(newSarr);
//7 arr
newSarr[12]=200;
console.log(newSarr[11]);
//8 arr
var arrMy = [31, 24, 35, 47, 12];
console.log(arrMy[3]+' '+arrMy[60]);
//9 arr
var myNewArr = [31, 24, 35, 47, 12];
var f='';
for (var i=1; i<8; i=i+3){
    f =i;
    console.log(myNewArr[f]);
}
//10 arr
var arrN = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
for (var i=1; i<6; i++){
    console.log(arrN[i]);
}
//11 arr
var arrM = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
document.getElementById('one').onclick = function () {
    console.log(arrM[document.querySelector('input').value])
};

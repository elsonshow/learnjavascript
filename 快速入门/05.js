/* 
条件判断
 */
var age=20;
if(age>=18){
    alert('adult');
}else{
    console.log("age<18");
    alert('teenager');
}

var year=3;
if(year>=18){
    alert("adult");
}else if(year>=6){
    alert("teenager");
}else{
    alert("kid");
}

'use strict';
var height = parseFloat(prompt("请输入身高（m）:"));
var weight = parseFloat(prompt("请输入体重（kg）："));
var bmi=weight/(height*height);
if(bmi<18.5){
    alert("体重过轻");
}else if(bmi>=18.5&&bmi<=25){
    alert('体重正常');
}else if(bmi>25&&bmi<=28){
    alert('体重过重');
}else if(bmi>28&&bmi<=32){
    alert('属于肥胖');
}else{
    alert('严重肥胖');
}
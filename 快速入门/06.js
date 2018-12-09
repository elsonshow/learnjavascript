/* 
循环
 */
var x = 0;
var i;
for(i=1;i<=10000;i++){
    x=x+i;
}


var x=1;
var i;
for(i=1;i<=10;i++){
    x=x*i;
}

var arr = ['Apple','Google','Microsoft'];
var i,x;
for(i=0;i<arr.length;i++){
    x=arr[i];
    console.log(x);
}

var x=0; 
for(;;){
    if(x>100){
        break;
    }
    x++;
}

var o={
    name:'Jack',
    age:20,
    city:'Beijing'
};
for(var key in o){
    if(o.hasOwnProperty(key))
        console.log(key);
}

var x=0;
var n=99;
while(n>0){
    x=x+n;
    n=n-2;
}
x;


var n=0;
do{
    n=n+1;
}while(n<100);
n;
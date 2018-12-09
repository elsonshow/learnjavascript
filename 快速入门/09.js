/* 定义函数 */
function abs(x){
    if(x>=0){
        return x;
    }else{
        return -x;
    }
}


var abs = function(x)
{
    if(typeof x !== 'number')
    {
        throw 'Not a number';
    }
    if(x>=0){
        return x;
    }else{
        return -x;
    }
};

abs(10);
abs(-9);
abs(10,'blablabla');
abs(-9,'haha','hehe',null);
abs();//NaN

arguments;//函数调用时传入的参数组
function foo(a,b,...rest)//rest 除a,b外的参数组
{
    console.log('a='+a);
    console.log('b='+b);
    console.log(rest);
}

// 名字空间
var MYAPP={};
MYAPP.name='myapp';
MYAPP.version=1.0;
MYAPP.foo=function(){
    return 'foo';
}




function foo(){
    var sum=0;
    for(var i=0;i<100;i++)
    {
        sum+=i;
    }
    //good
    i+=1;
}


function foo(){
    var sum=0;
    for(let i=0;i<100;i++)//es6
    {
        sum+=i;
    }
    //error
    //i+=1;
}

const PI =3.14; //es6

// 如果浏览器支持解构赋值就不会报错: es6
var [x, y, z] = ['hello', 'JavaScript', 'ES6'];

let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];
x; // 'hello'
y; // 'JavaScript'
z; // 'ES6'


var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};
var {name, age, passport} = person;
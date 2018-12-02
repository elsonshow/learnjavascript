//概述
/*
JavaScript代码可以嵌入到网页任何地方
通常放在<head>中 
<script>...</script>
可以直接包含JavaScript代码
也可以引用代码文件
 */
// Visual Studio Code 编写JavaScript
// 浏览器运行
// 控制台调试
alert('Hello, world');//查看执行效果




// 基本语法
/*  
语句以;结束,但不强制，一般不要省略较好，能避免歧义
语句块用{...},可以嵌套
缩进有利于代码理解
*/ 
var x = 1;
'Hello, world';
var x1 = 1; var y = 2; //不建议一行写多个语句
if(2>1)
{
    x=1;
    y=2;
    z=3;
    if(x<y)
    {
        z=4;
    }
    if(x>y)
    {
        z=5;
    }
}



// 数据类型
/* 
Number
不区分整数和浮点数
 */
123; //整数
0.456; //浮点数
1.2345e3; //科学计数法
-99;   //负数
NaN; 0/0;    //Not a Number
Infinity;2/0; //无限大
/* 
字符串 单引号或双引号括起来的任意文本
 */
"abd";
'a';
/* 
布尔值
&&
||
!
 */
true;
false;
/* 
比较运算符
== 自动转换数据类型再比较
=== 不转换类型比较
NaN 不跟任何值相等，包括它本身
 */
2>5;
5>=2;
7==7;
isNaN(NaN);//true
/* 
null 空值
undefined 未定义
 */



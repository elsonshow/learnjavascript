/* 
字符串，'' 或 "" 括起来的字符
可以包含转义字符
 */
//ES6 多行字符串表示法 `...`
console.log(`多行
字符串
测试`);
var name = '小明';
var age = 20;
var message = '你好,'+name+'，你今年'+age+'岁了！';
var message = '你好,${name}，你今年${age}岁了！';//ES6 模板字符串
alert(message);

var s="Hello,world!";
s.length;
s[0];
s[6];
s[7];
s[12];
s[13];
s[0]='X';
alert(s);
s.toUpperCase();
s.toLowerCase();
s.indexOf("world"); //指定字符串出现的位置，没有子串返回-1
s.substring(0,5);//返回指定索引区间的子串

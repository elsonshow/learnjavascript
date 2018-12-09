/* iterable */
// 不太懂
var a=['A','B','C'];
var s = new Set(['A','B','C']);
var m = new Map([1,'x'],[2,'y'],[3,'z']);
for(var x of a)
{
    console.log(x);//'A','B','C'
}
for(var x of s)
{
    console.log(x);
}
for(var x of m)
{
    console.log(x);
}
a.name ='Hello';
for(var x in a){
    console.log(x);//'0','1','2','name'
}

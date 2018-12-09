/* Map & Set */
// ES6
var m=new Map();
m.set('Adam',67);
m.set('Bob',59);
m.has('Adam');//true;
m.get('Adam');//67
m.delete('Adam');
m.get('Adam');//undefined
var s=new Set();

var m = new Map([['Michael',95],['Bob',75],['Tracy',85]]);
m.get('Michael');


var s1=new Set();//不存在相同元素
var s2=new Set([1,2,3]);
var s = new Set([1,2,3,3,'3']);
s;//{1,2,3,"3"}
s.add(4);



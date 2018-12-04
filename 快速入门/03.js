var arr = [1,2,3.14,'Hello',null,true];
arr.length;
arr.length=3;
arr;
arr.length=6;
arr;
arr[1];
arr[5]='x';
arr.indexOf(1);
arr.indexOf('x'); //返回指定元素的位置
arr.slice(0,3);//包括开始索引，不包括结束索引
arr.slice(3);//从索引3开始到结束
arr.slice();//从头到尾截取所有元素
var aCopy = arr.slice();
aCopy===arr;//false
//栈 放入末尾
arr.push('x','y');//返回arr新的长度
arr.pop();//返回'y'
//头部添加、删除
arr.unshift('A',"B");
arr;
arr.shift();
arr;
arr.sort();//按默认方式排序
arr.reverse();//数组反转
arr.splice(2,3,"google",'facebook')//从索引2开始删除3个元素，添加两个元素
var added = arr.concat([1,2,3]);//数组连接，返回新数组
arr.join('-')//用-连接所有的数组内容
var darr=[[1,2,3],[400,500,600],'-'];//多维数组
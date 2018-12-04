/* 
对象
 */

 var xiaoming = {
     name:'小明',
     birth:1990,
     school:'No.1 Middle School',
     height:1.70,
     weight:65,
     score:null
 };

 xiaoming.name;
 xiaoming.birth;

 var xiaohong={
     name:'小红',
     'middle-school':'No.1 Middle School'
 };
 xiaohong['middle-school'];
 xiaohong['name'];
 xiaohong.name;
 xiaohong.age;
 xiaohong.age=18;
 xiaohong.age;
 delete xiaohong.age;
 xiaohong.age;
 delete xiaohong["name"];
 xiaohong.name;

 'name' in xiaoming;//true
 'grade' in xiaoming; //false
 'toString' in xiaoming; //true 继承得来
 xiaoming.hasOwnProperty('name'); //true
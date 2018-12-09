# learnjavascript
javascript   
仅用于学习（廖雪峰官方网站教程）
    
git status 查看时，文件夹中文名显示乱码    
解决方法：    
core.quotepath设为false的话，就不会对0x80以上的字符进行quote。    
中文显示正常
git config --global core.quotepath false
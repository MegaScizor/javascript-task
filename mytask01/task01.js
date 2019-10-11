// 获取标签 DOM元素
var box = document.getElementsByTagName('div');







// 创建一个函数，也就是点击按钮之后运行的JS功能
function randombox() {

    for(i=0;i<9;i++){
        // 随机选择1-9中的三个盒子
        var a = Math.ceil(Math.random()*9);
        // math为获取0-1之间上的随机值，
        // 这个值乘以9  math.ceil为向上取整，就为1-9.

        var b = Math.ceil(Math.random()*9); 
        var c = Math.ceil(Math.random()*9);
        
        // 判断语句，如果a不等于b不等于c，则跳出循环，
        // 否则继续循环
        if (a !== b && b !== c && c !== a) {
            break;
        }
    }
    // 添加随机颜色
    function randomcolor() {
        // 1-256随机值，math.floor向下取整
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        return "rgb(" + r + ',' + g + ',' + b + ")";
        // 每行随机选择一个数字，然后组合在一起就成了随机颜色
    }

    // 为随机出来的三个盒子赋值上面选出来的随机颜色
    box[a].style.backgroundColor = randomcolor();
    box[b].style.backgroundColor = randomcolor();
    box[c].style.backgroundColor = randomcolor();
    
    console.log(box[a]);
    console.log(box[b]);
    console.log(box[c]);
    // 设定三个颜色不能相同，且颜色都不等于橙色（初始颜色）
    var a = box[a].style.backgroundColor
    var b = box[b].style.backgroundColor
    var c = box[c].style.backgroundColor
    // 如果a等于b，或者等于c，或者任意一个等于橙色，则重新执行一次上面的函数
    if (a == b || a == c || b == c || a == 'rgb(255,165,00)' || b == 'rgb(255,165,00)' || c == 'rgb(255,165,00)') {
        randomcolor()
    }
}




// 让所有盒子颜色变回橙色
function orange() {
    // 声明一个值，这个值小于等于9就自加1（因为包括一个外面的大盒子），
    // 然后全部变成橙色
    for(i=0;i<=9;i++){
        box[i].style.backgroundColor = "#ffa500";
        }
}

function z() {
    // 从上面开始读取，先变橙再变随机颜色，
    // 位置调换之后，会先变成随机颜色，再变成橙色覆盖的，看起来上面都没发生
    orange();
    randombox();
}



// 单击按钮，开始改变颜色
function start(){
    z()
}

// 声明定时器变量
var myVar

//设定开关变量，只能执行一次点击效果。
var kaiguan=1;
    function start(){
    if(kaiguan){
        myVar=setInterval(function(){z()},1000);
        kaiguan = 0;
    }
}


// 停止
function stop() {
    // 点击停止按钮之后，开关又变回了1.可以继续开始
    kaiguan=1;


    // 消除定时器
    clearInterval(myVar);

    // 全部变成橙色
    orange();
    
}



console.log(box);

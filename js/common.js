/**
 * 获取上一个兄弟元素兼容方法
 */
function getPrevElement(ele) {

    //先找一下它的上一个兄弟节点，判断一下是不是标签，如果是就拿来用，如果不是就继续往上找
    var node = ele.previousSibling;

    // 如果node不等于null 而且还不等于标签，那么就继续往上找
    // 因为如果等于null代表找到头了，没必要再往上找
    while (node != null && node.nodeType != 1) {

        //不是标签要继续找上一个的上一个
        node = node.previousSibling;
    }

    //如果是标签就跳出循环了
    // console.log(node); //是标签
    return node;
}


/**
 * 找到下一个兄弟元素兼容写法
 */
function getNextElement(ele) {

    //先取下一个兄弟节点
    var node = ele.nextSibling;

    while (node != null && node.nodeType != 1) {

        //继续往下找
        node = node.nextSibling;
    }

    return node;
}


/**
 * 移动盒子的动画函数
 */
function animate(obj,target) {

    // 先清除上一个计时器
    clearInterval(obj.timerID);
    // 保证不管点多少次，只有一个计时器
    obj.timerID = setInterval(function () {

        // 获取一下当前位置
        var current = obj.offsetLeft;

        // 要用距离 判断是否大于10，大于就走，不大于就直接到目的地
        if (Math.abs(target - current) > 10) {
            // 当前位置往前走1步（1步为10像素）
            current += target > current ? 10 : -10;
            obj.style.left = current + "px";
            
        } else {

            //距离不够走一步，就直接到目的地
            obj.style.left = target + "px";
        }

        // 如果到了目的地就停止
        if (current == target) {

            clearInterval(obj.timerID);
        }

    }, 5);
}
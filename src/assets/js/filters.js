//视频时间过滤器 秒
let setTime = function (val) {
    if (!val) return "00:00";
    let min = parseInt(val / 60);
    if (min < 10) {
        min = "0" + min;
    }
    let sec = parseInt(val % 60);
    if (sec < 10) {
        sec = "0" + sec;
    }
    val = `${min}:${sec}`;
    return val;
}
export { setTime }

//数字过滤器 大于1w +万字
let setNum = function (val) {
    if (!val) return 0;
    let num = val;
    if (val >= 10000) {
        num = (num / 10000).toFixed(1) + '万'
        return num
    } else {
        return num;
    }

}
export { setNum }

//日期过滤器
let setDate = function (val) {

}
export { setDate }
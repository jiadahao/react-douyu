import R from 'ramda'
import md5 from 'js-md5'
// const md5=require("js-md5")
// const R =require('ramda')
//根据指定参数返回相应api的完整地址
//请求基地址: http://capi.douyucdn.cn
// console.log(md5("xxas"))
//获取父频道
function getT1Live() {
    return "/api/v1/getColumnList"
}

//获取子频道(参1：父频道名;来自获取父频道对象中的short_name属性)
function getT2Live(short_name){
    return `/api/v1/getColumnDetail?shortName=${short_name}`
}

//获取父频道所有直播列表
function getT1Room(cate_id,limit=20,offset=0){
    return `/api/v1/getColumnRoom/${cate_id}?limit=${limit}&offset=${offset}`
}

//获取子频道所有直播列表
function getT2Room(tag_id,limit=20,offset=0){
    return `/api/v1/live/${tag_id}?&limit=${limit}&offset=${offset}`
}

//获取房间信息(已挂)


//搜索直播间
function searchRoom(str){
    return `/api/v1/searchNew/${search_string}/1?limit=5&offset=0`
}


//--------------------需登录验证-----------------------
//登录获取token
function login(usr,psw){
    const psw_md5=md5(psw);
    return `/api/v1/login?username=${usr}&password=${psw_md5}`
}

//获取个人信息
function getInfo(token){
    return `/api/v1/my_info?token=${token}`
}

//获取关注列表
function getAllReminds(token){
    return `/api/v1/remind_list?token=${token}&limit=10&offset=1`
}

//获取正在直播列表
function getLivingReminds(token,isLiving=true){
    return isLiving?`/api/v1/followRoom?token=${token}&live=1`:`/api/v1/followRoom?token=${token}&live=1`
}

//获取观看历史
function getHistory(token){
    return `/api/v1/history?token=${token}`
}



//----------error------
//取消关注
function delRemind(token,ids){
    return `/api/v1/follow/del`
}
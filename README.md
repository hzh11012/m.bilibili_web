# bilibili_web

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 组件属性介绍

 LoginBtn  | 注释  | 类型
 ---- | ----- | ------  
 onClick  | 按钮单击事件 | event 
 size  | 尺寸，可选值为 large small mini | string  
 plain  | 是否为朴素按钮 | boolean 
 color  | 按钮颜色，支持传入linear-gradient渐变色 | string
 text  | 按钮文字 | string 
 
 LoginText  | 注释  | 类型
 ---- | ----- | ------  
 label  | 输入框左侧文本 | string 
 placeholder  | 占位提示文字 | string  
 type  | 输入框类型, 可选值为 tel digit number textarea password 等 | string 
 maxlength  | 输入的最大字符数 | number | string
 isShowBtn  | 是否显示右侧按钮 | boolean 
 btnMsg  | 右侧按钮文字 | string 
 onClick  | 右侧按钮单击事件 | event 

 LoginTop  | 注释  | 类型
 ---- | ----- | ------  
 middleTop  | 中间文本 | string 
 leftTop  | 左侧插槽 | 
 rightTop  | 右侧文本 | string 
 changeLogin  | 右侧文本单击事件 | event
 
  NavBar  | 注释  | 类型
 ---- | ----- | ------  
 hotSezrch  | 搜索框占位提示文字 | string 
 avatarImg  | 用户头像 | url
 onClick  | 右侧按钮单击事件 | event 
 btnTitle  | 右侧按钮文字 | string
 leftHref  | 左侧Logo的href属性 | url
 middleHref  | 中间搜索框的href属性 | url 
 RightHref  | 右侧用户头像的href属性 | url
 
  UserinfoHeader  | 注释  | 类型
 ---- | ----- | ------  
 userInfo  | 用户数据 | 对象 
   | userInfo注释 | 
 avatarImg  | 用户头像 | url 
 fansNum  | 粉丝数 | string 
 followNum  | 关注数 | string 
 likesNum  | 获赞数 | string 
 btnType  | 按钮类型 true为实心按钮 false为朴素按钮 | boolean 
 name  | 用户昵称 | string 
 gender  | 性别icon 可选0保密 1男 2女 | number 
 level  | 等级icon 可选0-6 | number
 isVip  | 是否为会员 | boolean
 vipType  | 会员类型 | string
 isVerify  | 是否认证 | boolean 
 verifyImg  | 认证类型图片 | url
 verifyContent  | 认证内容 如：bilibili UP主认证：bilibili 知名游戏UP主 | string
 personDesc  | 个人简介描述 | string 
 tags  | 标签 数据对象 | 数组 
    | 以下为插槽 | 
 btn  | 按钮插槽 |  
 
   TabCard  | 注释  | 类型
 ---- | ----- | ------  
 dynamicList  | 动态数据 | 数组 
   | dynamicList注释 | 
 id  | 索引 | number 
 userImg  | 用户头像 | url 
 userBadge  | 用户认证类型 可选0无 1个人 2组织 | number 
 userName  | 用户昵称 | string 
 userExtra  | 用户动态中的时间戳等 | string 
 isSupport  | 该动态是否已经点赞 | boolean 
 TextorNum  | 点赞icon后的显示内容 赞or数量 | string 
    |  | 
 videoList  | 视频数据 | 数组 
   | videoList注释 | 
 id  | 索引 | number 
 videoHref  | 视频url | url 
 videoImg  | 视频封面 | url 
 durationTime  | 视频时间 | string 
 videoTitle  | 视频标题 | string 
 viewNum  | 播放量 | number 
 danmuNum  | 弹幕数 | number 
    |  | 
 albumList  | 相簿数据 | 数组 
   | albumList注释 | 
 id  | 索引 | number 
 albumHref  | 相簿url | url 
 albumImg  | 相簿封面 | url 
 durationPages  | 页 如5P 7P | string 
 albumTitle  | 相簿标题 | string 
 viewNum  | 播放量 | number 
 liuyanNum  | 评论数 | number 
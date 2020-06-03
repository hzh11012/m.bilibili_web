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

## 项目说明
 bilibili 移动web端

 由于找不到合适的接口，故该项目没有使用接口

 
### 组件属性介绍

 LoginBtn  | 注释  | 类型
 ---- | ----- | ------  
 @onClick  | 按钮单击事件 | event 
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
 @onClick  | 右侧按钮单击事件 | event 

 LoginTop  | 注释  | 类型
 ---- | ----- | ------  
 middleTop  | 中间文本 | string 
 leftTop  | 左侧插槽 | 
 rightTop  | 右侧文本 | string 
 @changeLogin  | 右侧文本单击事件 | event
 
  NavBar  | 注释  | 类型
 ---- | ----- | ------  
 hotSezrch  | 搜索框占位提示文字 | string 
 avatarImg  | 用户头像 | url
 @onClick  | 右侧按钮单击事件 | event 
 btnTitle  | 右侧按钮文字 | string
 leftHref  | 左侧Logo的href属性 | url
 middleHref  | 中间搜索框的href属性 | url 
 RightHref  | 右侧用户头像的href属性 | url
 
  UserinfoHeader  | 注释  | 类型
 ---- | ----- | ------  
 userInfo  | 用户数据 | 对象 
 --  | userInfo注释 | --
 avatarImg  | 用户头像 | url 
 fansNum  | 粉丝数 | number 
 followNum  | 关注数 | number 
 likesNum  | 获赞数 | number 
 btnType  | 按钮类型 true为实心按钮 false为朴素按钮 | boolean 
 name  | 用户昵称 | string 
 gender  | 性别icon 可选 0男 1女 其他为保密 | number 
 level  | 等级icon 可选0-6 | number
 isVip  | 是否为会员 | boolean
 vipType  | 会员类型 | string
 isVerify  | 是否认证 | boolean 
 verifyImg  | 认证类型图片 | url
 verifyContent  | 认证内容 如：bilibili UP主认证：bilibili 知名游戏UP主 | string
 personDesc  | 个人简介描述 | string 
 tags  | 标签 数据对象 | 数组 
 --  | 以下为插槽 | --
 btn  | 按钮插槽 |  
 
  TabCard  | 注释  | 类型
 ---- | ----- | ------  
 dynamicList  | 动态数据 | 数组 
 --  | dynamicList注释 | --
 id  | 索引 | number 
 userImg  | 用户头像 | url 
 userBadge  | 用户认证类型 可选 0个人 1组织 其他为无 | number 
 userName  | 用户昵称 | string 
 userExtra  | 用户动态中的时间戳等 | string 
 isSupport  | 该动态是否已经点赞 | boolean 
 TextorNum  | 点赞icon后的显示内容 赞or数量 | string 
 --  | -- | --
 videoList  | 视频数据 | 数组 
 --  | videoList注释 | --
 id  | 索引 | number 
 videoHref  | 视频url | url 
 videoImg  | 视频封面 | url 
 durationTime  | 视频时间 | number 
 videoTitle  | 视频标题 | string 
 viewNum  | 播放量 | number 
 danmuNum  | 弹幕数 | number 
 --  | -- | --
 albumList  | 相簿数据 | 数组 
 --  | albumList注释 | --
 id  | 索引 | number 
 albumHref  | 相簿url | url 
 albumImg  | 相簿封面 | url 
 durationPages  | 页 如5P 7P | string 
 albumTitle  | 相簿标题 | string 
 viewNum  | 播放量 | number 
 liuyanNum  | 评论数 | number 

  UserSpace  | 注释  | 类型
 ---- | ----- | ------  
 userDetail  | 用户详情 | 对象
 --  | userDetail注释 | --
 avatarImg  | 用户头像 | url 
 name  | 用户昵称 | string 
 uid  | 用户UID | number 
 gender  | 性别icon 可选 0男 1女 其他为保密 | number 
 birthday  | 用户生日 | string 
 signature  | 用户个性签名 | string 
 --  | -- | --
 @logOut  | 退出登录 | 事件

  Tabs  | 注释  | 类型
 ---- | ----- | ------  
 tabList  | 选项卡内容 | 对象
 --  | tabList注释 | --
 id  | id | number
 title  | 选项卡标题 | string
 to  | 选项卡href | url

  ChanelTab  | 注释  | 类型
 ---- | ----- | ------  
 videoList  | 选项卡选中后展示的组件内容 | 数组对象
 --  | videoList注释 | --
 id  | id | number
 title  | 组件内分类的标题 | string
 video  | 该分类内的数据 | 数组对象
 ---  | video注释 | ---
 ---  | video注释 | ---
 id  | 索引 | number 
 videoHref  | 视频url | url 
 videoImg  | 视频封面 | url 
 videoTitle  | 视频标题 | string 
 viewNum  | 播放量 | number 
 danmuNum  | 弹幕数 | number 

  HomeTab  | 注释  | 类型
 ---- | ----- | ------  
 banners  | 首页轮播图 | 数组对象
  --  | banners注释 | --
 href  | 图片跳转链接 | url
 imgurl  | 图片链接 | url
  --  | -- | --
 videoList  | 视频数据 | 数组对象
  --  | videoList注释 | --
 id  | id | number
 videoHref  | 视频href | url 
 videoImg  | 视频封面 | url 
 videoTitle  | 视频标题 | string 
 viewNum  | 播放量 | number 
 danmuNum  | 弹幕数 | number 

  VideoPlayer  | 注释  | 类型
 ---- | ----- | ------  
 videoDetail  | 视频的详情 | 对象
  --  | videoDetail注释 | --
 poseterUrl  | 预加载图片链接 | url
 videoUrl  | 视频链接 | url
 tuijian  | 推荐视频 | 对象
  ---  | tuijian注释 | ---
  ---  | tuijian注释 | ---
 id  | id | number
 imgUrl  | 封面图片链接 | url
 title  | 标题 | string
  --  | -- | --
 @tuijianClick  | 播放推荐视频 | 事件 

  VideoInfo  | 注释  | 类型
 ---- | ----- | ------ 
 VideoInfo  | 视频的详情 | 对象
  --  | VideoInfo注释 | --
 isHot  | 是否热门 | boolean
 isActivity  | 是否活动 | boolean
 isAllow  | 是否允许转载 | boolean
 upName  | up名字 | string
 viewNum  | 播放量 | number
 danmuNum  | 弹幕数 | number
 time  | 发布时间 | string
 desc  | 视频描述 | string
 pinglun  | 视频评论数 | number
 channelPage  | 视频所属的类型 | 数组对象
  ---  | channelPage注释 | ---
  ---  | channelPage注释 | ---
 second  | 第二分类 | string
 third  | 第三分类 | string
  --  | -- | --
 tags  | 视频所属标签 | 数组对象
  ---  | tags注释 | ---
  ---  | tags注释 | ---
 id  | id | number
 tagName  | 标签名称 | string
 href  | 标签指向的链接 | url
  --  | -- | --
 @shoucang  | 收藏按钮事件 | 事件 
 @huancun  | 缓存按钮事件 | 事件 
 @fenxiang  | 分享按钮事件 | 事件 
 @pinglun  | 评论按钮事件 | 事件 

  videoCard  | 注释  | 类型
 ---- | ----- | ------ 
 video  | 视频的详情 | 数组对象
  --  | video注释 | --
 id  | id | number
 videoHref  | 视频href | href 
 videoImg  | 视频封面 | url 
 videoTitle  | 视频标题 | string 
 viewNum  | 播放量 | number 
 danmuNum  | 弹幕数 | number 

  VideoRelated  | 注释  | 类型
 ---- | ----- | ------ 
 videoRelated  | 视频的详情 | 数组对象
  --  | videoRelated注释 | --
 id  | id | number
 videoHref  | 视频href | href 
 videoImg  | 视频封面 | url 
 videoTitle  | 视频标题 | string 
 viewNum  | 播放量 | number 
 danmuNum  | 弹幕数 | number 

  VideoComments  | 注释  | 类型
 ---- | ----- | ------ 
 VideoComments  | 视频评论 | 对象
  --  | VideoComments注释 | --
 nums  | 评论数 | number
 avatarImg  | 个人头像链接 | url
 comment  | 评论详情 | 数组对象
  --  | comment注释 | --
  --  | comment注释 | --
 userHref  | 用户空间href | href 
 userName  | 用户姓名 | string 
 content  | 评论内容 | string 
 time  | 评论时间 | string 

  TagInfo  | 注释  | 类型
 ---- | ----- | ------ 
 tagInfo  | 标签数组 | 数组对象
  --  | tagInfo注释 | --
 tagImg  | 标签图片 | url
 tagName  | 标签名字 | string
 followNum  | 关注数 | number
 relatedNum  | 相关视频数 | number

  TagList  | 注释  | 类型
 ---- | ----- | ------ 
 tagList  | 标签数组 | 数组对象
  --  | tagList注释 | --
 id  | id | number
 tagName  | 标签名字 | string
 tagHref  | 标签链接 | href

  TagRelatedvideo  | 注释  | 类型
 ---- | ----- | ------ 
 video  | 标签数组 | 数组对象
  --  | video注释 | --
 id  | id | number
 videoImg  | 视频poster | url
 duration  | 视频时长 | number
 title  | 视频标题 | string
 authorName  | 作者名称 | string
 viewNum  | 观看数 | number
 danmuNum  | 弹幕数 | number
 videohref  | 视频链接 | href

  SearchHead  | 注释  | 类型
 ---- | ----- | ------ 
 @search  | 搜索事件 | event
 placeholder  | placeholder显示的热搜词 | string
 @inputChange  | 检查输入的值 | event

  SearchHot  | 注释  | 类型
 ---- | ----- | ------ 
 hotWord  | 大家都在搜（热搜词） | 数组对象
  --  | hotWord注释 | --
 value  | 热搜词value | string
  --  | -- | --
 @onClick  | 点击热搜词进行搜索 | event

  SearchHistory  | 注释  | 类型
 ---- | ----- | ------ 
 historyWord  | 历史记录 | 数组对象
  --  | historyWord注释 | --
 value  | 历史记录value | string
  --  | -- | --
 @clearHistory  | 清空历史记录localStorage | event
 @onClick  | 点击热搜词进行搜索 | event

  MainPanel  | 注释  | 类型
 ---- | ----- | ------ 
 searchResult  | 搜索结果的综合列表 | 数组对象
  --  | searchResult注释 | --
  --  | 该数据是传到MainPanel组件中的videoCardDetail子组件中 | --
  --  | 所以在此省略videoCardDetail组件的注释 | --
 id  | id | number
 videoImg  | 视频poster | url
 duration  | 视频时长 | number
 title  | 视频标题 | string
 authorName  | 作者名称 | string
 viewNum  | 观看数 | number
 danmuNum  | 弹幕数 | number
 videohref  | 视频链接 | href

  Tab  | 注释  | 类型
 ---- | ----- | ------ 
 searchResult  | 搜索结果的番剧，up，影视数目 | 数组对象
  --  | searchResult注释 | --
 fanjuNum  | 番剧数 | number
 upNum  | up主数 | number
 tvNum  | 影视数 | number
  --  | -- | --
 @toggleTabs  | 切换tab选项卡事件 | event

  FanjuPanel  | 注释  | 类型
 ---- | ----- | ------ 
 searchResult  | 搜索结果的番剧列表 | 数组对象
  --  | searchResult注释 | --
  --  | 该数据是传到FanjuPanel组件中的fanjuCard子组件中 | --
  --  | 所以在此省略fanjuCard组件的注释 | --
 id  | id | number
 fanjuImg  | 番剧poster | url
 title  | 番剧标题 | string
 fanjuHref  | 番剧链接 | href

  UpPanel  | 注释  | 类型
 ---- | ----- | ------ 
 searchResult  | 搜索结果的up主列表 | 数组对象
  --  | searchResult注释 | --
  --  | 该数据是传到UpPanel组件中的upCard子组件中 | --
  --  | 所以在此省略upCard组件的注释 | --
 uid  | up主id | number
 upImg  | up头像 | url
 name  | 名字 | string
 fansNum  | 粉丝数 | number
 videoNum  | 视频数 | number
 sign  | 签名 | string
 upHref  | up个人空间链接 | href

  TvPanel  | 注释  | 类型
 ---- | ----- | ------ 
 searchResult  | 搜索结果的影视列表 | 数组对象
  --  | searchResult注释 | --
  --  | 该数据是传到TvPanel组件中的tvCard子组件中 | --
  --  | 所以在此省略tvCard组件的注释 | --
 id  | id | number
 tvImg  | 影视poster | url
 title  | 标题 | string
 area  | 地区 | number
 cv  | 演员 | number
 staff  | 导演 | string
 tvHref  | 影视链接 | href
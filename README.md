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

### 
这里说明一下组件及其参数的作用                       文件位置../components/common
LoginBtn{                   //封装的vant的按钮组件                               类型
    onClick      //按钮单击事件                                                  event
    size         //尺寸，可选值为 large small mini                               string
    plain        //是否为朴素按钮                                                boolean
    color        //按钮颜色，支持传入linear-gradient渐变色                        string
    text         //按钮文字                                                      string
}
LoginText{                  //封装的vant的输入框组件                             类型
    label        //输入框左侧文本                                                string
    placeholder  //占位提示文字                                                  string
    type         //输入框类型, 可选值为 tel digit number textarea password 等     string
    maxlength    //输入的最大字符数                                              number | string
    isShowBtn    //是否显示右侧按钮                                              boolean  
    btnMsg       //右侧按钮文字                                                  string
    onClick      //右侧按钮单击事件                                              event
}
LoginTop{                   //登录注册头部区域组件                               类型
    middleTop    //中间文本                                                     string
    leftTop      //左侧插槽
    rightTop     //右侧文本                                                     string
    changeLogin  //右侧文本单击事件                                              event
}
NavBar{                     //导航栏组件                                        类型
    hotSezrch    //搜索框占位提示文字                                            string
    avatarImg    //用户头像                                                     url
    onClick      //右侧按钮单击事件                                              event
    btnTitle     //右侧按钮文字                                                 string
    leftHref     //左侧Logo的href属性                                           url
    middleHref   //中间搜索框的href属性                                          url
    RightHref    //右侧用户头像的href属性                                        url
}
UserinfoHeader{             //用户个人中心头部组件                               类型
    avatarImg    //用户头像                                                     url
    fansNum      //粉丝数                                                       string
    followNum    //关注数                                                       string
    likesNum     //获赞数                                                       string
    btnType      //按钮类型 true为实心按钮 false为朴素按钮                        boolean
    btn          //按钮插槽
    name         //用户名                                                       string
    gender       //gender插槽 性别icon
    level        //level插槽  等级icon、
    isVip        //是否为会员                                                    boolean
    vipType      //会员类型                                                     string
    isVerify     //是否认证                                                     boolean
    verifyImg    //认证类型图片                                                  url
    verifyContent//认证内容 如：bilibili UP主认证：bilibili 知名游戏UP主          string
    personDesc   //个人简介描述                                                  string
    tag          //标签插槽  如勋章 uid 等                  
}
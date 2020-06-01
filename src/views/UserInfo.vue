<template>
  <div>
    <nav-bar
      hotSearch="api获取热搜关键词"
      :avatarImg="userInfo.avatarImg"
      btnTitle="下载 App"
      leftHref="/home"
      middleHref="/search"
      rightHref="/userinfo"
      @onClick="downloadApp"
    ></nav-bar>
    <userinfo-header :userInfo="userInfo">
      <button slot="btn" @click="showPop = true">编辑资料</button>
    </userinfo-header>
    <tab-card
      :videoList="this.videoList"
      :albumList="this.albumList"
      :dynamicList="this.dynamicList"
    >
      <div slot="contentTitle">守望先锋</div>
      <div slot="content">sss</div>
    </tab-card>
    <m-footer></m-footer>
    <van-popup :overlay="false" class="pop" v-model="showPop" position="right">
      <user-space @logOut="logout" @isShow="isShowPop" :userDetail="userDetail"></user-space>
    </van-popup>
    <pagego-top></pagego-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue";
import UserinfoHeader from "@/components/common/UserinfoHeader.vue";
import TabCard from "@/components/common/TabCard.vue";
import MFooter from "@/components/common/MFooter.vue";
import UserSpace from "@/components/common/UserSpace.vue";
import PagegoTop from "@/components/common/PagegoTop.vue";
export default {
  data() {
    return {
      showPop: false,
      dynamicList: [
        {
          id: 0,
          userImg: require("@/assets/picture/m.jpg"),
          userBadge: 0,
          userName: "Ice空帆船",
          userExtra: "05-23",
          isSupport: false,
          TextorNum: "赞"
        },
        {
          id: 1,
          userImg: require("@/assets/picture/m.jpg"),
          userBadge: 1,
          userName: "Ice空帆船",
          userExtra: "02-23",
          isSupport: true,
          TextorNum: "2"
        },
        {
          id: 2,
          userImg: require("@/assets/picture/m.jpg"),
          userBadge: 1,
          userName: "Ice空帆船",
          userExtra: "02-23",
          isSupport: true,
          TextorNum: "2"
        },
        {
          id: 3,
          userImg: require("@/assets/picture/m.jpg"),
          userBadge: 1,
          userName: "Ice空帆船",
          userExtra: "02-23",
          isSupport: true,
          TextorNum: "2"
        },
        {
          id: 4,
          userImg: require("@/assets/picture/m.jpg"),
          userBadge: 1,
          userName: "Ice空帆船",
          userExtra: "02-23",
          isSupport: true,
          TextorNum: "2"
        },
        {
          id: 5,
          userImg: require("@/assets/picture/m.jpg"),
          userBadge: 1,
          userName: "Ice空帆船",
          userExtra: "02-23",
          isSupport: true,
          TextorNum: "2"
        }
      ],
      videoList: [
        {
          id: 0,
          videoHref: "/video",
          videoImg: require("@/assets/picture/4.jpg"),
          durationTime: 164,
          videoTitle:
            "维护甲方萨科香港警察：你们吃面包，我去吃海底捞！结果他们真去了……",
          viewNum: "1007.3万",
          danmuNum: "27.3万"
        },
        {
          id: 1,
          videoHref: "/video",
          videoImg: require("@/assets/picture/6.jpg"),
          durationTime: 352,
          videoTitle: "趴着别动",
          viewNum: "44",
          danmuNum: "0"
        }
      ],
      albumList: [
        {
          id: 0,
          albumHref: "/home",
          albumImg: require("@/assets/picture/2.jpg"),
          durationPages: "3P",
          albumTitle:
            "纽约市花了高达2000万美元改造的方舱医院，一个病例都没收治，就拆了…… ​​​[热词系列_知识增加][热词系列_问号]@观察者网",
          viewNum: "164万",
          liuyanNum: "2366"
        },
        {
          id: 1,
          albumHref: "/home",
          albumImg: require("@/assets/picture/5.jpg"),
          durationPages: "5P",
          albumTitle: "词系列_知识增加][热词系列_问号]@观察者网",
          viewNum: "65万",
          liuyanNum: "126"
        }
      ],
      userInfo: {
        avatarImg: require("@/assets/picture/m.jpg"),
        fansNum: "8.2万",
        followNum: "75",
        likesNum: "48.2万",
        btnType: false,
        name: "Ice空帆船",
        gender: 1,
        level: 6,
        isVip: true,
        vipType: "年度大会员",
        isVerify: true,
        verifyImg: require("@/assets/icon_Certification_enterprise.png"),
        verifyContent: "bilibili UP主认证：bilibili 知名游戏UP主",
        personDesc:
          "大家好，我是皮皮团，右上角关注，点一下，玩好几年，看小片不花一分钱(◦˙▽˙◦)投稿发邮箱tzybilibili@163.com",
        tags: [
          {
            id: 0,
            text: "粉丝勋章"
          },
          {
            id: 1,
            text: "uid12831784"
          }
        ]
      },
      userDetail: {
        avatarImg: require("@/assets/picture/m.jpg"),
        name: "Ice空帆船",
        uid: 172738743,
        gender: 0,
        birthday: "07-23",
        signature: "报道先生归也，杏花春雨江南"
      }
    };
  },
  components: {
    NavBar,
    UserinfoHeader,
    TabCard,
    MFooter,
    UserSpace,
    PagegoTop
  },
  methods: {
    downloadApp() {
      console.log("下载App");
    },
    isShowPop() {
      this.showPop = false;
    },
    logout() {
      console.log("退出登录");
    }
  }
};
</script>

<style lang="less" scoped>
.pop {
  background: #f4f4f4;
  height: 100%;
  width: 100%;
  margin-top: 11.5vw;
}
</style>
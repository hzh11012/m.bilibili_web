<template>
  <div>
    <nav-bar
      hotSearch="api获取热搜关键词"
      avatarImg="https://img.yzcdn.cn/vant/cat.jpeg"
      btnTitle="下载 App"
      leftHref
      middleHref
      rightHref
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
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue";
import UserinfoHeader from "@/components/common/UserinfoHeader.vue";
import TabCard from "@/components/common/TabCard.vue";
import MFooter from "@/components/common/MFooter.vue";
import UserSpace from "@/components/common/UserSpace.vue";
export default {
  data() {
    return {
      showPop: false,
      dynamicList: [
        {
          id: 0,
          userImg: "https://img.yzcdn.cn/vant/cat.jpeg",
          userBadge: 0,
          userName: "Ice空帆船",
          userExtra: "05-23",
          isSupport: false,
          TextorNum: "赞"
        },
        {
          id: 1,
          userImg: "https://img.yzcdn.cn/vant/cat.jpeg",
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
          videoHref: "#/userinfo",
          videoImg:
            "http://i2.hdslb.com/bfs/archive/3d111a4ddb23cf17039954d57855974698cbb50a.jpg@468w_292h_1c.png",
          durationTime: "03:50",
          videoTitle:
            "维护甲方萨科香港警察：你们吃面包，我去吃海底捞！结果他们真去了……",
          viewNum: "1007.3万",
          danmuNum: "27.3万"
        },
        {
          id: 1,
          videoHref: "#/userinfo",
          videoImg:
            "http://i2.hdslb.com/bfs/archive/a51873c70c24e86222d5eb16af38de81f60e7481.jpg@468w_292h_1c.png",
          durationTime: "00:25",
          videoTitle: "趴着别动",
          viewNum: "44",
          danmuNum: "0"
        }
      ],
      albumList: [
        {
          id: 0,
          albumHref: "#/userinfo",
          albumImg:
            "https://i0.hdslb.com/bfs/album/363ea877010d181a4a5dacb25e2efa51aa926238.jpg@352w_352h_1c.png",
          durationPages: "3P",
          albumTitle:
            "纽约市花了高达2000万美元改造的方舱医院，一个病例都没收治，就拆了…… ​​​[热词系列_知识增加][热词系列_问号]@观察者网",
          viewNum: "164万",
          liuyanNum: "2366"
        },
        {
          id: 1,
          albumHref: "#/userinfo",
          albumImg:
            "https://i0.hdslb.com/bfs/album/363ea877010d181a4a5dacb25e2efa51aa926238.jpg@352w_352h_1c.png",
          durationPages: "5P",
          albumTitle: "词系列_知识增加][热词系列_问号]@观察者网",
          viewNum: "65万",
          liuyanNum: "126"
        }
      ],
      userInfo: {
        avatarImg: "https://img.yzcdn.cn/vant/cat.jpeg",
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
        verifyImg:
          "http://s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/icon_Certification_enterprise.png",
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
        avatarImg: "https://img.yzcdn.cn/vant/cat.jpeg",
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
    UserSpace
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
  top: 100vw;
}
</style>
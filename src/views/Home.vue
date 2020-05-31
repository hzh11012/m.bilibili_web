<template>
  <div class="main">
    <div class="header">
      <div class="header-box">
        <nav-bar
          hotSearch="api获取热搜关键词"
          :avatarImg="userImg"
          btnTitle="下载 App"
          leftHref="/"
          middleHref
          rightHref="#/userinfo"
          @onClick="downloadApp"
        ></nav-bar>
        <div>
          <tabs :tabList="tabList" @changeTab="changeTab"></tabs>
        </div>
      </div>
    </div>
    <div>
      <home-tab :HomeTablist="HomeTablist" v-if="id==0"></home-tab>
      <chanel-tab :videoList="videoList" v-else></chanel-tab>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue";
import Tabs from "@/components/Home/Tabs.vue";
import HomeTab from "../components/Home/HomeTab.vue";
import ChanelTab from "../components/Home/ChanelTab.vue";
export default {
  components: {
    NavBar,
    Tabs,
    HomeTab,
    ChanelTab
  },
  data() {
    return {
      tabList: [
        { id: 0, title: "首页", to: "#/home" },
        { id: 1, title: "动画", to: "#/home/chanel" },
        { id: 2, title: "番剧", to: "#/home/chanel" },
        { id: 3, title: "国创", to: "#/home/chanel" },
        { id: 4, title: "音乐", to: "#/home/chanel" },
        { id: 5, title: "舞蹈", to: "#/home/chanel" },
        { id: 6, title: "游戏", to: "#/home/chanel" },
        { id: 7, title: "科技", to: "#/home/chanel" },
        { id: 8, title: "数码", to: "#/home/chanel" },
        { id: 9, title: "生活", to: "#/home/chanel" },
        { id: 10, title: "鬼畜", to: "#/home/chanel" },
        { id: 11, title: "时尚", to: "#/home/chanel" },
        { id: 12, title: "娱乐", to: "#/home/chanel" },
        { id: 13, title: "影视", to: "#/home/chanel" },
        { id: 14, title: "纪录", to: "#/home/chanel" },
        { id: 15, title: "电影", to: "#/home/chanel" },
        { id: 16, title: "电视", to: "#/home/chanel" },
        { id: 17, title: "直播", to: "#/home/chanel" },
        { id: 18, title: "相簿", to: "#/home/chanel" }
      ],
      id: 0,
      videoList: [
        {
          id: 0,
          title: "热门推荐",
          video: [
            {
              id: 0,
              videoHref: "#/video",
              videoImg: require("@/assets/picture/1.jpg"),
              videoTitle: "娶妻若如此，枸杞也难医",
              viewNum: "180.6万",
              danmuNum: "3587"
            },
            {
              id: 1,
              videoHref: "#/video",
              videoImg: require("@/assets/picture/2.jpg"),
              videoTitle: "重新认识下！我们叫肤白貌美！风情万种！一眼误终生！",
              viewNum: "300.7万",
              danmuNum: "5918"
            },
            {
              id: 2,
              videoHref: "#/video",
              videoImg: require("@/assets/picture/3.jpg"),
              videoTitle: "这大概就是东方之美了",
              viewNum: "157.2万",
              danmuNum: "5159"
            },
            {
              id: 3,
              videoHref: "#/video",
              videoImg: require("@/assets/picture/4.jpg"),
              videoTitle:
                "这首《Monsters》，如今治愈了多少人！！！ 怪       物 ℳ₯㎕_Monsters",
              viewNum: "85.9万",
              danmuNum: "7781"
            }
          ]
        },
        {
          id: 1,
          title: "MAD·AMV",
          video: [
            {
              id: 0,
              videoHref: "#/video",
              videoImg: require("@/assets/picture/4.jpg"),
              videoTitle: "佟大掌柜想要我搞对象？？？",
              viewNum: "180.6万",
              danmuNum: "3587"
            },
            {
              id: 1,
              videoHref: "#/video",
              videoImg: require("@/assets/picture/3.jpg"),
              videoTitle: "警察：这就是你推理出来的犯人？？？",
              viewNum: "300.7万",
              danmuNum: "5918"
            },
            {
              id: 2,
              videoHref: "#/video",
              videoImg: require("@/assets/picture/2.jpg"),
              videoTitle: "大 学 返 校 现 状",
              viewNum: "157.2万",
              danmuNum: "5159"
            },
            {
              id: 3,
              videoHref: "#/video",
              videoImg: require("@/assets/picture/1.jpg"),
              videoTitle: "【杂乱无章】谈恋爱之后，你会失去很多朋友。",
              viewNum: "85.9万",
              danmuNum: "7781"
            }
          ]
        }
      ],
      HomeTablist: {
        banners: [
          {
            href: "",
            imgurl: require("@/assets/picture/h1.jpg")
          },
          {
            href: "",
            imgurl: require("@/assets/picture/h2.jpg")
          }
        ],
        videoList: []
      },
      activeVideoId: 0,
      userImg: require("@/assets/picture/m.jpg")
    };
  },
  methods: {
    downloadApp() {
      console.log("下载App");
    },
    changeTab(index) {
      this.id = index;
      console.log(index);
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  background-color: white;
}

.header {
  height: 22.4vw;
}
.header-box {
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  top: 0;
}
</style>
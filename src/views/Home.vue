<template>
  <div class="main">
    <div class="header">
      <div class="header-box">
        <nav-bar
          class="sss"
          hotSearch="api获取热搜关键词"
          avatarImg="https://img.yzcdn.cn/vant/cat.jpeg"
          btnTitle="下载 App"
          leftHref="#/home/chanel"
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
      <home-tab :HomeTablist="HomeTablist" v-if="id ==0"></home-tab>
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
              videoHref: "",
              videoImg:
                "http://i2.hdslb.com/bfs/archive/502786af2305ac0adb0730c648c4ea6da963ba87.jpg@480w_270h_1c.webp",
              videoTitle: "佟大掌柜想要我搞对象？？？",
              viewNum: "180.6万",
              danmuNum: "3587"
            },
            {
              id: 1,
              videoHref: "",
              videoImg:
                "http://i2.hdslb.com/bfs/archive/44055b53295e75ef4f0715553b505368d93bb6bf.jpg@480w_270h_1c.webp",
              videoTitle: "警察：这就是你推理出来的犯人？？？",
              viewNum: "300.7万",
              danmuNum: "5918"
            },
            {
              id: 2,
              videoHref: "",
              videoImg:
                "http://i0.hdslb.com/bfs/archive/d7eb3ce844b014b60ef7182b3c8e7684013a7799.jpg@480w_270h_1c.webp",
              videoTitle: "大 学 返 校 现 状",
              viewNum: "157.2万",
              danmuNum: "5159"
            },
            {
              id: 3,
              videoHref: "",
              videoImg:
                "http://i2.hdslb.com/bfs/archive/8688e32d36213b1dc198c573faf3dfe7b6a2e4c3.jpg@480w_270h_1c",
              videoTitle: "【杂乱无章】谈恋爱之后，你会失去很多朋友。",
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
              videoHref: "",
              videoImg:
                "http://i2.hdslb.com/bfs/archive/502786af2305ac0adb0730c648c4ea6da963ba87.jpg@480w_270h_1c.webp",
              videoTitle: "佟大掌柜想要我搞对象？？？",
              viewNum: "180.6万",
              danmuNum: "3587"
            },
            {
              id: 1,
              videoHref: "",
              videoImg:
                "http://i2.hdslb.com/bfs/archive/44055b53295e75ef4f0715553b505368d93bb6bf.jpg@480w_270h_1c.webp",
              videoTitle: "警察：这就是你推理出来的犯人？？？",
              viewNum: "300.7万",
              danmuNum: "5918"
            },
            {
              id: 2,
              videoHref: "",
              videoImg:
                "http://i0.hdslb.com/bfs/archive/d7eb3ce844b014b60ef7182b3c8e7684013a7799.jpg@480w_270h_1c.webp",
              videoTitle: "大 学 返 校 现 状",
              viewNum: "157.2万",
              danmuNum: "5159"
            },
            {
              id: 3,
              videoHref: "",
              videoImg:
                "http://i2.hdslb.com/bfs/archive/8688e32d36213b1dc198c573faf3dfe7b6a2e4c3.jpg@480w_270h_1c",
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
            href:
              "https://www.bilibili.com/blackboard/topic/activity-C3H4ceFg8.html",
            imgurl:
              "http://i0.hdslb.com/bfs/archive/1414f4bf8141d3d20ce4d829a5182c1e1f42ad37.jpg@480w_270h"
          },
          {
            href:
              "https://www.bilibili.com/blackboard/topic/activity-iS90SwSbP.html",
            imgurl:
              "http://i0.hdslb.com/bfs/archive/3413a50a37faa77ffdae8c3d22dffcfabe690709.jpg@480w_270h"
          }
        ],
        videoList: [
          {
            id: 0,
            videoHref: "",
            videoImg:
              "http://i0.hdslb.com/bfs/archive/71dd7e2d957cc489b0ebb699f765d5c7e438ceea.jpg@480w_270h_1c",
            videoTitle: "《入海》bilibili X 毛不易 | 跃入人海，各有风雨灿烂",
            viewNum: "195.9万",
            danmuNum: "1万"
          },
          {
            id: 1,
            videoHref: "",
            videoImg:
              "http://i0.hdslb.com/bfs/archive/71dd7e2d957cc489b0ebb699f765d5c7e438ceea.jpg@480w_270h_1c",
            videoTitle: "《入海》bilibili X 毛不易 | 跃入人海，各有风雨灿烂",
            viewNum: "195.9万",
            danmuNum: "1万"
          },
          {
            id: 2,
            videoHref: "",
            videoImg:
              "http://i0.hdslb.com/bfs/archive/71dd7e2d957cc489b0ebb699f765d5c7e438ceea.jpg@480w_270h_1c",
            videoTitle: "《入海》bilibili X 毛不易 | 跃入人海，各有风雨灿烂",
            viewNum: "195.9万",
            danmuNum: "1万"
          },
          {
            id: 3,
            videoHref: "",
            videoImg:
              "http://i0.hdslb.com/bfs/archive/71dd7e2d957cc489b0ebb699f765d5c7e438ceea.jpg@480w_270h_1c",
            videoTitle: "《入海》bilibili X 毛不易 | 跃入人海，各有风雨灿烂",
            viewNum: "195.9万",
            danmuNum: "1万"
          },
          {
            id: 5,
            videoHref: "",
            videoImg:
              "http://i0.hdslb.com/bfs/archive/71dd7e2d957cc489b0ebb699f765d5c7e438ceea.jpg@480w_270h_1c",
            videoTitle: "《入海》bilibili X 毛不易 | 跃入人海，各有风雨灿烂",
            viewNum: "195.9万",
            danmuNum: "1万"
          },
          {
            id: 6,
            videoHref: "",
            videoImg:
              "http://i0.hdslb.com/bfs/archive/71dd7e2d957cc489b0ebb699f765d5c7e438ceea.jpg@480w_270h_1c",
            videoTitle: "《入海》bilibili X 毛不易 | 跃入人海，各有风雨灿烂",
            viewNum: "195.9万",
            danmuNum: "1万"
          },
          {
            id: 7,
            videoHref: "",
            videoImg:
              "http://i0.hdslb.com/bfs/archive/71dd7e2d957cc489b0ebb699f765d5c7e438ceea.jpg@480w_270h_1c",
            videoTitle: "《入海》bilibili X 毛不易 | 跃入人海，各有风雨灿烂",
            viewNum: "195.9万",
            danmuNum: "1万"
          },
          {
            id: 8,
            videoHref: "",
            videoImg:
              "http://i0.hdslb.com/bfs/archive/71dd7e2d957cc489b0ebb699f765d5c7e438ceea.jpg@480w_270h_1c",
            videoTitle: "《入海》bilibili X 毛不易 | 跃入人海，各有风雨灿烂",
            viewNum: "195.9万",
            danmuNum: "1万"
          },
          {
            id: 9,
            videoHref: "",
            videoImg:
              "http://i0.hdslb.com/bfs/archive/71dd7e2d957cc489b0ebb699f765d5c7e438ceea.jpg@480w_270h_1c",
            videoTitle: "《入海》bilibili X 毛不易 | 跃入人海，各有风雨灿烂",
            viewNum: "195.9万",
            danmuNum: "1万"
          },
          {
            id: 10,
            videoHref: "",
            videoImg:
              "http://i0.hdslb.com/bfs/archive/71dd7e2d957cc489b0ebb699f765d5c7e438ceea.jpg@480w_270h_1c",
            videoTitle: "《入海》bilibili X 毛不易 | 跃入人海，各有风雨灿烂",
            viewNum: "195.9万",
            danmuNum: "1万"
          }
        ]
      }
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
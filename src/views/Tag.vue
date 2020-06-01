<template>
  <div class="main">
    <nav-bar
      hotSearch="api获取热搜关键词"
      :avatarImg="avatarImg"
      btnTitle="下载 App"
      leftHref="/home"
      middleHref="/search"
      rightHref="/userinfo"
      @onClick="downloadApp"
    ></nav-bar>
    <tag-info :tagInfo="tagInfo" @follow="follow"></tag-info>
    <tag-list :tagList="tagInfo.tagList"></tag-list>
    <tag-relatedvideo :relatedList="tagInfo.relatedList"></tag-relatedvideo>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue";
import TagInfo from "@/components/Tag/TagInfo.vue";
import TagList from "@/components/Tag/TagList.vue";
import TagRelatedvideo from "@/components/Tag/TagRelatedvideo.vue";

export default {
  data() {
    return {
      avatarImg: require("@/assets/picture/m.jpg"),
      tagInfo: {
        tagImg: require("@/assets/picture/2.jpg"),
        tagName: "押韵狂魔",
        followNum: 420,
        relatedNum: 73,
        tagList: [
          { id: 0, tagName: "守望先锋", tagHref: "/tag" },
          { id: 1, tagName: "铁拳", tagHref: "/tag" },
          { id: 2, tagName: "曹飞", tagHref: "/tag" },
          { id: 3, tagName: "末日铁拳", tagHref: "/tag" },
          { id: 4, tagName: "济南屁王", tagHref: "/tag" },
          { id: 5, tagName: "OVERWATCH", tagHref: "/tag" },
          { id: 6, tagName: "上勾拳", tagHref: "/tag" },
          { id: 7, tagName: "你倒是跑啊", tagHref: "/tag" },
          { id: 8, tagName: "OW", tagHref: "/tag" }
        ],
        relatedList: [
          {
            id: 0,
            videoImg: require("@/assets/picture/1.jpg"),
            duration: 150,
            title: "【惩戒瑶】这种人应该挺孤单的！",
            authorName: "玩亦杰的曜桑",
            viewNum: "30.8万",
            danmuNum: "760",
            videohref: "/video"
          },
          {
            id: 1,
            videoImg: require("@/assets/picture/2.jpg"),
            duration: 238,
            title: "老是先原地眩晕再跳大？那就让他们融为一体！",
            authorName: "骚铭",
            viewNum: "12.3万",
            danmuNum: "1159",
            videohref: "/video"
          },
          {
            id: 2,
            videoImg: require("@/assets/picture/3.jpg"),
            duration: 206,
            title: "【大理寺日志】《嘿！陈拾》一首歌看完大理寺日志！",
            authorName: "Ice空帆船",
            viewNum: "10.1万",
            danmuNum: "432",
            videohref: "/video"
          },
          {
            id: 3,
            videoImg: require("@/assets/picture/4.jpg"),
            duration: 287,
            title: "只有我们国漫，才能剪出古风的感觉！",
            authorName: "Adou阿豆",
            viewNum: "4.8万",
            danmuNum: "153",
            videohref: "/video"
          },
          {
            id: 4,
            videoImg: require("@/assets/picture/5.jpg"),
            duration: 452,
            title: "4K超清【IU】 “Blueming”",
            authorName: "月光下弹月光",
            viewNum: "117.9万",
            danmuNum: "3970",
            videohref: "/video"
          },
          {
            id: 5,
            videoImg: require("@/assets/picture/6.jpg"),
            duration: 122,
            title: "“我一路向北，离开有你的季节”",
            authorName: "囧墙先生",
            viewNum: "286.9万",
            danmuNum: "1.6万",
            videohref: "/video"
          }
        ]
      }
    };
  },
  components: {
    NavBar,
    TagInfo,
    TagList,
    TagRelatedvideo
  },
  methods: {
    downloadApp() {
      console.log("下载App");
    },
    follow() {
      console.log("跳转App");
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  background: white;
}
</style>
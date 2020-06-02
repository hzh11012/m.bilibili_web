<template>
  <div class="main">
    <nav-bar
      hotSearch="api获取热搜关键词"
      :avatarImg="userImg"
      btnTitle="下载 App"
      leftHref="/home"
      middleHref="/search"
      rightHref="/userinfo"
      @onClick="downloadApp"
    ></nav-bar>
    <video-player @tuijianClick="tuijianClick" :videoDetail="videoDetail"></video-player>
    <video-info
      :videoInfo="videoDetail.videoInfo"
      @shoucang="shoucang"
      @huancun="huancun"
      @fenxiang="fenxiang"
      @pinglun="pinglun"
    ></video-info>
    <video-related :videoRelated="videoDetail.VideoRelated"></video-related>
    <video-comments class="comments" :VideoComments="videoDetail.VideoComments"></video-comments>
    <pagego-top></pagego-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue";
import VideoPlayer from "@/components/Video/VideoPlayer.vue";
import VideoInfo from "@/components/Video/VideoInfo.vue";
import VideoRelated from "@/components/Video/VideoRelated.vue";
import VideoComments from "@/components/Video/VideoComments.vue";
import PagegoTop from "@/components/common/PagegoTop.vue";
export default {
  components: {
    NavBar,
    VideoPlayer,
    VideoInfo,
    VideoRelated,
    VideoComments,
    PagegoTop
  },
  data() {
    return {
      videoDetail: {
        poseterUrl: require("@/assets/picture/5.jpg"),
        videoUrl:
          "https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4",
        tuijian: {
          id: 25,
          imgUrl: require("@/assets/picture/6.jpg"),
          title:
            "慎入！前方极度妩媚 那些你惹不起的战斗天使 穿上高跟鞋攻击力翻倍！"
        },
        videoInfo: {
          to: "/userinfo", //up跳转链接
          isHot: true, //是否热门
          isActivity: true, //是否活动
          isAllow: true, //是否允许转载
          title: "穿什么高跟鞋呀，光脚攻击翻倍哦！",
          upName: "Ice空帆船",
          viewNum: 2923222,
          danmuNum: 27893,
          time: "05-29",
          desc:
            "一首老歌，听过的人可能已不再年轻，但是希望我们的心能永葆青春！",
          tags: [
            { id: 0, tagName: "守望先锋", href: "/tag" },
            { id: 1, tagName: "彩虹六号", href: "/tag" },
            { id: 2, tagName: "竞技", href: "/tag" },
            { id: 3, tagName: "上勾拳", href: "/tag" },
            { id: 4, tagName: "铁拳", href: "/tag" }
          ],
          pinglun: 12312,
          channelPage: {
            second: "生活",
            third: "国产原创相关"
          }
        },
        VideoRelated: [
          {
            id: 0,
            videoHref: "/video",
            videoImg: require("@/assets/picture/1.jpg"),
            videoTitle: "娶妻若如此，枸杞也难医",
            viewNum: 123897,
            danmuNum: 32432
          },
          {
            id: 1,
            videoHref: "/video",
            videoImg: require("@/assets/picture/1.jpg"),
            videoTitle: "娶妻若如此，枸杞也难医",
            viewNum: 43543,
            danmuNum: 564
          },
          {
            id: 2,
            videoHref: "/video",
            videoImg: require("@/assets/picture/1.jpg"),
            videoTitle: "娶妻若如此，枸杞也难医",
            viewNum: 76768,
            danmuNum: 12321
          },
          {
            id: 3,
            videoHref: "/video",
            videoImg: require("@/assets/picture/1.jpg"),
            videoTitle: "娶妻若如此，枸杞也难医",
            viewNum: 345434,
            danmuNum: 4565
          },
          {
            id: 4,
            videoHref: "/video",
            videoImg: require("@/assets/picture/1.jpg"),
            videoTitle: "娶妻若如此，枸杞也难医",
            viewNum: 56756,
            danmuNum: 768
          },
          {
            id: 5,
            videoHref: "/video",
            videoImg: require("@/assets/picture/1.jpg"),
            videoTitle: "娶妻若如此，枸杞也难医",
            viewNum: 67867,
            danmuNum: 8973
          },
          {
            id: 6,
            videoHref: "/video",
            videoImg: require("@/assets/picture/1.jpg"),
            videoTitle: "娶妻若如此，枸杞也难医",
            viewNum: 13253,
            danmuNum: 4366
          },
          {
            id: 7,
            videoHref: "/video",
            videoImg: require("@/assets/picture/1.jpg"),
            videoTitle: "娶妻若如此，枸杞也难医",
            viewNum: 3466,
            danmuNum: 345
          },
          {
            id: 9,
            videoHref: "/video",
            videoImg: require("@/assets/picture/1.jpg"),
            videoTitle: "娶妻若如此，枸杞也难医",
            viewNum: 14534,
            danmuNum: 3453
          },
          {
            id: 8,
            videoHref: "/video",
            videoImg: require("@/assets/picture/1.jpg"),
            videoTitle: "娶妻若如此，枸杞也难医",
            viewNum: 15677,
            danmuNum: 5444
          }
        ],
        VideoComments: {
          nums: 7413,
          avatarImg: require("@/assets/picture/m.jpg"),
          comment: [
          ]
        }
      },
      userImg: require("@/assets/picture/m.jpg")
    };
  },
  methods: {
    downloadApp() {
      console.log("下载App");
    },
    getVideoDetail() {
      //这里通过axios 根据传入的id进行获取
      console.log("获取视频详情" + this.$store.state.activeVideoId);
    },
    tuijianClick(id) {
      this.$store.commit("activeVideoId", id);
      console.log(id); //
      //这里调用getVideoDetail()方法 进行获取
    },
    shoucang() {
      console.log("收藏");
    },
    huancun() {
      console.log("缓存");
    },
    fenxiang() {
      console.log("分享");
    },
    pinglun() {
      //滑动到评论处
      let el = document.getElementsByClassName("comments")[0];
      this.$nextTick(function() {
        window.scrollTo({ behavior: "smooth", top: el.offsetTop });
      });
    }
  },
  created() {
    this.getVideoDetail();
  }
};
</script>

<style lang="less" scoped>
.main {
  height: auto;
  width: 100%;
  background: white;
}
</style>
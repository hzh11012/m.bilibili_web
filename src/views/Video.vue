<template>
  <div>
    <nav-bar
      hotSearch="api获取热搜关键词"
      avatarImg="https://img.yzcdn.cn/vant/cat.jpeg"
      btnTitle="下载 App"
      leftHref="#/home/chanel"
      middleHref
      rightHref="#/userinfo"
      @onClick="downloadApp"
    ></nav-bar>
    <video-player @tuijianClick="tuijianClick" :videoDetail="videoDetail"></video-player>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue";
import VideoPlayer from "@/components/Video/VideoPlayer.vue";
export default {
  components: {
    NavBar,
    VideoPlayer
  },
  data() {
    return {
      videoDetail: {
        poseterUrl:
          "http://i1.hdslb.com/bfs/archive/462d72853d00d4b3c9ed98990853143fbf80d561.jpg@480w_270h_1c",
        videoUrl:
          "https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4",
        tuijian: {
          id: 25,
          imgUrl:
            "http://i0.hdslb.com/bfs/archive/4f07d00e9908c93596043ba326d3084c8f14ff92.jpg",
          title: "再一次带来了的YES！OK！【AKB48TeamSH栗子沈莹】"
        }
      }
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
      this.videoDetail = {
        poseterUrl:
          "http://i0.hdslb.com/bfs/archive/4f07d00e9908c93596043ba326d3084c8f14ff92.jpg",
        videoUrl:
          "https://stream7.iqilu.com/10339/upload_transcode/202002/09/20200209104902N3v5Vpxuvb.mp4",
        tuijian: {
          id: 45,
          imgUrl:
            "http://i1.hdslb.com/bfs/archive/462d72853d00d4b3c9ed98990853143fbf80d561.jpg@480w_270h_1c",
          title: "再一次带来了的YES！OK！【AKB48TeamSH栗子沈莹】"
        }
      };
    }
  },
  created() {
    this.getVideoDetail();
  }
};
</script>

<style lang="less" scoped>
</style>
<template>
  <div class="up-panel">
    <div class="list">
      <div class="flow-loader">
        <van-list v-model="loading" :finished="finished" @load="onLoad">
          <div class="video-list-box">
            <div class="video-list">
              <up-card v-for="(item,index) in searchResult.upList" :upList="item" :key="index"></up-card>
            </div>
          </div>
        </van-list>
        <not-found v-if="searchResult.upList==''"></not-found>
        <flow-loader :finished="finished"></flow-loader>
      </div>
    </div>
  </div>
</template>

<script>
import upCard from "@/components/Video/videoCards/upCard.vue";
import NotFound from "@/components/common/NotFound.vue";
import FlowLoader from "../common/FlowLoaderNo.vue";
export default {
  props: ["searchResult"],
  data() {
    return {
      finished: false,
      loading: false
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.searchResult.upList.push({
            uid: 1232682,
            upImg: require("@/assets/picture/up.jpg"),
            name: "公主连结ReDive",
            fansNum: 2451287,
            videoNum: 64,
            sign: "与你再次连结的物语",
            upHref: "/userinfo"
          });
        } // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.searchResult.upList.length >= 30) {
          this.finished = true;
        }
      }, 500);
    }
  },
  components: {
    upCard,
    NotFound,
    FlowLoader
  }
};
</script>

<style lang="less" scoped>
.up-panel {
  padding-top: 23.46667vw;
  .flow-loader {
    min-height: 53.33333vw;
    .video-list-box {
      margin-bottom: 5.33333vw;
      .video-list {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
}
</style>
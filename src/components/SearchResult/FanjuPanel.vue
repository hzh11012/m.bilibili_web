<template>
  <div class="fanju-panel">
    <div class="list">
      <div class="flow-loader">
        <van-list v-model="loading" :finished="finished" @load="onLoad">
          <div class="video-list-box">
            <div class="video-list">
              <fanju-card
                v-for="(item,index) in searchResult.fanjuList"
                :fanjuList="item"
                :key="index"
              ></fanju-card>
            </div>
          </div>
        </van-list>
        <not-found v-if="this.searchResult.fanjuList == ''"></not-found>
        <flow-loader :finished="finished"></flow-loader>
      </div>
    </div>
  </div>
</template>

<script>
import fanjuCard from "@/components/Video/videoCards/fanjuCard.vue";
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
        for (let i = 0; i < 5; i++) {
          this.searchResult.fanjuList.push({
            id: i,
            fanjuImg: require("@/assets/picture/fanju0.png"),
            title: "公主连结Re:Dive",
            fanjuHref: "/video"
          });
        } // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.searchResult.fanjuList.length >= 20) {
          this.finished = true;
        }
      }, 500);
    }
  },
  components: {
    fanjuCard,
    NotFound,
    FlowLoader
  }
};
</script>

<style lang="less" scoped>
.fanju-panel {
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
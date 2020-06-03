<template>
  <div class="tv-panel">
    <div class="list">
      <div class="flow-loader">
        <!-- <van-list v-model="loading" :finished="finished" @load="onLoad"> -->
        <div class="video-list-box">
          <div class="video-list">
            <tv-card v-for="(item,index) in searchResult.tvList" :tvList="item" :key="index"></tv-card>
          </div>
        </div>
        <!-- </van-list> -->
        <not-found v-if="searchResult.tvList == ''"></not-found>
        <flow-loader :finished="finished"></flow-loader>
      </div>
    </div>
  </div>
</template>

<script>
import tvCard from "@/components/Video/videoCards/tvCard.vue";
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
    // onLoad() {
    //   // 异步更新数据
    //   // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    //   setTimeout(() => {
    //     for (let i = 0; i < 5; i++) {
    //       this.searchResult.tvList.push({
    //         id: i,
    //         tvImg: require("@/assets/picture/tv0.jpg"),
    //         title: "名侦探柯南：绀青之拳",
    //         area: "地区：日本",
    //         cv:
    //           "演员：高山南 山口胜平 山崎和佳奈 小山力也 绪方贤一 岩居由希子 高木涉 大谷育江 林原惠美 松井菜樱子 桧山修之 石井康嗣 浅川悠 高桥广树 梶裕贵 间宫康弘 林修 河北麻由子 山崎育三郎",
    //         staff: "导演：永冈智佳",
    //         tvHref: "/video"
    //       });
    //     } // 加载状态结束
    //     this.loading = false;
    //     // 数据全部加载完成
    //     if (this.searchResult.tvList.length >= 20) {
    //       this.finished = true;
    //     }
    //   }, 500);
    // }
  },
  components: {
    tvCard,
    FlowLoader,
    NotFound
  }
};
</script>

<style lang="less" scoped>
.tv-panel {
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
<template>
  <div>
    <div class="header-title">
      <span>相关推荐</span>
    </div>
    <div class="video-related">
      <div class="list-box">
        <div class="list">
          <video-carddetail v-for="item in video" :video="item" :key="item.id"></video-carddetail>
        </div>
      </div>
      <flow-loader :finished="finished"></flow-loader>
    </div>
  </div>
</template>

<script>
import videoCarddetail from "../Video/videoCards/videoCarddetail.vue";
import FlowLoader from "@/components/common/FlowLoaderNo.vue";
export default {
  components: {
    FlowLoader,
    videoCarddetail
  },
  props: ["video"],
  data() {
    return {
      finished: true
    };
  }
};
</script>

<style lang="less" scoped>
.header-title {
  display: flex;
  padding: 1.33333vw 2.66667vw;
  margin-top: 2.66667vw;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 4.26667vw;
  }
}
.video-related {
  min-height: 53.33333vw;
  .list-box {
    margin-bottom: 5.33333vw;
    .list {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
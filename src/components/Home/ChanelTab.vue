<template>
  <div class="main">
    <div class="chanel-page" v-for="item in videoList" :key="item.id">
      <div class="video-list-box">
        <div class="video-list">
          <div class="bar">
            <span>{{item.title}}</span>
          </div>
          <div class="card-box">
            <video-card v-for="item1 in item.video" :video="item1" :key="item1.id"></video-card>
          </div>
        </div>
      </div>
    </div>
    <m-footer></m-footer>
  </div>
</template>

<script>
import videoCard from "../Video/videoCards/videoCard";
import MFooter from "@/components/common/MFooter.vue";
export default {
  props: ["videoList"],
  data() {
    return {
      // list: [],
      // loading: false,
      // finished: false
    };
  },
  methods: {
    // onLoad() {
    //   // 异步更新数据
    //   // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    //   setTimeout(() => {
    //     for (let i = 0; i < 10; i++) {
    //       this.list.push(this.list.length + 1);
    //     } // 加载状态结束
    //     this.loading = false;

    //     // 数据全部加载完成
    //     if (this.list.length >= 50) {
    //       this.finished = true;
    //     }
    //   }, 500);
    // }
  },
  components: {
    MFooter,
    videoCard
  }
};
</script>

<style lang="less" scoped>
.main {
  border-top: 1px #f2f2f2 solid;
  padding-top: 2.66667vw;
  .chanel-page {
    min-height: 53.33333vw;
    .video-list-box {
      padding: 0 1.33333vw;
      margin-bottom: 5.33333vw;
      .bar {
        padding: 1.33333vw 2.66667vw;
        font-size: 3.73333vw;
        display: flex;
        justify-content: space-between;
      }
      .card-box {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
}
</style>
<template>
  <div class="video-related">
    <div class="card-box">
      <video-card v-for="item in videoRelated" :video="item" :key="item.id"></video-card>
    </div>
  </div>
</template>

<script>
import videoCard from "../Video/videoCards/videoCard";
export default {
  props:['videoRelated'],
  data() {
    return {
    };
  },
  components: {
    videoCard
  }
};
</script>

<style lang="less" scoped>
.video-related {
  padding: 0 1.33333vw;
  padding-top: 1.6vw;
  margin-bottom: 5.33333vw;
  .card-box {
    display: flex;
    flex-wrap: wrap;
    // a {
    //   width: 50%;
    //   padding: 2.13333vw 1.33333vw;
    //   display: inline-block;
    //   .card {
    //     position: relative;
    //     background-color: #f3f3f3;
    //     background-image: url(../../assets/loading.png);
    //     background-repeat: no-repeat;
    //     background-position: 50%;
    //     overflow: hidden;
    //     height: 25.944vw;
    //     border-radius: 1.6vw;
    //     user-select: none;
    //     img {
    //       position: absolute;
    //       top: 0;
    //       left: 0;
    //       width: 100%;
    //       height: 100%;
    //     }
    //     .count {
    //       box-sizing: border-box;
    //       position: absolute;
    //       bottom: 0;
    //       left: 0;
    //       width: 100%;
    //       font-size: 3.2vw;
    //       padding: 1.33333vw 1.6vw;
    //       display: flex;
    //       color: white;
    //       justify-content: space-between;
    //       background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), transparent);
    //       span {
    //         display: flex;
    //         align-items: center;
    //         i {
    //           margin-right: 1.33333vw;
    //           font-size: 3.333vw;
    //         }
    //       }
    //     }
    //   }
    //   .title {
    //     margin: 0;
    //     font-size: 3.2vw;
    //     color: #212121;
    //     margin-top: 1.6vw;
    //   }
    // }
  }
}
</style>
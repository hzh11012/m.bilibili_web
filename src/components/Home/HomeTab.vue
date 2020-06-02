<template>
  <div class="main">
    <div class="swipe">
      <van-swipe :autoplay="3000" :show-indicators="false">
        <van-swipe-item v-for="(item,index) in HomeTablist.banners" :key="index">
          <router-link :to="item.href">
            <img :src="item.imgurl" class="bannersimg" />
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-list v-model="loading" :finished="finished" @load="onLoad">
      <div class="video-list-box">
        <div class="video-list">
          <video-card v-for="item in HomeTablist.videoList" :video="item" :key="item.id"></video-card>
        </div>
      </div>
    </van-list>
    <flow-loader :finished="finished"></flow-loader>
  </div>
</template>

<script>
import videoCard from "@/components/Video/videoCards/videoCard.vue";
import FlowLoader from "@/components/common/FlowLoaderNo.vue";
export default {
  props: ["HomeTablist"],
  components: {
    FlowLoader,
    videoCard
  },
  data() {
    return {
      loading: false,
      finished: false,
      id: 0
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.HomeTablist.videoList.push({
            id: this.id,
            videoHref: "/video",
            videoImg: require("@/assets/picture/0.jpg"),
            videoTitle: "少卿这么可爱，不如我们……",
            viewNum: 423324,
            danmuNum: 353
          });
          this.id++;
        } // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.HomeTablist.videoList.length >= 50) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  border-top: 1px #f2f2f2 solid;
  .swipe {
    margin-top: 2.667vw;
    padding: 0 2.667vw 0px 2.667vw;
    van-swipe {
      border-radius: 6px;
    }
    .bannersimg {
      width: 100%;
      height: 27.808vw;
      display: block;
    }
  }
  .video-list-box {
    padding: 0 1.33333vw;
    margin-bottom: 5.33333vw;
    .video-list {
      display: flex;
      flex-wrap: wrap;
      .v-card {
        box-sizing: border-box;
        width: 50%;
        padding: 2.13333vw 1.33333vw;
        display: inline-block;
        .card {
          position: relative;
          background-color: #f3f3f3;
          background-image: url(../../assets/loading.png);
          background-repeat: no-repeat;
          background-position: 50%;
          border-radius: 0.53333vw;
          overflow: hidden;
          height: 25.944vw;
          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          .count {
            box-sizing: border-box;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            font-size: 3.2vw;
            padding: 1.33333vw 1.6vw;
            display: flex;
            color: white;
            justify-content: space-between;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), transparent);
            span {
              display: flex;
              align-items: center;
              i {
                margin-right: 1.33333vw;
                font-size: 3.333vw;
              }
            }
          }
        }

        .title {
          margin: 0;
          font-size: 3.2vw;
          color: #212121;
          margin-top: 1.6vw;
        }
      }
    }
  }
  .flow-loader-nomore {
    text-align: center;
    min-height: 1px;
    .seeyou {
      box-sizing: border-box;
      color: #999;
      text-align: center;
      font-size: 3.73333vw;
      padding: 5.33333vw 0;
      img {
        width: 40%;
        margin-bottom: 2.66667vw;
      }
      p {
        margin: 0;
      }
    }
  }
}
</style>
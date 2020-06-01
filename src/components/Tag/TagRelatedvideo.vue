<template>
  <div>
    <div class="header-title">
      <span>相关推荐</span>
    </div>
    <div class="video-related">
      <div class="list-box">
        <div class="list">
          <router-link :to="item.videohref" v-for="item in relatedList" :key="item.id">
            <div class="card">
              <div class="pic-box">
                <img :src="item.videoImg" />
                <span class="duration">{{item.duration | setTime}}</span>
              </div>
              <div class="info">
                <p class="title van-multi-ellipsis--l2">{{item.title}}</p>
                <p class="author">
                  <i class="iconfont icon-up"></i>
                  {{item.authorName}}
                </p>
                <p class="count">
                  <span>
                    <i class="vanfont">&#xEEE5;</i>
                    {{item.viewNum}}
                  </span>
                  <span>
                    <i class="vanfont">&#xEEE6;</i>
                    {{item.danmuNum}}
                  </span>
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <flow-loader :finished="finished"></flow-loader>
    </div>
  </div>
</template>

<script>
import FlowLoader from "@/components/common/FlowLoaderNo.vue";
export default {
  components: {
    FlowLoader
  },
  props: ["relatedList"],
  data() {
    return {
      finished: true
    };
  },
  filters: {
    setTime: function(val) {
      if (!val) return "00:00";
      let min = parseInt(val / 60);
      if (min < 10) {
        min = "0" + min;
      }
      let sec = parseInt(val % 60);
      if (sec < 10) {
        sec = "0" + sec;
      }
      val = `${min}:${sec}`;
      return val;
    }
  }
};
</script>

<style lang="less" scoped>
p {
  margin: 0;
}
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
      a:first-child {
        padding-top: 3.2vw;
      }
      a {
        display: flex;
        padding: 1.6vw;
        .card {
          display: flex;
          flex: 1;
          .pic-box {
            position: relative;
            width: 37.33333vw;
            height: 22.917vw;
            background-color: #f3f3f3;
            background-image: url("../../assets/loading.png");
            background-size: 85%;
            background-repeat: no-repeat;
            background-position: 50%;
            border-radius: 1.06667vw;
            overflow: hidden;
            img {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
            .duration {
              position: absolute;
              right: 1.06667vw;
              bottom: 1.06667vw;
              font-size: 3.2vw;
              padding: 0 0.53333vw;
              color: #fff;
              border-radius: 0.53333vw;
              background: rgba(0, 0, 0, 0.5);
            }
          }
          .info {
            flex: 1;
            font-size: 3.2vw;
            color: #999;
            margin-left: 2.66667vw;
            .title {
              font-size: 3.73333vw;
              color: #222;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-bottom: 2.13333vw;
            }
            .author,
            .count {
              display: flex;
            }
            .author {
              align-items: center;
              margin-bottom: 1.06667vw;
              i {
                margin-right: 1.33333vw;
              }
            }
            .count {
              span:first-child {
                margin-right: 2.66667vw;
              }
              span {
                align-items: center;
                display: flex;
                i {
                  margin-right: 1.33333vw;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
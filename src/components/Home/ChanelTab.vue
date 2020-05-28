<template>
  <div class="main">
    <div class="chanel-page" v-for="item in videoList" :key="item.id">
      <div class="video-list-box">
        <div class="video-list">
          <div class="bar">
            <span>{{item.title}}</span>
          </div>
          <div class="card-box">
            <a :href="item1.videoHref" v-for="item1 in item.video" :key="item1.id">
              <div class="card">
                <img :src="item1.videoImg" />
                <div class="count">
                  <span>
                    <i class="vanfont">&#xE6E6;</i>
                    {{item1.viewNum}}
                  </span>
                  <span>
                    <i class="vanfont">&#xE6E7;</i>
                    {{item1.danmuNum}}
                  </span>
                </div>
              </div>
              <p class="title van-multi-ellipsis--l2">{{item1.videoTitle}}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MFooter from "@/components/common/MFooter.vue";
export default {
  props:['videoList'],
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        } // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 50) {
          this.finished = true;
        }
      }, 500);
    }
  },
  components: {
    MFooter
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
        a {
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
          .title {
            margin: 0;
            font-size: 3.2vw;
            color: #212121;
            margin-top: 1.6vw;
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="main-panel">
    <div class="search-together">
      <div class="order-tabs">
        <a class="order-tab-item" :class="activeIndex==0?'on':''" @click="toggleTabs(0)">默认排序</a>
        <a class="order-tab-item" :class="activeIndex==1?'on':''" @click="toggleTabs(1)">播放多</a>
        <a class="order-tab-item" :class="activeIndex==2?'on':''" @click="toggleTabs(2)">新发布</a>
        <a class="order-tab-item" :class="activeIndex==3?'on':''" @click="toggleTabs(3)">弹幕多</a>
      </div>
      <div class="list">
        <div class="flow-loader">
          <van-list v-model="loading" :finished="finished" @load="onLoad">
            <div class="video-list-box">
              <div class="video-list">
                <video-carddetail v-for="(item,index) in range" :video="item" :key="index"></video-carddetail>
              </div>
            </div>
          </van-list>
          <not-found v-if="range == ''"></not-found>
          <flow-loader :finished="finished"></flow-loader>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import videoCarddetail from "../Video/videoCards/videoCarddetail.vue";
import NotFound from "@/components/common/NotFound.vue";
import FlowLoader from "../common/FlowLoaderNo.vue";
export default {
  props: ["searchResult"],
  data() {
    return {
      activeIndex: 0,
      loading: false,
      finished: false,
      id: 0
    };
  },
  methods: {
    toggleTabs(index) {
      this.activeIndex = index;
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.searchResult.videoList.push({
            id: this.id,
            videoImg: require("@/assets/picture/3.jpg"),
            duration: 206,
            title: "【大理寺日志】《嘿！陈拾》一首歌看完大理寺日志！",
            authorName: "Ice空帆船",
            viewNum: 123142,
            danmuNum: 12003,
            videohref: "/video"
          });

          this.id++;
        } // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.searchResult.videoList.length >= 50) {
          this.finished = true;
        }
      }, 500);
    }
  },
  //此排序功能仅为使用
  //正常条件下应该是请求axios 返回排序后的数组
  computed: {
    range: function() {
      let arr = this.searchResult.videoList;
      if (this.activeIndex == 3) {
        arr.sort(function(a, b) {
          return b.danmuNum - a.danmuNum;
        });
      } else if (this.activeIndex == 0) {
        arr.sort(function(a, b) {
          return a.id - b.id;
        });
      } else if (this.activeIndex == 1) {
        arr.sort(function(a, b) {
          return b.viewNum - a.viewNum;
        });
      }
      return arr;
    }
  },
  components: {
    FlowLoader,
    NotFound,
    videoCarddetail
  }
};
</script>

<style lang="less" scoped>
.main-panel {
  padding-top: 23.46667vw;
  .order-tabs {
    height: 10.66667vw;
    padding: 0 5.33333vw;
    line-height: 10.66667vw;
    display: flex;
    justify-content: space-between;
    background: #f9f9f9;
    border-top: 0.53333vw solid #f4f4f4;
    .order-tab-item {
      display: inline-block;
      color: #757575;
      font-size: 3.73333vw;
    }
    .on {
      color: #fb7299;
    }
  }
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


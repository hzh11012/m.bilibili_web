<template>
  <div>
    <div class="video-info">
      <div class="title">
        <div class="left">
          <a
            v-if="videoInfo.isHot != false || videoInfo.isActivity != false"
            href="https://www.bilibili.com/h5/popular?from=play"
            target="_blank"
          >
            <van-icon v-if="videoInfo.isHot" name="fire" />
            <span>{{videoInfo.isHot?'热门':'活动'}}</span>
          </a>
          <h1
            class="van-ellipsis"
            :class="videoInfo.isHot?'isHot':(videoInfo.isActivity?'isActivity':'')"
          >{{videoInfo.title}}</h1>
        </div>
        <div class="right" :class="rotate?'rotate':''" @click="rotateAndshow">
          <van-icon size="19" color="#999999" name="arrow-down" />
        </div>
        <div class="clear"></div>
      </div>
      <div class="data">
        <a href class="up">{{videoInfo.upName}}</a>
        <span class="viewNum">{{videoInfo.viewNum}}</span>
        <span class="danmuNum">{{videoInfo.danmuNum}}</span>
        <span class="time">{{videoInfo.time}}</span>
      </div>
      <div ref="fold" class="fold-container">
        <p class="copyright" v-if="videoInfo.isAllow">
          <i class="vanfont">&#xE6E9;</i>
          <span>未经作者授权禁止转载</span>
        </p>
        <p class="desc">{{videoInfo.desc}}</p>
        <p class="channel">
          <a href="/">主页</a>
          <span>></span>
          <a href="javascript:void(0);">{{videoInfo.channelPage.second}}</a>
          <span>></span>
          <a href="javascript:void(0);">{{videoInfo.channelPage.third}}</a>
        </p>
        <div class="tags">
          <a :href="item.href" v-for="item in videoInfo.tags" :key="item.id">{{item.tagName}}</a>
        </div>
      </div>
    </div>
    <div class="video-toolbar">
      <div class="left">
        <span class="toolbar-item" @click="shoucang">
          <i class="vanfont">&#xE6E1;</i>
          <span>收藏</span>
        </span>
        <span class="toolbar-item" @click="huancun">
          <i class="vanfont" style="font-size:5vw">&#xE744;</i>
          <span>缓存</span>
        </span>
        <span class="toolbar-item" @click="fenxiang">
          <i class="vanfont">&#xE70F;</i>
          <span>分享</span>
        </span>
      </div>
      <div class="right">
        <span class="toolbar-item" @click="pinglun">
          <i class="vanfont">&#xEEE4;</i>
          <span>{{videoInfo.pinglun}}</span>
        </span>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["videoInfo"],
  data() {
    return {
      rotate: false,
      isShow: false,
      videoInfos: {
        ishot: true,
        isActivity: true,
        upName: "某幻君",
        viewNum: "298.3万次观看",
        danmuNum: "2.7万弹幕",
        time: "05-29"
      },
      foldheight: 0
    };
  },
  methods: {
    rotateAndshow() {
      this.rotate = !this.rotate;
      this.isShow = !this.isShow;
      if (this.isShow) {
        this.$refs.fold.style.height = this.foldheight;
      } else {
        this.$refs.fold.style.height = 0;
      }
    },
    shoucang() {
      this.$emit("shoucang");
    },
    huancun() {
      this.$emit("huancun");
    },
    fenxiang() {
      this.$emit("fenxiang");
    },
    pinglun() {
      this.$emit("pinglun");
    }
  },
  mounted() {
    this.$nextTick(e => {
      this.foldheight = this.$refs.fold.offsetHeight + "px";
      this.$refs.fold.style.height = 0;
    });
  }
};
</script>

<style lang="less" scoped>
.video-info {
  font-size: 0;
  margin-top: 1.6vw;
  padding: 0 3.2vw;
  .title {
    .left {
      float: left;
      width: 86.66667vw;
      position: relative;
      h1 {
        margin: 0;
        font-size: 4.26667vw;
        font-weight: 400;
        display: inline-block;
        color: #212121;
        overflow: hidden;
        width: 86.66667vw;
        height: 6.4vw;
        line-height: 6.4vw;
      }
      .isHot {
        padding-left: 14.66667vw;
      }
      .isActivity {
        padding-left: 12.26667vw;
      }
      a {
        position: absolute;
        display: inline-block;
        padding: 0 1.6vw;
        color: #fb7299;
        height: 5.86667vw;
        line-height: 5.86667vw;
        background: #f4f4f4;
        border-radius: 3.2vw;
        margin-top: 0.53333vw;
        vertical-align: middle;
        i {
          font-size: 3.611vw;
          margin-left: -1.06667vw;
          vertical-align: middle;
        }
        span {
          font-size: 3.2vw;
          vertical-align: middle;
        }
      }
    }
    .right {
      float: right;
      transition: transform 0.1s;
      transform-origin: center;
      height: 6.399vw;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .rotate {
      transform: rotate(180deg);
    }
    .clear {
      clear: both;
    }
  }
  .data {
    font-size: 3.2vw;
    margin-top: 2.13333vw;
    color: #999;
    .up {
      color: #212121;
      margin-right: 4.8vw;
    }
    span {
      display: inline-block;
      vertical-align: middle;
      line-height: 1.44;
    }
    .viewNum,
    .danmuNum {
      margin-right: 2.13333vw;
    }
  }
  .fold-container {
    overflow: hidden;
    transition: height 0.3s;
    p {
      margin: 0;
    }
    .copyright {
      font-size: 3.2vw;
      margin-top: 1.33333vw;
      line-height: 4.8vw;
      color: #999;
      i {
        color: #fb7299;
        vertical-align: middle;
        margin-right: 0.8vw;
      }
      span {
        vertical-align: middle;
      }
    }
    .desc {
      font-size: 3.2vw;
      line-height: 4.8vw;
      color: #999;
      padding-top: 1.33333vw;
      white-space: pre-line;
    }
    .channel {
      margin-top: 2.13333vw;
      font-size: 3.2vw;
      a {
        color: #fb7299;
        margin-right: 1.33333vw;
      }
      span {
        color: #ccc;
        margin-right: 1.33333vw;
      }
    }
    .tags {
      margin-top: 2.93333vw;
      a {
        display: inline-block;
        padding: 2.13333vw 4.8vw;
        font-size: 3.2vw;
        color: #505050;
        background: #f4f4f4;
        margin-bottom: 1.6vw;
        margin-right: 2.66667vw;
        border-radius: 26.66667vw;
      }
    }
  }
}
.video-toolbar {
  padding: 2.93333vw 4.8vw;
  color: #999;
  font-size: 0;
  .left {
    float: left;
    .toolbar-item {
      margin-right: 5.33333vw;
      i {
        margin-right: 1.33333vw;
        font-size: 5.33333vw;
        color: #757575;
        vertical-align: middle;
      }
      span {
        font-size: 2.66667vw;
        vertical-align: middle;
      }
    }
  }
  .right {
    float: right;
    i {
      margin-right: 1.33333vw;
      font-size: 5.33333vw;
      color: #757575;
      vertical-align: middle;
    }
    span {
      font-size: 2.66667vw;
      vertical-align: middle;
    }
  }
  .clear {
    clear: both;
  }
}
</style>
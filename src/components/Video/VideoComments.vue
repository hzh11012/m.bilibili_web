<template>
  <div>
    <div class="video-comments">
      <div class="title">
        评论
        <span class="count">（{{VideoComments.nums}}）</span>
      </div>
      <div class="send">
        <img class="bfs-img" :src="VideoComments.avatarImg" />
        <div class="input">说点什么吧</div>
      </div>
      <div class="list">
        <ul>
          <van-list v-model="loading" :finished="finished" @load="onLoad">
            <li class="comment-item" v-for="(item,index) in VideoComments.comment" :key="index">
              <div class="head">
                <img class="bsf-img" :src="item.userImg" />
              </div>
              <div class="detail">
                <div class="user">
                  <a :href='item.userHref'>{{item.userName}}</a>
                  <span class="time">{{item.time}}</span>
                </div>
                <p class="content">{{item.content}}</p>
              </div>
            </li>
          </van-list>
        </ul>
      </div>
    </div>
    <flow-loader :finished="finished"></flow-loader>
  </div>
</template>

<script>
import FlowLoader from "@/components/common/FlowLoaderNo.vue";
export default {
  props: ["VideoComments"],
  data() {
    return {
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          this.VideoComments.comment.push({
            userImg: require("@/assets/picture/2.jpg"),
            userName: "永远的MG",
            content:
              "川建国暴露的时候，没有一个B站用户是无辜的[doge][doge][doge]",
            time: "5-28"
          });
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.VideoComments.comment.length >= 20) {
          this.finished = true;
        }
      }, 1000);
    }
  },
  components: {
    FlowLoader
  }
};
</script>

<style lang="less" scoped>
.bsf-img {
  background: url(../../assets/loading.png) no-repeat 50%;
  background-size: contain;
  background-color: #e7e7e7;
}
.video-comments {
  padding: 5.33333vw 3.2vw;
  .title {
    height: 11.73333vw;
    line-height: 11.73333vw;
    font-size: 4.26667vw;
    color: #212121;
    .count {
      color: #999;
    }
  }
  .send {
    margin-top: 1.6vw;
    img {
      float: left;
      width: 8vw;
      height: 8vw;
      border-radius: 4vw;
    }
    .input {
      margin-left: 12vw;
      height: 8vw;
      line-height: 8vw;
      display: block;
      border-radius: 4vw;
      padding: 0 2.66667vw;
      background: #f4f4f4;
      color: silver;
      font-size: 3.73333vw;
    }
  }
  .list {
    .comment-item:first-child {
      margin-top: 5.6vw;
    }
    .comment-item {
      clear: both;
      margin-top: 4vw;
      padding-bottom: 3.73333vw;
      border-bottom: 1px solid #e7e7e7;
      font-size: 0;
      .head {
        float: left;
        img {
          float: left;
          width: 9.6vw;
          height: 9.6vw;
          border-radius: 4.8vw;
        }
      }
      .detail {
        margin-left: 12vw;
        .user {
          a {
            font-size: 3.46667vw;
            color: #757575;
          }
          .time {
            float: right;
            font-size: 2.66667vw;
            color: #999;
          }
        }
        .content {
          margin-top: 2.4vw;
          font-size: 3.46667vw;
          color: #212121;
          white-space: pre-line;
          word-break: break-word;
        }
      }
    }
  }
}
</style>
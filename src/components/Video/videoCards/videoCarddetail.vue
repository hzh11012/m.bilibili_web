<template>
  <router-link :to="video.videohref">
    <div class="card">
      <div class="pic-box">
        <img :src="video.videoImg" />
        <span class="duration">{{video.duration | setTime}}</span>
      </div>
      <div class="info">
        <p class="title van-multi-ellipsis--l2">{{video.title}}</p>
        <p class="author">
          <i class="iconfont icon-up"></i>
          {{video.authorName}}
        </p>
        <p class="count">
          <span>
            <i class="vanfont">&#xEEE5;</i>
            {{video.viewNum | setNum}}
          </span>
          <span>
            <i class="vanfont">&#xEEE6;</i>
            {{video.danmuNum | setNum}}
          </span>
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["video"]
};
</script>

<style lang="less" scoped>
p {
  margin: 0;
}
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
      background-image: url("../../../assets/loading.png");
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
          font-size: 4.444vw;
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
            font-size: 4.444vw;
          }
        }
      }
    }
  }
}
</style>
<template>
  <router-link :to='upList.upHref' class="up-item">
    <div class="cover">
      <img :src="upList.upImg" />
    </div>
    <div class="info">
      <p class="name van-ellipsis">{{upList.name}}</p>
      <p class="stat van-ellipsis">粉丝：{{upList.fansNum}} 视频：{{upList.videoNum}}</p>
      <p class="sign van-ellipsis">{{upList.sign}}</p>
    </div>
    <div class="clear"></div>
  </router-link>
</template>

<script>
export default {
  props: ["upList"]
};
</script>

<style lang="less" scoped>
p {
  margin: 0;
}
.up-item {
  display: block;
  padding: 3.2vw;
  .cover {
    display: inline-block;
    width: 16vw;
    height: 16vw;
    float: left;
    img {
      width: 100%;
      height: 100%;
      border-radius: 8vw;
      background: url("../../../assets/loading.png") no-repeat 50%;
      background-size: contain;
      background-color: #e7e7e7;
    }
  }
  .info {
    display: inline-block;
    margin-left: 3.2vw;
    color: #212121;
    width: 69.33333vw;
    font-size: 0;
    .name {
      font-size: 3.73333vw;
      height: 5.33333vw;
    }
    .stat,
    .sign {
      font-size: 3.2vw;
      height: 3.2vw;
      line-height: 3.2vw;
      margin-top: 1.6vw;
      color: #999;
    }
  }
  .clear {
    clear: both;
  }
}
</style>
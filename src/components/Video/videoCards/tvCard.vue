<template>
  <router-link :to="tvList.tvHref" class="fanju-item">
    <div class="cover">
      <img :src="tvList.tvImg" />
    </div>
    <div class="info">
      <p class="title van-ellipsis">{{tvList.title}}</p>
      <p class="area van-ellipsis">{{tvList.area}}</p>
      <p class="cv van-ellipsis">{{tvList.cv}}</p>
      <p class="staff van-ellipsis">{{tvList.staff}}</p>
    </div>
    <div class="clear"></div>
  </router-link>
</template>

<script>
export default {
  props: ["tvList"]
};
</script>

<style lang="less" scoped>
p {
  margin: 0;
}
.fanju-item {
  display: block;
  padding: 3.2vw;
  .cover {
    display: inline-block;
    width: 20.8vw;
    height: 27.73333vw;
    float: left;
    img {
      width: 100%;
      height: 100%;
      border-radius: 1.06667vw;
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
    .title {
      font-size: 3.73333vw;
      height: 5.33333vw;
    }
    .area,
    .cv,
    .staff {
      font-size: 3.2vw;
      height: 3.2vw;
      line-height: 3.2vw;
      margin-top: 2.13333vw;
      color: #999;
    }
  }
  .clear {
    clear: both;
  }
}
</style>